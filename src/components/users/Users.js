import React, {useEffect, useState} from 'react';

import User from "../user/User";

import './Users.css'



const Users = () => {


    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, [])

    const myUser = (item) => {
        setUser(item);
    };

    return (
        <div>

            <h2>Users component page</h2>
            {users.map((user, index) =>
                <User
                    key={index}
                    user_item={user}
                    myUser={myUser}
                />)}

            {
                user.id && <div className={'details'}>
                    {user.id}.
                    {user.name}.<br/>
                    Email:{user.email}..<br/>
                    Website:{user.website}
                </div>
            }

        </div>
    );
};

export default Users;