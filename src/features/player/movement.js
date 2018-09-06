import store from '../../config/store';
import { PLAYER_SIZE, PLAYER_SPEED } from '../../config/constants';

export default function handleMovement(player) {


    function getNewPosition(direction) {
        const oldPos = store.getState().player.position;
        switch(direction) {
            case 'LEFT':
                return [ oldPos[0] - PLAYER_SPEED, oldPos[1] ]
            case 'RIGHT':
                return [ oldPos[0] + PLAYER_SPEED, oldPos[1] ]
            case 'UP':
                return [ oldPos[0], oldPos[1] - PLAYER_SPEED ]
            case 'DOWN':
                return [ oldPos[0], oldPos[1] + PLAYER_SPEED ]
        }
    }

    function dispatchMove(direction){

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })

    }

    function handleKeydown(e) {
        e.preventDefault();
        switch(e.keyCode) {
            case 37:
                return dispatchMove('LEFT')
            case 38:
                return dispatchMove('UP')
            case 39:
                return dispatchMove('RIGHT')
            case 40:
                return dispatchMove('DOWN')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeydown(e);
    });


    return player;
}