import React from 'react';
import { ReactComponent as UserActive } from '../../image/check-mark.svg';

import classes from './ChatHeader.module.scss';

const ChatHeader = props => {
  
  return (
    <div className={classes['chat-header']}>
      {props.userData.active && <UserActive />}
      <img src={props.userData.image} alt={props.userData.name} />
      <h4>{props.userData.name}</h4>
    </div>
  );
};

export default ChatHeader;