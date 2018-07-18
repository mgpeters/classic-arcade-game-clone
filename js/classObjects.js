class Adam {
    constructor(){
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x * 100, this.y * 82);
    }
}

class Player extends Adam{
    constructor(){
        super();
        this.sprite += 'char-boy.png';
    }
}

class Enemy extends Adam{
    constructor(){
        super();
        this.sprite += 'enemy-bug.png';
    }
}