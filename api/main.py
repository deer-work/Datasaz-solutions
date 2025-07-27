import uvicorn
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv, find_dotenv
import os
import openai
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
from langchain.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain_openai import ChatOpenAI
from typing import Optional

load_dotenv(find_dotenv())


app = FastAPI()

# Update CORS configuration to include all development and production URLs
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:8000",
        "https://www.datasaz.com",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
    company: Optional[str] = None
    service: Optional[str] = None


openai.api_key = os.getenv("OPENAI_API_KEY")
sender_email = os.getenv("GMAIL_ADDRESS")
sender_password = os.getenv("GMAIL_APP_PASSWORD")
receiver_email = os.getenv("RECEIVER_EMAIL")


def send_email(form_data: ContactForm):
    if not sender_email or not receiver_email:
        print(
            f"Environment variables not set properly: sender_email={sender_email}, receiver_email={receiver_email}"
        )
        raise HTTPException(status_code=500, detail="Email configuration error")

    body = f"""
    You have received a new message from Datasaz website:

    Name: {form_data.name}
    Email: {form_data.email}
    Message: {form_data.message}
    """
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    subject = f"New Contact Form Submission from {form_data.name}"
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.set_debuglevel(1)
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            print("Email sent successfully")

    except smtplib.SMTPException as e:
        print(f"SMTP error: {e}")
        raise HTTPException(status_code=500, detail=f"Error sending email: {e}")
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")


@app.post("/api/contact")
async def submit_contact_form(form: ContactForm, background_tasks: BackgroundTasks):
    try:
        # Validate the form data
        if len(form.name.strip()) < 5:
            raise HTTPException(
                status_code=400,
                detail="Name must be at least 5 characters long"
            )
        
        if len(form.message.strip()) < 20:
            raise HTTPException(
                status_code=400,
                detail="Message must be at least 20 characters long"
            )

        # Send email in the background
        background_tasks.add_task(send_email, form)
        
        # Return success response
        return {
            "status": "success",
            "message": "Form submitted successfully"
        }
    except HTTPException as he:
        raise he
    except Exception as e:
        print(f"Error processing form submission: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to submit form: {str(e)}"
        )


pdf_path = r"D:\datasaz-solutions\Datasazdoc.pdf"  # Replace with your PDF file path
loader = PyPDFLoader(pdf_path)
documents = loader.load()
print(documents)

# Split the documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=50,
    separators=["\n\n", "\n", "**", "*", ":", "."],
    length_function=len,
)
texts = text_splitter.split_documents(documents)

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(texts, embeddings)
retriever = vectorstore.as_retriever(search_type="similarity", k=2)


# Define the LLM (OpenAI model)
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3,
    streaming=True,
)


system_template = """You are a professional assistant for DataSAZ Solutions, focused solely on providing concise information about the company and its services. Respond in three sentences or fewer, using only details from the provided company data. For questions unrelated to DataSAZ Solutions, politely suggest asking about the company's services or expertise instead. If the information isn't in your current data, simply state that you don't have that specific detail about DataSAZ Solutions.
"""

human_template = """Use the following pieces of context to answer the question at the end.

Context: {context}

Question: {question}"""

chat_prompt = ChatPromptTemplate.from_messages(
    [
        SystemMessagePromptTemplate.from_template(system_template),
        HumanMessagePromptTemplate.from_template(human_template),
    ]
)


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | chat_prompt
    | llm
    | StrOutputParser()
)


class ChatRequest(BaseModel):
    query: str


async def stream_response(query: str):
    async for chunk in rag_chain.astream(query):
        yield chunk


@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        # Log the incoming request
        print(f"Received request: {request.query}")
        print("Streaming response created")
        # Create the streaming response
        return StreamingResponse(
            stream_response(request.query), media_type="text/event-stream"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

# import os
# import logging
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.responses import StreamingResponse
# from pydantic import BaseModel
# from dotenv import load_dotenv, find_dotenv

# # Load environment variables from .env file if available
# load_dotenv(find_dotenv())

# # Set up logging
# logging.basicConfig(level=logging.INFO)
# logger = logging.getLogger(__name__)

# # Set OpenAI API key from environment variables
# import openai
# openai.api_key = os.getenv("OPENAI_API_KEY")

# # Updated langchain imports with current package structure
# from langchain_community.document_loaders import PyPDFLoader
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain_openai import OpenAIEmbeddings
# from langchain_community.vectorstores import FAISS
# from langchain_openai import OpenAI
# # from openai import AsyncOpenAI
# from langchain.prompts import (
#     ChatPromptTemplate,
#     SystemMessagePromptTemplate,
#     HumanMessagePromptTemplate,
# )

# app = FastAPI()

# # Allow CORS for development purposes
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000", "https://renograte.com"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Initialize PDF processing and vector store
# def initialize_knowledge_base():
#     try:
#         PDF_PATH = os.path.join(os.path.dirname(__file__), "RenograteDocumentation.pdf")
#         loader = PyPDFLoader(PDF_PATH)
#         documents = loader.load()
#         logger.info(f"Loaded {len(documents)} documents from PDF.")

#         text_splitter = RecursiveCharacterTextSplitter(
#             chunk_size=300,
#             chunk_overlap=50,
#             separators=["\n\n", "\n", "**", "*", ":", "."]
#         )
#         texts = text_splitter.split_documents(documents)
#         logger.info(f"Split documents into {len(texts)} chunks.")

#         embeddings = OpenAIEmbeddings()
#         vectorstore = FAISS.from_documents(texts, embeddings)
#         return vectorstore
#     except Exception as e:
#         logger.error(f"Error initializing knowledge base: {e}")
#         raise

# # Initialize the vector store at startup
# try:
#     vectorstore = initialize_knowledge_base()
#     retriever = vectorstore.as_retriever(search_type="similarity", search_kwargs={"k": 2})
# except Exception as e:
#     logger.error(f"Failed to initialize knowledge base: {e}")
#     raise

# # Initialize the ChatOpenAI model
# llm = OpenAI(
#     model_name="gpt-4o-mini",
#     temperature=0.3,
#     streaming=True,
# )


# # Define chat prompt templates
# system_template = """
# You are a professional assistant for Renograte, a real estate platform integrating renovation opportunities into property transactions. 
# Provide clear, concise information about how Renograte benefits buyers, sellers, real estate agents, and contractors. 
# Focus on explaining the platform's unique approach to unlocking property potential before closing, without upfront costs. 
# If a question falls outside Renograte's services, politely redirect the conversation to the platform's core value proposition. 
# Use only information from the provided documentation to ensure accuracy.
# """

# human_template = """
# Use the following pieces of context to answer the question at the end.

# Context: {context}

# Question: {question}
# """

# chat_prompt = ChatPromptTemplate.from_messages([
#     SystemMessagePromptTemplate.from_template(system_template),
#     HumanMessagePromptTemplate.from_template(human_template),
# ])

# class ChatRequest(BaseModel):
#     query: str

# async def generate_response(query: str):
#     try:
#         # Retrieve relevant context
#         relevant_docs = retriever.invoke(query)
#         context = "\n\n".join(doc.page_content for doc in relevant_docs)
#         logger.info(f"Retrieved {len(relevant_docs)} relevant documents for query.")

#         # Format the prompt
#         messages = chat_prompt.format_messages(context=context, question=query)

#         # Generate streaming response
#         response = await llm.agenerate([messages])
#         return response
#     except Exception as e:
#         logger.error(f"Error generating response: {e}")
#         raise

# async def stream_chat_response(query: str):
#     try:
#         # Retrieve relevant context
#         relevant_docs = retriever.get_relevant_documents(query)
#         context = "\n\n".join(doc.page_content for doc in relevant_docs)
        
#         # Format the prompt
#         messages = chat_prompt.format_messages(context=context, question=query)
        
#         # Create streaming response using OpenAI's chat completion
#         response = await llm.create(
#             model="gpt-4o-mini",
#             messages=[
#                 {"role": "system", "content": system_template},
#                 {"role": "user", "content": messages[1].content}
#             ],
#             stream=True,
#             temperature=0.3
#         )
        
#         async def response_generator():
#             try:
#                 async for chunk in response:
#                     if chunk and chunk.choices and chunk.choices[0].delta.content:
#                         yield f"data: {chunk.choices[0].delta.content}\n\n"
#             except Exception as e:
#                 logger.error(f"Error in stream generation: {e}")
#                 raise
        
#         return response_generator()
#     except Exception as e:
#         logger.error(f"Error in stream_chat_response: {e}")
#         raise HTTPException(status_code=500, detail=str(e))

# @app.post("/api/chat")
# async def chat_endpoint(request: ChatRequest):
#     """
#     Chat endpoint that accepts a query and returns a streaming response.
#     """
#     logger.info(f"Received chat query: {request.query}")
#     try:
#         # Await the stream_chat_response to get the async generator
#         streaming_generator = await stream_chat_response(request.query)
#         return StreamingResponse(
#             streaming_generator,
#             media_type="text/event-stream"
#         )
#     except Exception as e:
#         logger.error(f"Error in chat endpoint: {e}")
#         raise HTTPException(status_code=500, detail=str(e))
    
# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000) 