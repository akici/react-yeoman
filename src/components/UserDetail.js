/**
 * Created by ayberk on 03/01/2017.
 */
'use strict';

import React from 'react';

const UserDetail = ({user, onUserEdit}) => {
    if(!user) {
        return (
            <div className="user-detail">
                <p>Loading...</p>
            </div>
        );
    }
    return (
        <div className="user-detail">
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <p>Age: {user.age}</p>
            <button onClick={() => onUserEdit(true)}>Edit</button>
        </div>
    );
};

export default UserDetail;