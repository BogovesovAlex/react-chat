import React from 'react';
import classes from './BarContacts.module.scss';
import { ReactComponent as UserActive } from '../../image/check-mark.svg';

const BarContacts = props => {
    const date = date => new Date(date).toLocaleString("en-US", {
        month: 'short',
        year: 'numeric',
        day: 'numeric'
    });

    const clickHandler = event => props.onShowUser(+event.currentTarget.id);

    return (
        <div className={classes.contacts}>
            {props.data.map(userData => (
                <div className={classes.user} key={userData.id} id={userData.id} onClick={clickHandler}>
                    <div className={classes.userMessageWrapp}>
                        <img src={userData.image} alt={userData.name} className={classes.personPhoto} />
                        {userData.active && <UserActive />}
                        <div>
                            <span className={classes.name}>{userData.name}</span>
                            <span className={classes.message}>{userData.messages[userData.messages.length - 1].messageText}</span>
                        </div>
                    </div>
                    <span className={classes.date}>{date(userData.messages[userData.messages.length - 1].date)}</span>
                </div>
            ))}
        </div>
    );
};

export default BarContacts;