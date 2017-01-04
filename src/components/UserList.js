/**
 * Created by ayberk on 03/01/2017.
 */
'use strict';

import React from 'react';

const UserList = ({users, onUserSelect}) => {

    const UserListItems = users.map((user, index) => {
        if(!user) {
            return <option>Loading...</option>
        }
        return <option key={index} value={user.id}>{user.name}</option>
    });

    const getUserById = (id) => {
        for(let i=0; i < users.length; i++) {
            if(users[i].id === parseInt(id)) {
                return users[i];
            }
        }
    };

    return (
        <select onChange={(event) => onUserSelect(getUserById(event.target.value))}>
            {UserListItems}
        </select>
    );
};

export default UserList;