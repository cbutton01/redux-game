import React from 'react';
import testCube from '../../assets/sprites/test-cube.png';

function Player(props) {
return(
    <div 
        style={{
            position: 'relative',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${testCube}')`
        }}
    />
    )
}

export default Player;