import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Γεια σας! Πώς μπορώ να σας βοηθήσω;' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
        sender: 'user',
        message: input,
      });

      const botResponses = response.data.map((res) => ({
        sender: 'bot',
        text: res.text,
      }));

      setMessages((prevMessages) => [...prevMessages, ...botResponses]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <div>
      <div style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'bot' ? 'left' : 'right',
              margin: '10px',
            }}
          >
            <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '80%', padding: '10px' }}
        />
        <button type="submit" style={{ width: '18%', padding: '10px' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;