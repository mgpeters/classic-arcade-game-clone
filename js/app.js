// Enemies our player must avoid
function Enemy(x, y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Starting positions
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y < 1;

    if(this.isOutOfBoundsX){
        this.x = -1; //Resets enemy position when off screen
    }else{
        this.x += dt + Math.random() / 7; //Changes speed of enemies
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 82);
}
//fx for collision check
Enemy.prototype.checkCollisions = function(pngSprite){
    if (this.y === pngSprite.y){
        if (this.x >= pngSprite.x - 0.7 && this.x <= pngSprite.x + 0.7){
            return true;
        }
    }
    else{
        return false;
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player(){
    this.sprite = 'images/char-boy.png';
    this.x = 2;
    this.y = 5;

    this.moving = false; //Win condition help from: https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 8.9.18
    this.win = false;

    this.checkCollisions = function(pngSprite){
        if (this.y === pngSprite.y){
            if (this.x >= pngSprite.x - 0.7 && this.x <= pngSprite.x + 0.7){
                return true;
            }
        }
        else{
            return false;
        }
    };
    this.update = function(dt){
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;

        if(this.isOutOfBoundsY && !this.moving && !this.win){//Win condition help from: https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 8.9.18
            this.win = true;
            alert("You Won!!");
            this.x = 2;
            this.y = 5;
        }
        this.win = false;
    };
}
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 82);
    this.moving = false; //Win condition help from: https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 8.9.18
};

Player.prototype.handleInput = function(input){
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
    this.moving = true; //Win condition help from: https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 8.9.18
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const   allEnemies = [new Enemy(3, 1), new Enemy(2, 2), new Enemy(5, 3)],
        player = new Player();

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
