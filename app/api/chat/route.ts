import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Receive the data sent from the front-end chatbot
    const body = await request.json();
    const userMessage = body.message;

    // 2. Here is where we will eventually connect to OpenAI, Claude, or Gemini.
    // For now, we will create a smart mock-backend that answers your specific question.
    let aiResponse = "That is a fascinating topic. How else can I help you explore the Nanakpanthi texts?";

    if (userMessage.toLowerCase().includes("devi")) {
      aiResponse = "Yes! Historical and visual evidence, such as the manuscript depicting patron Sodhi Bhan Singh worshipping Mahakala and Mahakali alongside the Gurus, strongly suggests that Devi worship was a deeply integrated aspect of the pre-colonial Nanakpanthi and Sindhi Hindu tradition.";
    }

    // 3. Send the response back to the front-end
    return NextResponse.json({ reply: aiResponse });

  } catch (error) {
    return NextResponse.json({ error: "Failed to process the request" }, { status: 500 });
  }
}