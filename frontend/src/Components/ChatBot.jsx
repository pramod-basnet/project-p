import React, { useState, useRef, useEffect } from 'react';

// Main ChatBot component
const ChatBot = () => {
  // State to store chat messages. Each message is an object with sender ('user' or 'ai') and text.
  const [messages, setMessages] = useState([]);
  // State to manage loading status while waiting for AI response.
  const [isLoading, setIsLoading] = useState(false);
  // State to store the current user input in the text field.
  const [input, setInput] = useState('');

  // Ref for automatically scrolling to the latest message in the chat window.
  const messagesEndRef = useRef(null);

  // Effect hook to scroll to the bottom of the chat window whenever the 'messages' state changes.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // Dependency array: runs when 'messages' array updates.

  // Function to call the Gemini API for AI responses.
  const callGeminiApi = async (userMessage) => {
    setIsLoading(true); // Set loading state to true to show a loading indicator.

    // Prepare the chat history payload for the Gemini API.
    // The API expects a 'contents' array with 'role' and 'parts'.
    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: userMessage }] });

    // Define the payload for the API request.
    const payload = {
      contents: chatHistory, // The conversation history to send to the model.
      generationConfig: {
        // Configuration for text generation.
        // temperature: Controls randomness. Lower values are more deterministic.
        // topP: Controls diversity via nucleus sampling.
        // topK: Controls diversity by sampling from top-k most likely tokens.
        // maxOutputTokens: Maximum number of tokens to generate in the response.
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024,
      }
    };

    // The API key is left as an empty string. In the Canvas environment,
    // the platform automatically provides the API key for gemini-2.0-flash.
    // If running outside Canvas, you would need to provide a valid API key here
    // (ideally, by proxying through a backend to keep it secure).
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      // Make the API call using fetch.
      const response = await fetch(apiUrl, {
        method: 'POST', // HTTP method is POST for generating content.
        headers: { 'Content-Type': 'application/json' }, // Specify content type as JSON.
        body: JSON.stringify(payload) // Convert the payload object to a JSON string.
      });

      // Parse the JSON response from the API.
      const result = await response.json();

      // Check if the response structure is valid and contains generated content.
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        // Extract the AI's response text.
        const aiResponse = result.candidates[0].content.parts[0].text;
        // Update messages state by adding the AI's response.
        setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: aiResponse }]);
      } else {
        // Log an error if the API response structure is unexpected or content is missing.
        console.error("Unexpected API response structure or no content:", result);
        // Add a user-friendly error message to the chat.
        setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: "Sorry, I couldn't get a response from the AI. (No content)" }]);
      }
    } catch (error) {
      // Catch and log any network or other errors during the API call.
      console.error("Error calling Gemini API:", error);
      // Add a user-friendly error message to the chat.
      setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: "Sorry, something went wrong. Please try again later." }]);
    } finally {
      // Always set loading to false after the API call completes, whether success or failure.
      setIsLoading(false);
    }
  };

  // Handler for sending a message when the Send button is clicked or Enter is pressed.
  const handleSendMessage = async () => {
    if (input.trim() === '') return; // Prevent sending empty messages.

    const userMessage = input.trim();
    // Add the user's message to the chat display immediately.
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userMessage }]);
    setInput(''); // Clear the input field.

    // Call the Gemini API with the user's message.
    await callGeminiApi(userMessage);
  };

  // Handler for keyboard presses, specifically to send message on Enter key.
  const handleKeyPress = (e) => {
    // Check if the pressed key is 'Enter' and if the bot is not currently loading a response.
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden my-8 font-sans">
      {/* Chat Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white text-center rounded-t-lg">
        <h2 className="text-2xl font-bold">AI Travel Assistant</h2>
        <p className="text-sm opacity-90">Ask me anything about your travel plans!</p>
      </div>

      {/* Chat Messages Display Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {/* Display a placeholder message if no messages yet */}
        {messages.length === 0 && (
          <div className="text-center text-gray-500 italic mt-10">
            Type a message to start chatting!
          </div>
        )}
        {/* Map through messages and display them */}
        {messages.map((msg, index) => (
          <div
            key={index} // Unique key for each message for React list rendering.
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`} // Align messages based on sender.
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg shadow-md ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none' // Style for user messages.
                  : 'bg-gray-200 text-gray-800 rounded-bl-none' // Style for AI messages.
              }`}
            >
              {msg.text} {/* Display the message text */}
            </div>
          </div>
        ))}
        {/* Loading indicator when AI is thinking */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[70%] p-3 rounded-lg shadow-md bg-gray-200 text-gray-800 rounded-bl-none">
              <div className="flex items-center">
                {/* Bouncing dots animation */}
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce ml-1" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce ml-1" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Empty div used as a scroll target */}
      </div>

      {/* Chat Input and Send Button Area */}
      <div className="p-4 bg-gray-100 border-t border-gray-200 flex items-center rounded-b-lg">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state on change.
          onKeyPress={handleKeyPress} // Handle Enter key press.
          disabled={isLoading} // Disable input while loading.
        />
        <button
          className={`ml-3 p-3 rounded-lg text-white font-semibold transition duration-300 ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
          onClick={handleSendMessage} // Call sendMessage on button click.
          disabled={isLoading} // Disable button while loading.
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
