import React from 'react';
import testCube from '../../assets/sprites/test-cube.png';
import { connect } from 'react-redux';
import handleMovement from './movement';

function Player(props) {
return(
    <div 
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${testCube}')`,
            backgroundPosition: '0,0',
            width: '64px',
            height: '64px',
        }}
    />
    )
}

function mapStateToProps(state){
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));