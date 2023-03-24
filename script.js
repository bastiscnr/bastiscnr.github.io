$(document).ready(function(){
        
    $("#berechnen").click(function(){

            var beginnzeit = parseFloat($("#beginnzeit").val());
            var endzeit = parseFloat($("#endzeit").val());
            var stunden = endzeit-beginnzeit;
            
            $("#berechnen").html("Stunden: " + stunden);
            $("#stunden").fadeIn();
        });

        /*
        $("#slider").slider({
            min:0,
            max:300,
            value:100, //startwert
            animate:"slow",
            orientation:"horizontal",
            slide:function(event,ui){
                $("#groesse").val(ui.value);
            }
        });
        */
    });