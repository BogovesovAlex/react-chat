import React from "react";
import ChatInput from './ChatInput';
import ChatPlace from './ChatPlace';
import ChatHeader from './ChatHeader';
import { useSelector } from "react-redux";

import classes from './ChatBox.module.css'


const ChatBox = props => {
    const users = useSelector(state => state)

    const selectedUserData = users.find(item => item.id === props.id);

    return (
        <div className={classes.box}>
            <ChatHeader userData={selectedUserData} />
            <ChatPlace userData={selectedUserData} />
            <ChatInput id={props.id} userData={selectedUserData} />
        </div>
    );
};

export default ChatBox;
