import React from 'react';

const athletePage = props => {
    return (
        <div>
            <p>ID: {props.match.params.id}</p>
        </div>
    );
};

export default athletePage;
