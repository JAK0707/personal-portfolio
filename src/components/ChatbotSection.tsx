import { useState } from 'react';

const FAQS = [
  {
    question: "Who are you?",
    answer: "I'm Jaiditya, a full stack developer passionate about building digital experiences."
  },
  {
    question: "What technologies do you use?",
    answer: "I work with React, TypeScript, Node.js, Python, AWS, Docker, and more."
  },
  {
    question: "Tell me about your projects.",
    answer: "You can view my projects above! I build web apps, AI tools, dashboards, and more."
  },
  {
    question: "How can I contact you?",
    answer: "You can email me at contact@jaiditya.dev or connect via GitHub, LinkedIn, or Twitter."
  }
];

export default function ChatbotSection() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about Jaiditya or his projects.' }
  ]);
  const [input, setInput] = useState('');

  function handleSend() {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    let botMsg = { sender: 'bot', text: "Sorry, I don't have an answer for that yet." };

    for (const faq of FAQS) {
      if (input.toLowerCase().includes(faq.question.toLowerCase().split(' ')[0])) {
        botMsg = { sender: 'bot', text: faq.answer };
        break;
      }
    }

    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  }

  return (
    <section id="chatbot" className="py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Ask Me Anything</span>
          </h2>
          <p className="text-muted-foreground font-mono">
            <span className="text-terminal-green">//</span> Chat with my portfolio bot about me and my work
          </p>
        </div>
        <div className="glass rounded-lg p-6 shadow-lg">
          <div className="h-64 overflow-y-auto mb-4 flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm ${msg.sender === 'bot' ? 'text-primary' : 'text-foreground text-right'}`}>
                <span className="font-mono">{msg.sender === 'bot' ? '🤖' : '🧑'} </span>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 border rounded px-3 py-2 font-mono"
              placeholder="Ask a question..."
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded font-mono"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
