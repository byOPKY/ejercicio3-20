window.addEventListener("load", function() {
    var button = document.getElementById("calcular");
    button.addEventListener("click", function() {
        var ingresoSegundos = parseInt(document.getElementById("ingresoSegundos").value);
        var ingresaNumero = parseInt(document.getElementById("ingresaNumero").value);

        var resultado = document.getElementById("resultado");
        setInterval(function(){ 
            document.getElementById("resultado").innerHTML = ingresaNumero++; 
        },ingresoSegundos * 1000);
        document.getElementById("ingresoSegundos").value="";
        document.getElementById("ingresaNumero").value="";
        
    });
});

