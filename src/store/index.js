import { createStore } from 'redux';

import contacts from "../data/data";

const userNewDate = JSON.parse(localStorage.getItem('data'));

const data = userNewDate === null ? contacts : userNewDate;

const initialState = {
    users: data
};

const messageReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            messages: [...user.messages, action.payload]
                        }
                    }
                    return user;
                })
            }
        default:
            return state
    }
};


export const store = createStore(messageReducer);