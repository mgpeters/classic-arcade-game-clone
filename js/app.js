// Enemies our player must avoid
var Enemy = function(x, y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Starting positions
    this.x = x;
    this.y = y;
    this.checkCollisions = function checkCollisions(pngSprite){
        if (this.y === pngSprite.y){
            if (this.x >= pngSprite.x - 0.7 && this.x <= pngSprite.x + 0.7){
                return true;
            }
        }
        else{
            return false;
        }
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.isOutOfBoundsX){
        this.x = -1;
    } else{
        this.x += dt + Math.random() / 7; 
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player(){
    this.sprite = '/images/char-boy.png';
    this.moving = false;
    this.win = false;
    this.handleInput = function playerHandleInput(input){
        switch(input){
            case 'left':
                if(this.x > 0){
                    this.x -= 1;
                }else{
                    this.x = this.x;
                }
                break;
            case 'up':
                if(this.y > 0){
                    this.y -= 1;
                }else{
                    this.y = this.y;
                }
                break;
            case 'right':
                if(this.x < 4){
                    this.x += 1;
                }else{
                    this.x = this.x;
                }
                break;
            case('down'):
                if(this.y < 5){
                    this.y += 1;
                }else{
                    this.y = this.y;
                }
                break;
            default:
                break;
        }
        this.moving = true;
    }
    this.update = function playerUpdate(dt){
        if(this.isOutOfBoundsY && !this.moving && !this.win){
            this.win = true;
            this.x = 2;
            this.y = 5;
        }
        this.win = false;
    }
    this.render = function playerRender(){
        this.moving = false;
    }
    this.checkCollisions = function checkCollisions(pngSprite){
        if (this.y === pngSprite.y){
            if (this.x >= pngSprite.x - 0.7 && this.x <= pngSprite.x + 0.7){
                return true;
            }
        }
        else{
            return false;
        }
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const   player = new Player(),
        allEnemies = [new Enemy(3, 1), new Enemy(2, 2), new Enemy(5, 3)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
