import { NextResponse } from 'next/server';

// pages/api/chat.ts
export  async function POST(request: Request) {
  const { message } = await request.json();

  // Simple dummy logic
  const reply = `You said: "${message}"`;

  return  NextResponse.json({ reply });

  // You can instead use OpenAI API:
  /*
  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    }),
  });
  const openaiData = await openaiRes.json();
  res.status(200).json({ reply: openaiData.choices[0].message.content });
  */
}
