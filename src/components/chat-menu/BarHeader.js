import React, { useEffect, useState } from 'react';
import { ReactComponent as UserIcon } from '../../image/user.svg';
import { ReactComponent as LoupIcon } from '../../image/loupe.svg';

import classes from './BarHeader.module.scss';

const BarHeader = props => {
    const [enteredName, setenteredName] = useState('');

    const nameChangeHandler = event => setenteredName(event.target.value);
    
    useEffect(() => {
        props.onFilteredUser(enteredName)
    }, [enteredName, props])

    return (
        <div className={classes.header}>
            <UserIcon className={classes.UserIcon} />
            <LoupIcon className={classes.LoupIcon} />
            <input
                name='filter'
                placeholder='Search or start new chat'
                value={enteredName}
                onChange={nameChangeHandler}
                autoComplete="off"
            />
        </div>
    );
};

export default BarHeader;