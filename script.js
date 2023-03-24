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

            var beginnzeit = parseFloat($("#beginnzeit").val());
            var endzeit = parseFloat($("#endzeit").val());
            var stunden = endzeit-beginnzeit;

            alert("Hallo")
            //$("#berechnen").html("Stunden: " + stunden);
            //$("#stunden").fadeIn();
        });

    });