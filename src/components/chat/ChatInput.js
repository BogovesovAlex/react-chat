import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as PaperPlane } from '../../image/paper-plane.svg';
import axios from 'axios';

import classes from './ChatInput.module.scss';

const ChatInput = props => {
    const dispatch = useDispatch();

    const messageInputRef = useRef();

    async function getRandomMessage() {
        return axios.get('https://api.chucknorris.io/jokes/random')
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        const enteredMessage = messageInputRef.current.value;

        if (enteredMessage.trim() === '') return

        const addMessage = (message, mymessage) => {
            const messages = {
                id: Math.random().toString(),
                myMessage: mymessage,
                messageText: message,
                date: Date.now()
            }
            dispatch({ type: 'ADD_MESSAGE', payload: messages, id: props.id })
        }

        addMessage(enteredMessage, true);

        messageInputRef.current.value = '';

        !(props.userData.active === false) && setTimeout(() => {
            getRandomMessage().then(data => addMessage(data.data.value, false))
        }, Math.random() * 1000 + 5000);
    };

    return (
        <div className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <input
                    id="usermessage"
                    type="text"
                    ref={messageInputRef}
                    autoComplete="off"
                    placeholder="Type your message"
                />
                <button type="submit">
                    <PaperPlane />
                </button>
            </form>
        </div>
    );
};

export default ChatInput;
