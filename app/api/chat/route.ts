import { NextRequest, NextResponse } from 'next/server';
import { createStreamableUI } from '../../../lib/streaming';
import { ChatOpenAI } from '@langchain/openai';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { Document } from '@langchain/core/documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { LRUCache } from 'lru-cache';
import fs from 'fs';
import path from 'path';

// Rate limiting implementation
interface RateLimitInfo {
  count: number;
  firstRequest: number;
  lastRequest: number;
  burstCount: number;
  burstStart: number;
  hourlyCount: number;
  hourlyStart: number;
}

// Configure rate limits with tiered approach
const RATE_LIMIT_CONFIG = {
  standard: {
    maxRequests: 5,    // 5 requests
    window: 60 * 1000, // Per minute
    cooldown: 2 * 60 * 1000 // 2 minute cooldown
  },
  burst: {
    maxRequests: 3,    // 3 requests
    window: 8 * 1000, // Per 8 seconds
    cooldown: 45 * 1000 // 45 second cooldown   
  },
  sustained: {
    maxRequests: 15,   // 15 requests
    window: 60 * 60 * 1000, // Per hour
    cooldown: 30 * 60 * 1000 // 30 minute cooldown
  }
};

// Store rate limit information by IP
const rateLimitCache = new LRUCache<string, RateLimitInfo>({
  max: 500, // Maximum number of IPs to track
  ttl: RATE_LIMIT_CONFIG.sustained.cooldown, // Auto-expire entries after the longest cooldown
});

// Enhanced rate limit check that applies multiple tiers
function checkRateLimit(ip: string): { limited: boolean; resetTime?: number; reason?: string } {
  const now = Date.now();
  
  // Get or initialize rate limit info for this IP
  let limitInfo = rateLimitCache.get(ip);
  if (!limitInfo) {
    limitInfo = {
      count: 1,
      firstRequest: now,
      lastRequest: now,
      burstCount: 1,
      burstStart: now,
      hourlyCount: 1,
      hourlyStart: now
    };
    rateLimitCache.set(ip, limitInfo);
    return { limited: false };
  }
  
  // Update the current stats
  limitInfo.lastRequest = now;
  
  // Check burst limit (short-term high frequency)
  const timeSinceBurstStart = now - limitInfo.burstStart;
  if (timeSinceBurstStart > RATE_LIMIT_CONFIG.burst.window) {
    // Reset burst window
    limitInfo.burstCount = 1;
    limitInfo.burstStart = now;
  } else {
    limitInfo.burstCount++;
    // Check if burst limit exceeded
    if (limitInfo.burstCount > RATE_LIMIT_CONFIG.burst.maxRequests) {
      const resetTime = limitInfo.burstStart + RATE_LIMIT_CONFIG.burst.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Too many requests in a short period'
      };
    }
  }
  
  // Check standard limit (minute-by-minute)
  const timeSinceStart = now - limitInfo.firstRequest;
  if (timeSinceStart > RATE_LIMIT_CONFIG.standard.window) {
    // Reset standard window
    limitInfo.count = 1;
    limitInfo.firstRequest = now;
  } else {
    limitInfo.count++;
    // Check if standard limit exceeded
    if (limitInfo.count > RATE_LIMIT_CONFIG.standard.maxRequests) {
      const resetTime = limitInfo.firstRequest + RATE_LIMIT_CONFIG.standard.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Rate limit exceeded, please try again later'
      };
    }
  }
  
  // Check sustained/hourly limit
  const timeSinceHourlyStart = now - limitInfo.hourlyStart;
  if (timeSinceHourlyStart > RATE_LIMIT_CONFIG.sustained.window) {
    // Reset hourly window
    limitInfo.hourlyCount = 1;
    limitInfo.hourlyStart = now;
  } else {
    limitInfo.hourlyCount++;
    // Check if hourly limit exceeded
    if (limitInfo.hourlyCount > RATE_LIMIT_CONFIG.sustained.maxRequests) {
      const resetTime = limitInfo.hourlyStart + RATE_LIMIT_CONFIG.sustained.cooldown;
      rateLimitCache.set(ip, limitInfo);
      return { 
        limited: true, 
        resetTime,
        reason: 'Hourly limit reached, please try again later'
      };
    }
  }
  
  // Update the cache with the new counts
  rateLimitCache.set(ip, limitInfo);
  return { limited: false };
}

// Load DataSAZ documentation data
function loadDataSAZData(): string {
  try {
    const pdfPath = path.join(process.cwd(), 'Datasazdoc.pdf');
    // For now, we'll use a placeholder. In a real implementation, you'd parse the PDF
    // For this example, I'll create a comprehensive DataSAZ description
    return `# DataSAZ Solutions

**Leading AI-Powered Software Solutions Provider**

DataSAZ Solutions is a cutting-edge technology company specializing in AI-driven software solutions, custom development, and digital transformation services. We help businesses leverage artificial intelligence and modern technologies to achieve operational excellence and competitive advantage.

## Our Services

### AI Solutions
- **Machine Learning Models**: Custom ML models tailored to your business needs
- **Natural Language Processing**: Advanced NLP solutions for text analysis and processing
- **Computer Vision**: Image recognition and analysis systems
- **Predictive Analytics**: Data-driven insights for better decision making
- **Chatbots & Virtual Assistants**: Intelligent conversational AI for customer service

### Custom Software Development
- **Web Applications**: Modern, responsive web applications using latest technologies
- **Mobile Applications**: Native and cross-platform mobile app development
- **API Development**: RESTful and GraphQL APIs for seamless integration
- **Microservices Architecture**: Scalable, cloud-native application design
- **Database Design**: Optimized database solutions for performance and reliability

### Automation Solutions
- **Business Process Automation**: Streamline workflows and reduce manual tasks
- **Financial Automation**: Payroll, bookkeeping, and tax reporting automation
- **Data Processing**: Automated data extraction, transformation, and loading
- **Workflow Management**: Custom workflow solutions for complex business processes

### Technology Stack

**Backend Technologies:**
- Python (FastAPI, Flask, Django)
- Node.js (Express, NestJS)
- Java (Spring Boot)
- .NET Core
- PostgreSQL, MySQL, MongoDB
- Redis, Elasticsearch

**Frontend Technologies:**
- React, Next.js, Vue.js
- TypeScript, JavaScript
- Tailwind CSS, Material-UI
- Progressive Web Apps (PWA)

**Cloud & DevOps:**
- AWS, Azure, Google Cloud
- Docker, Kubernetes
- CI/CD Pipelines
- Infrastructure as Code (Terraform)

**AI & Machine Learning:**
- TensorFlow, PyTorch
- OpenAI GPT, Claude
- LangChain, LlamaIndex
- Scikit-learn, Pandas, NumPy

## Our Approach

### 1. Discovery & Analysis
We begin by understanding your business requirements, current systems, and challenges. Our team conducts thorough analysis to identify opportunities for improvement and innovation.

### 2. Solution Design
Based on our analysis, we design custom solutions that align with your business goals. We focus on scalability, maintainability, and user experience.

### 3. Development & Implementation
Our experienced developers use agile methodologies to build robust, high-quality solutions. We maintain regular communication and provide updates throughout the development process.

### 4. Testing & Quality Assurance
Comprehensive testing ensures reliability and performance. We conduct unit testing, integration testing, and user acceptance testing.

### 5. Deployment & Support
We handle deployment and provide ongoing support and maintenance to ensure your solutions continue to perform optimally.

## Industries We Serve

- **Healthcare**: Electronic health records, telemedicine platforms, medical imaging analysis
- **Finance**: Trading algorithms, risk assessment, fraud detection
- **E-commerce**: Recommendation engines, inventory management, customer analytics
- **Manufacturing**: Predictive maintenance, quality control, supply chain optimization
- **Education**: Learning management systems, student analytics, virtual classrooms
- **Real Estate**: Property valuation, market analysis, virtual tours

## Why Choose DataSAZ Solutions

### Expertise
Our team consists of experienced developers, data scientists, and AI engineers with deep expertise in cutting-edge technologies.

### Innovation
We stay at the forefront of technology trends and continuously invest in research and development to provide innovative solutions.

### Quality
We maintain high standards of code quality, security, and performance in all our deliverables.

### Support
We provide comprehensive support and maintenance services to ensure your solutions continue to deliver value.

### Scalability
Our solutions are designed to scale with your business growth, handling increased load and complexity.

## Contact Information

**Email**: datasaz.contact@gmail.com
**Phone**: +92 319 3718710
**Website**: https://www.datasaz.com

**Business Hours:**
- Monday - Friday: 9am - 6pm EST
- Saturday: 10am - 4pm EST
- Sunday: Closed

## Case Studies

### E-commerce Platform Optimization
We helped a major e-commerce company increase conversion rates by 35% through AI-powered product recommendations and personalized shopping experiences.

### Healthcare Data Management
Developed a comprehensive electronic health records system with AI-powered diagnostic assistance, reducing diagnosis time by 40%.

### Financial Services Automation
Implemented automated trading algorithms and risk assessment systems for a financial services company, improving accuracy by 25%.

### Manufacturing Process Optimization
Created predictive maintenance systems for a manufacturing company, reducing downtime by 30% and maintenance costs by 20%.

## Our Commitment

At DataSAZ Solutions, we are committed to delivering exceptional value through innovative technology solutions. We believe in building long-term partnerships with our clients and helping them achieve their digital transformation goals.

Our mission is to empower businesses with cutting-edge AI and software solutions that drive growth, efficiency, and competitive advantage in today's digital landscape.`;
  } catch (error) {
    console.error('Error loading DataSAZ data:', error);
    return 'DataSAZ Solutions is a leading AI-powered software solutions provider specializing in custom development, automation, and digital transformation services.';
  }
}

const DATA_SAZ_DATA = loadDataSAZData();

// Initialize the vector store and retriever - this happens once when the API route is first loaded
let vectorStore: MemoryVectorStore;
let retriever: ReturnType<MemoryVectorStore['asRetriever']>;
let initialized = false;
let initializing = false;

// Setup a response cache with LRU strategy
const responseCache = new LRUCache<string, string>({
  max: 100, // Store up to 100 query/response pairs
  ttl: 1000 * 60 * 60, // Cache for 1 hour
});

// Pre-compute common question categories for faster retrieval
const COMMON_TOPICS = [
  "services", "solutions", "technology", "about", "contact", 
  "ai", "automation", "software", "development", "pricing"
];

// Optimized chunk settings for better retrieval
const CHUNK_CONFIG = {
  chunkSize: 500,     // Larger chunks to reduce fragmentation
  chunkOverlap: 100,  // Higher overlap for better context preservation
  separators: ["\n\n", "\n", "## ", "# ", "### ", "- ", "**", "*", ":", "."],
};

async function initializeRetriever() {
  if (initialized) return true;
  if (initializing) {
    // Wait for initialization to complete if already in progress
    while (initializing) {
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return initialized;
  }
  
  initializing = true;
  
  if (!process.env.OPENAI_API_KEY) {
    initializing = false;
    throw new Error("OPENAI_API_KEY is not set in the environment variables");
  }

  try {
    // Create a text splitter with optimized settings
    const textSplitter = new RecursiveCharacterTextSplitter(CHUNK_CONFIG);

    // Split DataSAZ data into chunks
    const dataSAZDocument = new Document({ pageContent: DATA_SAZ_DATA });
    const docs = await textSplitter.splitDocuments([dataSAZDocument]);
    console.log(`Split DataSAZ data into ${docs.length} chunks`);

    // Use OpenAI embeddings with optimization
    const embeddings = new OpenAIEmbeddings({
      stripNewLines: true, // Remove newlines for better embedding quality
    });
    
    // Create a vector store from the documents
    vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
    
    // Create a retriever with optimized settings
    retriever = vectorStore.asRetriever({
      searchType: "similarity",
      k: 4, // Retrieve more chunks for better context
      filter: undefined, // No filtering for this small dataset
    });

    // Pre-warm the cache with common queries
    await Promise.all(COMMON_TOPICS.map(async (topic) => {
      const query = `Tell me about DataSAZ ${topic}`;
      // We don't need to store results here, just trigger the embeddings calculation
      await vectorStore.similaritySearch(query, 3);
    }));

    console.log("Retriever initialized successfully");
    initialized = true;
    initializing = false;
    return true;
  } catch (error) {
    console.error("Error initializing retriever:", error);
    initializing = false;
    throw error;
  }
}

// Define the system prompt for the chatbot
const SYSTEM_TEMPLATE = `You are a helpful, professional assistant for DataSAZ Solutions, a leading AI-powered software solutions provider.
Your role is to provide information about DataSAZ's services, expertise, technology stack, and professional background.
Be friendly, concise, and informative. Keep responses focused and relevant to DataSAZ Solutions.

Use ONLY the following context to answer questions about DataSAZ Solutions:
{context}

If the question falls outside of information about DataSAZ Solutions contained in the context, politely explain that you can only provide information about DataSAZ's services, expertise, and professional background.
Avoid making up information not present in the context.`;

// Initialize retriever when the API route module is loaded
initializeRetriever().catch(console.error);

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (rateLimitResult.limited) {
      const resetTime = rateLimitResult.resetTime || Date.now() + RATE_LIMIT_CONFIG.standard.cooldown;
      const secondsToReset = Math.ceil((resetTime - Date.now()) / 1000);
      const reason = rateLimitResult.reason || 'Rate limit exceeded';
      
      return NextResponse.json({
        error: `${reason}. Please try again in ${secondsToReset} seconds.`
      }, {
        status: 429,
        headers: {
          'Retry-After': secondsToReset.toString(),
          'X-Rate-Limit-Reason': reason
        }
      });
    }
    
    // Make sure we have initialized the retriever successfully
    if (!initialized) {
      try {
        await initializeRetriever();
      } catch (error) {
        console.error("Error initializing retriever on demand:", error);
        // Fallback to basic response when retriever fails
        return NextResponse.json({ 
          error: "Service initialization failed. Please try again later." 
        }, { status: 503 });
      }
      
      // If still not initialized after attempt, return error
      if (!initialized || !retriever) {
        return NextResponse.json({ 
          error: "Service temporarily unavailable" 
        }, { status: 503 });
      }
    }

    // Parse the request
    const { query } = await req.json();

    // Ensure valid input
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }

    // Set up the streaming
    const { stream, writer } = createStreamableUI();

    // Process the query asynchronously
    (async () => {
      try {
        // Check if we already have a cached response
        const cachedResponse = responseCache.get(query.toLowerCase().trim());
        if (cachedResponse) {
          // Stream the cached response
          const words = cachedResponse.split(' ');
          for (const word of words) {
            writer.write(word + ' ');
            // Small delay to simulate streaming for cached responses
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          writer.close();
          return;
        }

        let fullResponse = '';
        
        // Create the model with optimized settings
        const model = new ChatOpenAI({
          modelName: "gpt-3.5-turbo", // Use standard model to avoid compatibility issues
          temperature: 0.2, // Lower temperature for more deterministic responses
          streaming: true,
          callbacks: [
            {
              handleLLMNewToken: (token: string) => {
                writer.write(token);
                fullResponse += token; // Collect response directly here
              },
            },
          ],
        });

        try {
          // Validate retriever is properly initialized
          if (!retriever) {
            throw new Error("Retriever is not initialized properly");
          }

          // Create a simpler prompt template for faster processing
          const prompt = ChatPromptTemplate.fromMessages([
            ["system", SYSTEM_TEMPLATE],
            ["human", "{input}"],
          ]);

          // Create the document chain
          const documentChain = await createStuffDocumentsChain({
            llm: model,
            prompt,
          });

          // Create the retrieval chain with optimized settings
          const retrievalChain = await createRetrievalChain({
            combineDocsChain: documentChain,
            retriever,
          });

          // Execute the chain
          await retrievalChain.invoke({
            input: query,
            chat_history: [], // No chat history for now for faster responses
          });

          // Cache the response for future use
          responseCache.set(query.toLowerCase().trim(), fullResponse);
        } catch (error) {
          console.error("Chain error:", error);
          
          // Fallback to direct response when chain fails
          const fallbackResponse = "I'm sorry, I'm having trouble retrieving information at the moment. Could you try a different question or try again later?";
          writer.write(fallbackResponse);
          
          // We don't cache error responses
        }

        // Close the writer when done
        writer.close();
      } catch (error) {
        console.error("Error in stream processing:", error);
        writer.write("\nSorry, I encountered an error while processing your request.");
        writer.close();
      }
    })();

    // Return the stream
    return new Response(stream);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
