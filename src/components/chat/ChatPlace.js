import React, { useEffect, useRef } from 'react';

import classes from './ChatPlace.module.scss';

const ChatPlace = props => {
  const scrollRef = useRef();
  const scrollBox = useRef();

  const date = dateMessage => new Date(dateMessage).toLocaleString("en-US", { dateStyle: 'short', timeStyle: 'short' });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    scrollBox.current?.scrollTo(0, scrollBox.current?.scrollHeight);
  }) 

  return (
    <div className={classes.place} ref={scrollBox}>
      {props.userData.messages && props.userData.messages.map(message => (
        <div className={message.myMessage ? classes.messageWrapp : classes['not-mine-message']} key={message.id} ref={scrollRef}>
          {!message.myMessage && <img src={props.userData.image} alt={props.userData.name} />}
          <p id={message.id}>
            {message.messageText}
          </p>
          <span>{date(message.date)}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatPlace;