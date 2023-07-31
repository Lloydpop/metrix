"use client";
import React from "react";
import Phone from "../../../public/static/rec3.png";
import woman from "../../../public/static/smile.png";
import Image from "next/image";
import { Bag } from "react-iconly";
import {
  CheckCircleIcon,
  FaceSmileIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import MessageTooltip from "@/components/MessageTooltip/MessageTooltip";
import { Input } from "@/components/Form/Input/Input";
const ChatRoom = () => {
  return (
    <div className="chat-room">
      <div className="spacing">
        <div className="stat chat-header">
          <div className="stat center">
            <Image src={woman} width={"60"} />
            <div>
              <p>Jane Doe</p>
              <div className="center">
                <span className="header-span"></span>
                <p className="online">online</p>
                <p className="timer">12:35am</p>
              </div>
            </div>
          </div>
          <div>
            <div className="center pro">
              <span>New Customer</span>
              <p>View Profile</p>
            </div>
            <div className="center right">
              <Bag />
              <p>0 orders</p>
            </div>
          </div>
        </div>
        <p className="today">12 August 22</p>
        <div className="content">
          <div>
            <div className="center">
              <Image src={Phone} width={"49"} />
              <div>
                <p className="light">Iphone 13</p>
                <p className="bold">₦730,000.00 X 1</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <MessageTooltip time={"12:45pm"} className={"start"}>
          Hello, I want to make enquiries about your product
        </MessageTooltip>
        <div className="right">
          <MessageTooltip
            bg={"#FFEAD1"}
            color={"#000"}
            time={
              <>
                <span className="end">
                  <span>1:00pm</span>
                  <CheckCircleIcon width={"20px"} />
                </span>
              </>
            }
          >
            Hello Janet, thank you for reaching out
          </MessageTooltip>
          <MessageTooltip
            bg={"#FFEAD1"}
            color={"#000"}
            time={
              <>
                <span className="end">
                  <span>1:11pm</span>

                  <CheckCircleIcon width={"20px"} />
                </span>
              </>
            }
          >
            What do you need to know?
          </MessageTooltip>
          <p className="today">Today</p>
        </div>
        <MessageTooltip time={"2:45pm"} className={"start"}>
          I want to know if the price is negotiable, i need <br />
          about 2 Units 12:55 am
        </MessageTooltip>
      </div>
      <section>
        <div className="send">
          <div className="send-items">
            <div className="send-child">
              <div className="send-icon">
                <PlusIcon width={"20px"} />
              </div>
              <span>Your message...</span>
            </div>
            <div className="send-child">
              <FaceSmileIcon width={"20px"} className="smile" />
              <div className="stat send-btn">
                Send
                <PaperAirplaneIcon width={"20px"} className="tilt" />
              </div>
            </div>
          </div>
          <Input />
        </div>
      </section>
    </div>
  );
};

export default ChatRoom;
