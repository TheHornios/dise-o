class MiniJuego{
    constructor(lienzo){
        this.lienzo = lienzo;
        this.stalin = new Stalin(new Vector2D(50,50),lienzo,'img/ast9_1.png','est1',0.2);
        this.stalin1 = new Stalin(new Vector2D(100,100),lienzo,'img/ast9_1.png','est2',1.9);
        this.stalin2 = new Stalin(new Vector2D(150,150),lienzo,'img/ast9_1.png','est3',10);
        this.stalin3 = new Stalin(new Vector2D(200,200),lienzo,'img/ast9_1.png','est4',5);
    }
    draw(){
        this.stalin.draw();
        this.stalin1.draw();
        this.stalin2.draw();
        this.stalin3.draw();
    }
    update(){
        this.stalin.update();
        this.stalin1.update();
        this.stalin2.update();
        this.stalin3.update();
    }
    
}