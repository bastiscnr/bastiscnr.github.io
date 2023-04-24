    $(document).ready(function(){
        $("#showTemperature").click(function(){
            $("#startMenu").fadeOut();
            $("#temperature").fadeIn();
        });
                $("#calculateTemperature").click(function(){
                    var temperatureCelsius = parseFloat($("#temperatureCelsius").val())
                    var temperatureFahrenheit = temperatureCelsius* 1.8 + 32;
                    alert(temperatureFahrenheit)
                });

        $("#showClothing").click(function(){
            $("#startMenu").fadeOut();
            $("#clothing").fadeIn();
        });
                $("#calculateTemperature").click(function(){
                    var temperatureCelsius = parseFloat($("#temperatureCelsius").val())
                    var temperatureFahrenheit = temperatureCelsius* 1.8 + 32;
                    alert(temperatureFahrenheit)
                });

        $("#showSpeed").click(function(){
            $("#startMenu").fadeOut();
            $("#speed").fadeIn();
        });
                $("#calculateSpeed").click(function(){
                    var speedKMH = parseFloat($("#speedKMH").val())
                    var speedMPH = speedKMH * 1.60934;
                    alert(speedMPH)
                });



        $("#backToMenu").click(function(){
            $("#speed").fadeOut();
            $("#clothing").fadeOut();
            $("#temperature").fadeOut();
            $("#startMenu").fadeIn();
        });
    });
