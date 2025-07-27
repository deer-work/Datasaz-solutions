import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const contactEndpoint = `${apiUrl}/api/contact`;

    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return NextResponse.json({ 
        message: 'Failed to parse server response. Please ensure the server is running.' 
      }, { status: 500 });
    }

    if (!response.ok) {
      return NextResponse.json({ 
        message: data.detail || data.message || 'Failed to submit form'
      }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ 
      message: error instanceof Error ? error.message : 'Failed to submit form' 
    }, { status: 500 });
  }
} 