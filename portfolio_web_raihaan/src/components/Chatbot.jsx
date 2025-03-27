import { useRef, useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Chatbot = () => {
  const inputRef = useRef();
  const chatContainerRef = useRef(null); 
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    setMessages((prevMessages) => [...prevMessages, { role: "user", content: userMessage }]);
    inputRef.current.value = "";
    setLoading(true);

    try {
      const res = await fetch("https://soft-eng-raihaan.vercel.app/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await res.json();
      setMessages((prevMessages) => [...prevMessages, { role: "bot", content: data.answer }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [...prevMessages, { role: "bot", content: "Terjadi kesalahan, coba lagi nanti." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      <TypeAnimation 
        sequence={["Get to know Raihaan", 2000, "Ask Ickin Assistant about Raihaan", 2000,"You can ask anything about Raihaan!", 2000]} 
        wrapper="h1" 
        speed={80} 
        repeat={2}
        className="flex justify-center bg-gradient-to-r from-blue-500 via-slate-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent" cursor={true}
      />
      <div className="max-w-md mx-auto p-4 bg-black text-purple-500 rounded-lg shadow-lg md:max-w-lg">
        <div ref={chatContainerRef} className="h-64 overflow-y-auto border p-2 bg-black mb-4 border-purple-600 scrollbar-hide">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
              {msg.role === "bot" ? (
                <TypeAnimation sequence={[msg.content]} wrapper="p" speed={70} className="inline-block p-2 rounded-md bg-gray-600" cursor={false} />
              ) : (
                <p className="inline-block p-2 rounded-md bg-purple-700">{msg.content}</p>
              )}
            </div>
          ))}
          {loading && <TypeAnimation sequence={["Typing...", 500, "Typing..", 500, "Typing.", 500]} speed={50} repeat={Infinity} className="text-purple-500" />}
        </div>
        <form className="flex items-center bg-black p-2 " onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
          <input ref={inputRef} type="text" placeholder="Type your question..." className="flex-1 p-2 bg-gray-900 text-purple-300 rounded-md outline-none text-sm md:text-base" required />
          <button type="submit" className="ml-2 p-2 bg-purple-700 text-purple-300 rounded-md hover:bg-purple-600">
            <FaPaperPlane className="text-sm md:text-base" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
