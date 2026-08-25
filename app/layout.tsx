import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SUTRA — The AI-native IDE that builds with you',
  description:
    'Chat-first IDE with Astra, an autonomous agent that plans and ships real work. Multi-model routing: GPT-5, Claude 5, Gemini 3, GLM, Grok, DeepSeek, NVIDIA NIM, Ollama.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
