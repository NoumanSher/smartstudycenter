// ==============================================
// API ROUTE - app/api/send-contact/route.ts
// ==============================================
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, gradeLevel, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !gradeLevel || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error. Please check server logs.' },
        { status: 500 }
      );
    }

    console.log('Attempting to send email with Resend...');

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #C71585 0%, #FF1493 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #C71585;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #555;
            }
            .message-box {
              background-color: #f5f5f5;
              padding: 15px;
              border-left: 4px solid #C71585;
              margin-top: 10px;
              white-space: pre-wrap;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${firstName} ${lastName}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="field">
                <span class="label">Grade Level:</span>
                <span class="value">${gradeLevel}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">${message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['nk104626@gmail.com'],
        subject: `New Contact: ${firstName} ${lastName}`,
        html: emailHtml,
      }),
    });

    const responseText = await response.text();
    console.log('Resend API Response Status:', response.status);
    console.log('Resend API Response:', responseText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch (e) {
        errorData = { message: responseText };
      }
      
      console.error('Resend API error:', errorData);
      
      // Return more specific error message
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: errorData.message || errorData.error || 'Unknown error',
          hint: 'Please check your RESEND_API_KEY in .env.local'
        },
        { status: 500 }
      );
    }

    const data = JSON.parse(responseText);
    console.log('Email sent successfully:', data);
    
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error: any) {
    console.error('API error:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message,
        hint: 'Check server console for full error details'
      },
      { status: 500 }
    );
  }
}
