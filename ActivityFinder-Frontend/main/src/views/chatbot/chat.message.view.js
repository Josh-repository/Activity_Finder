import React from "react";
import "./css/chat.style.css";
import Message from "./messages.view.js";

const Messages = ({ messages }) => {
    console.log("Messages: " + messages);
    return (
        <div className="messagesSection">
            {messages.map(message => {
                return (
                    <div className="messagesContainer">
                        <Message message={message} />
                    </div>
                );
            })}
        </div>
    );
};

export default Messages;