import React from 'react';

import './SimpsonsStyle.css';


const Simpsons = (props) => {

    let {name, age, description, img} = props;

    return (

            <div className={'each'}>

                <img src={img} alt="photo"/>

                <div className="info">
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Description: {description}</p>
                </div>
                
            </div>

    );
};

export default Simpsons;