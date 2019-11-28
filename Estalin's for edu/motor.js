document.addEventListener('DOMContentLoaded',function(){
    motor.iniciarMotor();
},false);
var motor = {

    iniciarMotor:function(){

        console.log("Juego Iniciado");


        dimensionesVentana.iniciar();
        
        
        var lienzo = document.getElementById("lienzo");
        var lienzoSinModificar = document.getElementById("lienzo").innerHTML;
       

        var miniJuego = new MiniJuego(lienzo);

        var limpiar = 0;

        /* Bucle Principal */
        function frameUpdate() {
            //document.getElementById("lienzo").innerHTML = lienzoSinModificar;
            dimensionesVentana.iniciar();
            
            miniJuego.update();
            miniJuego.draw();
            
            
            window.requestAnimationFrame(frameUpdate);
        }
        frameUpdate();
    },
  

};
