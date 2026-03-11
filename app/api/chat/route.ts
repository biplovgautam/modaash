import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are a friendly and helpful assistant for Modaash — a manpower management platform built for recruitment agencies in Nepal. You help users understand the platform's features such as candidate tracking, employer management, job placements, document handling, and more. Keep your responses concise, professional, and helpful. If someone asks something unrelated, gently guide them back to how Modaash can help their recruitment workflow.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Failed to get response from AI" },
      { status: 500 }
    );
  }
}
