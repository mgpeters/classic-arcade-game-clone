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
