import React from 'react';

import classes from './ChatPlace.module.scss';

const ChatPlace = props => {
  const date = dateMessage => new Date(dateMessage).toLocaleString("en-US", { dateStyle: 'short', timeStyle: 'short' });

  return (
    <div className={classes.place}>
      {props.userData.messages && props.userData.messages.map(message => (
        <div className={message.myMessage ? classes.messageWrapp : classes['not-mine-message']} key={message.id}>
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