import { forwardRef } from "react";

const isSameUserMessage = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

const Card = forwardRef((props, ref) => {
  const { messages, message, index } = props;

  return (
    <div
      ref={ref}
      className="model"
      style={{
        marginTop: `${
          isSameUserMessage(messages, message, index) ? "5px" : "12px"
        }`,
      }}
    >
      <div>
        <img className="model-img" src={message.imageUrl} alt="black-shoe" />
        <p className="model-heading">{message.heading}</p>
        <p className="model-subHeading">{message.subHeading}</p>
      </div>
      <div className="divider"></div>
      <div className="action-btn-container">
        <a href={message.actionLink} className="action-btn">
          Buy
        </a>
      </div>
    </div>
  );
});

export default Card;
