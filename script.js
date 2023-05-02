    $(document).ready(function(){
        $("#showTemperature").click(function(){
            $("#startMenu").fadeOut();
            $("#temperature").fadeIn();
        });
                $("#calculateTemperature").click(function(){
                    //Slider
                    var slider = $("myRange");
                    var output = $("sliderTemperature")

                    slider.oninput = function(){
                        output.innerHTML = this.value;
                    }
                     
                    var temperatureFahrenheit = temperatureCelsius* 1.8 + 32;

                    // Update the current slider value (each time you drag the slider handle)

                    if(temperatureFahrenheit > 0){
                        $("#lblErgebnis").val = "Temperatur in Fahrenheit: ", temperatureFahrenheit;
                    }
                    else{
                        alert("Bitte geben Sie einen gültigen Wert ein")
                    }
                    
                });

        $("#showClothing").click(function(){
            $("#startMenu").fadeOut();
            $("#clothing").fadeIn();
        });
                $("#calculateSize").click(function(){
                    
                });

        $("#showSpeed").click(function(){
            $("#startMenu").fadeOut();
            $("#speed").fadeIn();
        });
                $("#calculateSpeed").click(function(){
                    var speedKMH = parseFloat($("#speedKMH").val())
                    var speedMPH = Math.round(speedKMH / 1.60934);
                    $('#result').text(speedMPH);
                });
        
        $("#showShoeSize").click(function(){
            $("#startMenu").fadeOut();
            $("#shoeSize").fadeIn();
        });
                $("#calculateShoeSize").click(function(){
                    
                });


        $("#backToMenu").click(function(){
            $("#speed").fadeOut();
            $("#clothing").fadeOut();
            $("#temperature").fadeOut();
            $("#shoeSize").fadeOut();
            $("#startMenu").fadeIn();
        });
    });
