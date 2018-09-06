export default function handleMovement(player) {


    function handleKeydown(e) {
        e.preventDefault();
        switch(e.keyCode) {
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeydown(e);
    });


    return player;
}