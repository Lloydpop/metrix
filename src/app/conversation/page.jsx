import React from "react";
import ConversationCard from "./ConversationCard";
import "./style.css";
import ChatRoom from "./ChatRoom";
import { Button } from "@/components/Button/Button";
const page = () => {
  return (
    <div>
      <div className="message-flex">
        <h1 className="head">Conversations with customers</h1>
        <Button>New Message</Button>
      </div>
      <div className="conversation">
        <ConversationCard />
        <ChatRoom />
      </div>
    </div>
  );
};

export default page;
