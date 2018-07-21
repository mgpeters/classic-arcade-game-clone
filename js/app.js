
const   player = new Player(),
        allEnemies = [new Enemy(3, 1), new Enemy(2, 2), new Enemy(5, 3)];
function reset(){
    this.win = false;
    player.x = 2;
    player.y = 5;
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
