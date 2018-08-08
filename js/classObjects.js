//ES6 Class breakdown help from: https://zoom.us/recording/play/aulotDlzKFegQFIJTaTzKgWvNkVsYtlwO454vL1UPE1Cm6lOUBQCtfVurPOIAGAS?startTime=1529542978000 
class Adam {
    constructor(){
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 82);
    }
    update(dt){
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;
    }
    checkCollisions(pngSprite){
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

class Player extends Adam{
    constructor(){
        super();
        this.sprite += 'char-boy.png';
        this.moving = false;
        this.win = false;
    }
    handleInput(input){
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
    update(dt){
        super.update();
        if(this.isOutOfBoundsY && !this.moving && !this.win){
            this.win = true;
            this.x = 2;
            this.y = 5;
        }
        this.win = false;
    }
    render(){
        super.render();
        this.moving = false;
    }
}
class Enemy extends Adam{
    constructor(x, y){
        super();
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }
    update(dt){
        super.update()
        if(this.isOutOfBoundsX){
            this.x = -1;
        }else{
            this.x += dt + Math.random() / 7; 
        }
    }
}

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
