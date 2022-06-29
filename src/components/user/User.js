import React from "react";

import './User.css'

export default function User({user_item,myUser}) {

    return (


            <div className={'us'}>
                {user_item.id} . {user_item.name}.

                <button onClick={() =>{
                    myUser(user_item);
                }}>User details </button>

                    </div>


                    );
                }