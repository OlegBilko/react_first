import React from 'react';
import './CharacterStyles.css';

const Character = (props) => {

    let {id, name, status, species, gender, image} = props;

    return (

        <div className={'each'}>

            <div className="info">
                <p>{id}.</p>
                <h2>{name}</h2>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
            </div>

            <div>
                <img src={image} alt="image_charecter"/>
            </div>

        </div>
    );
};

export default Character;