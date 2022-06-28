import React, {useEffect, useState} from 'react';
import User from "../user/User";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, [])

    return (
        <div>

            <h2>Users component page</h2>
            {users.map(user => <User user_item={user}/>)}

        </div>
    );
};

export default Users;