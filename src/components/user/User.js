import React from "react";

import './User.css'

export default function User({user_item}) {

return (
<div>

    <div className={'us'}>
        {user_item.id} . {user_item.name} - {user_item.email}.
    </div>

</div>
);
}