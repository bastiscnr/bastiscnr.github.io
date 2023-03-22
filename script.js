$(document).ready(function(){
        
        $("#slider").slider({
            min:0,
            max:300,
            value:100, //startwert
            animate:"slow",
            orientation:"horizontal",
            slide:function(event,ui){
                $("#groesse").val(ui.value);
            }
        })
        
        $("#berechnen").click(function(){

            var groesse = parseFloat($("#groesse").val())/100;
            var gewicht = parseFloat($("#gewicht").val());
            var bmi = gewicht/(groesse*groesse);

            $("#bmi").html("Ihr BMI: " + bmi);
            $("#bmi").fadeIn();
        });

    });