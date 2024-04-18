import { forwardRef } from "react";

const isSameUserMessage = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

const ChatMessages = forwardRef((props, ref) => {
  const { message, messages, index } = props;

  const textMessageInlineStyle = {
    marginLeft: `${message.sender._id !== "1" ? "0px" : "auto"}`,
    marginTop: `${
      isSameUserMessage(messages, message, index) ? "3px" : "12px"
    }`,
    color: `${message.sender._id === "1" ? "#0D0D0D" : "#D9D9D9"}`,
    backgroundColor: `${message.sender._id === "1" ? "#D9D9D9" : "#0D0D0D"}`,
  };

  return (
    <div className="message-container">
      <span ref={ref} className="message" style={textMessageInlineStyle}>
        {message.content}
      </span>
    </div>
  );
});

export default ChatMessages;
