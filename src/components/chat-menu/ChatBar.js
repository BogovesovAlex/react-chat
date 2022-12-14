import React, { useState } from 'react';
import BarHeader from './BarHeader';
import BarContacts from './BarContacts';
import { useSelector } from 'react-redux';

import classes from './ChatBar.module.css';

const ChatBar = props => {
    const users = useSelector(state => state.users);
    console.log('user', users)

    const [filteredName, setFilteredName] = useState('');

    const sortedUsers = users
        .sort((a, b) => b.messages[b.messages.length - 1].date - a.messages[a.messages.length - 1].date);

    const filteredUserName = value => setFilteredName(value.toLowerCase());

    const filteredUser = sortedUsers.filter(value => value.name.toLowerCase().includes(filteredName))

    return (
        <div className={classes.bar}>
            <BarHeader onFilteredUser={filteredUserName} />
            <BarContacts data={filteredUser} onShowUser={props.onShowUser} />
        </div>
    );
};

export default ChatBar;
