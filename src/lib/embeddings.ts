import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Simple cosine similarity
function cosineSimilarity(a: number[], b: number[]) {
  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dot / (magA * magB);
}

export async function embedText(text: string) {
  const response = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
}

export function getMostRelevantChunks(
  userEmbedding: number[],
  chunks: { id: string; title: string; content: string }[]
) {
  const scored = chunks.map((chunk) => {
    const similarity = cosineSimilarity(
      userEmbedding,
      chunk.embedding as number[]
    );
    return { ...chunk, similarity };
  });

  return scored.sort((a, b) => b.similarity - a.similarity).slice(0, 3); // return top 3 chunks
}
