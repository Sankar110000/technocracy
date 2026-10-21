import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextResponse } from 'next/server';
import { productsList } from '@/sample/productsData';
import { servicesList } from '@/sample/servicesData';
import { industriesData } from '@/sample/industriesData';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log(messages);
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await generateText({
      model: google('gemini-3.5-flash'), // Fast, cost-effective model optimized for chat
      system: 
        'You are a helpful AI assistant for an enterprise software platform. ' +
        'Help users explore products, architecture, capabilities, and pricing with clear, concise answers.' + 
        `You have these data -  ${servicesList} ${productsList} ${industriesData}`
        ,
      messages,
      temperature: 0.7,
    });
    console.log(result.content);
    
    return NextResponse.json({success: true, response: result.content[0]})
  } catch (error: any) {
      console.log("Gemini api error", error);
    return new Response(
        
      JSON.stringify({ error: 'Failed to process chat request', details: error.message }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}