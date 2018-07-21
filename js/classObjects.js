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