function Adam(){
    this.constructor = function adamConstructor(){
            this.sprite = 'images/';
            this.x = 2;
            this.y = 5;
    }
    this.render = function adamRender(){
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }
    this.update = function update(dt){
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;
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
function Player(){
    Adam.call(this);
    this.sprite += 'char-boy.png';
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
        Adam.call(this, dt)
        if(this.isOutOfBoundsY && !this.moving && !this.win){
            this.win = true;
            this.x = 2;
            this.y = 5;
        }
        this.win = false;
    }
    this.render = function playerRender(){
        Adam.call(this);
        this.moving = false;
    }
}
function Enemy(){
    this.constructor = function enemyConstructor(x, y){
        Adam.call(this,x ,y);
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }
    this.update = function enemyUpdate(dt){
        Adam.call(this, dt);
        if(this.isOutOfBoundsX){
            this.x = -1;
        }else{
            this.x += dt + Math.random() / 7; 
        }
    }
}


const   player = new Player(),
        allEnemies = [new Enemy(3, 1), new Enemy(2, 2), new Enemy(5, 3)];


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
