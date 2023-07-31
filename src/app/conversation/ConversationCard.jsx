"use client";
import { data } from "./data";
import Image from "next/image";
import "./style.css";
import { Input } from "@/components/Form/Input/Input";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const ConversationCard = () => {
  return (
    <div className="main-c">
      <div className="stat contact2">
        <p>Contacts</p>
        <span>34</span>
      </div>
      <div className="rel">
        <div className="send-child">
          <MagnifyingGlassIcon width={"20px"} />

          <span>Your message...</span>
        </div>
        <Input />
      </div>

      {data.map((datum) => (
        <div className="convo-card">
          <div className="img-container">
            <span></span>
            <Image src={datum?.pics} width={"50"} alt="pics" />
          </div>

          <div className="cont">
            <div className="stat">
              <p className="name">{datum?.name}</p>
              {datum?.ongoing && <p className="ongoing">{datum?.ongoing}</p>}
            </div>
            <div className="stat">
              <p className="message">
                Hi, i want make enquiries about your iphone 13 pro...
              </p>
              <p className="time-stat">12:55am</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationCard;
