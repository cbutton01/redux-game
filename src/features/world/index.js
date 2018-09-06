import React from 'react';
import Player from '../player';
import Map from '../map';

function World() {
    return (
        <div 
            style={{
                position: 'relative',
                width: '800px',
                height: '600px',
                margin: '10px auto',
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

export default World;