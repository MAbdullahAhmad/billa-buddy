import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile, faTimes } from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";

import StaticLayout from "../../../layouts/StaticLayout/StaticLayout";

import "./Chat.css"; // Make sure to import the Chat.css file
import ChatMessage from "./components/ChatMessage";
import Card from "./components/Card";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [textMessage, setTextMessage] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const bottomOfChat = useRef();
  const chatInputRef = useRef();

  useEffect(() => {
    // Scroll to bottom of chat on new message
    bottomOfChat.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (textMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        type: "text", // 'text' or 'card'
        content: textMessage,
        sender: "user",
      };

      setMessages([...messages, newMessage]);
      setTextMessage("");
    }
  };

  // const handleEmojiSelect = (event, emojiObject) => {
  //   setTextMessage((prevMessage) => prevMessage + emojiObject.emoji);
  //   chatInputRef.current.focus(); // Bring focus back to input after selecting emoji
  // };

  const handleEmojiSelect = (emojiObject, event) => {
    console.log(emojiObject); // Log the emojiObject to see its structure
    if (emojiObject) {
      setTextMessage(prevMessage => prevMessage + emojiObject.emoji);
      chatInputRef.current.focus(); // Bring focus back to input after selecting emoji
    }
  };

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const isDarkMode = true;

  return (
    <StaticLayout>
      <div className={`chat-container`}>
        <div className="chat-header">
          <h2>Chat with Billa-Buddy!</h2>
        </div>

        {isOpen && (
          <>
            <div className="chat-messages-container">
              {messages.map((message) =>
                message.type === "text" ? (
                  <ChatMessage key={message.id} text={message.content} />
                ) : (
                  <Card key={message.id} {...message} />
                )
              )}
              <div ref={bottomOfChat} />
            </div>

            <div className="chat-input-container">
              {emojiPickerVisible && (
                <div className="emoji-picker-container">
                  <EmojiPicker onEmojiClick={handleEmojiSelect} />
                </div>
              )}

              <button onClick={toggleEmojiPicker} className="emoji-button">
                <FontAwesomeIcon icon={faSmile} />
              </button>

              <input
                ref={chatInputRef}
                type="text"
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="chat-input"
                placeholder="Type your message..."
              />

              <button onClick={handleSendMessage} className="send-button">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </>
        )}
      </div>
    </StaticLayout>
    
  );
};

export default Chat;
