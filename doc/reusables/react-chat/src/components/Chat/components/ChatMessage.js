import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.css'; // Make sure to create a corresponding CSS file for styling

const ChatMessage = ({ sender, content }) => {
  // Determine message alignment based on the sender
  const messageAlignment = sender === 'user' ? 'message-user' : 'message-other';

  return (
    <div className={`chat-message ${messageAlignment}`}>
      <div className="message-content">{content}</div>
    </div>
  );
};

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ChatMessage;
