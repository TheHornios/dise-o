class Stalin{
    constructor(position,lienzo,img,id,velocidad){
        this.position = position;
        this.lienzo = lienzo;
        this.imgEtiqueta = document.createElement('img');
        this.imgEtiqueta.src = img;
        this.id = id;
        this.imgEtiqueta.id = id;
        this.velocidad = velocidad;
        document.getElementById("lienzo").appendChild(this.imgEtiqueta);
    }
    update(){
        this.position.setX(this.position.getX()+this.velocidad);
        if(dimensionesVentana.ancho<=this.position.getX()){
            this.position.setX(0);
        }
    }
    draw(){
        this.repintear();
    }
    repintear(){
        document.getElementById(this.id).style.position = "absolute";
        document.getElementById(this.id).style.top = this.position.getY()+"px";
        document.getElementById(this.id).style.left = this.position.getX()+"px";
    }
}