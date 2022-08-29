import { createStore } from 'redux';

import contacts from "../components/data/data";

const userNewDate = JSON.parse(localStorage.getItem('data'));

const data = userNewDate === null ? contacts : userNewDate;

const messageReducer = (state = data, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            state.find(item => item.id === action.id).messages.push(action.payload)
            localStorage.setItem('data', JSON.stringify(state));
            return [...state]
        default:
            return state
    }
};


export const store = createStore(messageReducer);