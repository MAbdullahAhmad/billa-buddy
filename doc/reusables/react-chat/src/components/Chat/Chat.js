import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPaperPlane,
  faFaceSmile,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";

import "./Chat.css";
import ChatMessages from "./components/ChatMessages";
import Card from "./components/Card";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textMessage, setTextMessage] = useState("");
  const [emojiIsOpen, setEmojiIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: {
        _id: "1",
        name: "Ahtasham",
      },
      type: "text",
      content: "Hello There",
    },
    {
      sender: {
        _id: "2",
        name: "John Doe",
      },
      type: "text",
      content: "Yo Wassup!",
    },
    {
      sender: {
        _id: "2",
        name: "John Doe",
      },
      type: "text",
      content: "How's it going!",
    },
    {
      sender: {
        _id: "1",
        name: "Ahtasham",
      },
      type: "text",
      content: "All good!",
    },
    {
      sender: {
        _id: "1",
        name: "Ahtasham",
      },
      type: "text",
      content: "What About You?",
    },
    {
      sender: {
        _id: "2",
        name: "John Doe",
      },
      type: "text",
      content: "Same, Thank You!",
    },
    {
      sender: {
        _id: "2",
        name: "John Doe",
      },
      type: "text",
      content: "What Techonologies are you learning these days?",
    },
    {
      sender: {
        _id: "1",
        name: "Ahtasham",
      },
      type: "text",
      content: "Just the MERN Stack",
    },

    {
      sender: {
        _id: "2",
        name: "John Doe",
      },
      type: "card",
      imageUrl: "/images/shoe.jpg",
      heading: "Black Runners",
      subHeading: "$250",
      actionLink: "https://unsplash.com/photos/LxVxPA1LOVM",
    },
  ]);

  const scrollRef = useRef();
  const wrapperRef = useRef(null);

  /* 
  //* Handlers
  */

  const onSend = (message) => {
    console.log("onSend called");
  };

  // Set Messages:
  const setMessageToChat = (messages) => {
    if (messages.length > 0) {
      setMessages((prevMessages) => [...prevMessages, messages]);
    }
  };

  // Get Messages:
  const getMessagesFromChat = () => {
    return messages;
  };

  // Function to handle sending message
  const handleSendMessage = () => {
    if (textMessage) {
      const message = {
        sender: {
          _id: "1",
          name: "ahtasaham",
        },
        type: "text",
        content: textMessage,
      };

      // Add message to the messages array
      setMessages((prevMessages) => [...prevMessages, message]);
      onSend(message);

      // Reset the input field
      setTextMessage("");
    }
  };

  // Function to create messages from backend:
  const createMessage = (message) => {
    if (message.type === "text") {
      setMessages((prevMessages) => [...prevMessages, message]);
    } else {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  // Function to handle emoji selection
  function handleEmojiClick(emojiData, event) {
    setTextMessage((prevTextMessage) => prevTextMessage + emojiData.emoji);
  }

  // Function to toggle the emoji selector
  const handleEmojiToggle = () => {
    setEmojiIsOpen((prevState) => !prevState);
  };

  // Function to toggle the chat
  const handleChatToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Function to close the chat
  const handleCloseChat = () => {
    setMessages([]);
    setIsOpen(false);
  };

  // Function to minimize the chat
  const handleMinimizeChat = () => {
    setIsOpen(false);
  };

  // To provide MarginTop to Card message:
  const isSameUserMessage = (messages, m, i) => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };

  // Managing outside Click of emoji Selector:
  function useOutsideClick(ref) {
    useEffect(() => {
      //close emoji selector if clicked on outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEmojiIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideClick(wrapperRef);

  // Scroll into View of Latest Message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, messages]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the Enter key from adding a newline
      handleSendMessage(); // Call your send message function
    }
  };

  return (
    <>
      {/* 
      ============

       Phone icon:

      ============
      */}
      <div
        className={`phone-icon ${isOpen ? "cross" : ""}`}
        onClick={handleChatToggle}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faComment} />
        )}
      </div>

      {/* 
      ===========

       Container:

      ===========
      */}
      {isOpen && (
        <div
          className={`chat-container ${isOpen ? "open" : ""} except-phone-icon`}
        >
          {/* 
          ==========

           Top Bar:

          ==========
          */}
          <div className="top-bar">
            <div className="user-name">John</div>
            <div className="action-buttons">
              <button onClick={handleMinimizeChat} className="minimize-button">
                -
              </button>
              <button onClick={handleCloseChat} className="close-button">
                x
              </button>
            </div>
          </div>
          {/* 
          ===============

           Chat Messages:

          ===============
          */}

          <div className="chat-messages">
            {messages.map((message, index) => {
              if (message.type === "text") {
                return (
                  <ChatMessages
                    key={index}
                    messages={messages}
                    message={message}
                    index={index}
                    ref={scrollRef}
                  />
                );
              } else if (message.type === "card") {
                return (
                  <Card
                    key={index}
                    messages={messages}
                    message={message}
                    index={index}
                    ref={scrollRef}
                  />
                );
              }
            })}
          </div>

          {/*
          =============

          Emoji Picker:

          =============
          */}
          <div className="bottom-bar">
            {emojiIsOpen && (
              <div className="emoji-picker-comp" ref={wrapperRef}>
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  disableAutoFocus={true}
                />
              </div>
            )}
            <button className="emoji-button" onClick={handleEmojiToggle}>
              <FontAwesomeIcon icon={faFaceSmile} size="xl" />
            </button>

            {/*
            ===========

            Chat Input:

            ===========
            */}
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyUp={(e) => handleKeyUp(e)}
              />
            </div>

            {/*
            ============

            Send Button:

            ============
            */}
            <div>
              <button className="msg-send-btn" onClick={handleSendMessage}>
                <FontAwesomeIcon
                  className="msg-send-icon"
                  icon={faPaperPlane}
                  size="md"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
