import React from 'react';

const eventPage = props => {
    return (
        <div>
            <p>ID: {props.match.params.id}</p>
        </div>
    );
};

export default eventPage;
