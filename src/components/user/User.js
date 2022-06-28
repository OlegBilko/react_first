import React from "react";

export default function User(props) {
    let {user_item} = props;
return (
<div>

    <div>
        {user_item.id} . {user_item.name} - {user_item.email}.
    </div>

</div>
);
}