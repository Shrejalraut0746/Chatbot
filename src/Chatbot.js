// Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
  
    // Add user's message to the chat
    const userMessage = {
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    };
    setMessages([...messages, userMessage]);
  
    // Process user input and generate chatbot response
    const botResponse = generateResponse(inputValue);
    const botMessage = {
      text: botResponse,
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    };
    setMessages([...messages, botMessage]);
  
    setInputValue('');
  };
  
  // Function to generate chatbot response based on user input
  const generateResponse = (input) => {
    // Simple logic to generate responses based on user input
    const inputLower = input.toLowerCase();
    if (inputLower.includes('hello') || inputLower.includes('hi')) {
      return "Hi there! How can I assist you today?";
    } else if (inputLower.includes('how are you')) {
      return "I'm just a chatbot, but I'm here to help you!";
    } else if (inputLower.includes('thank')) {
      return "You're welcome!";
    } else {
      return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
  };
  
  return (
    <div className="chatbot-container">
      <div className="header">
        <div className="avatar"></div>
        <span className="title">Timpu</span>
        <div className="status online"></div>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
            <span>{message.time}</span>
          </div>
        ))}
      </div>
      <div className="footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
