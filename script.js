    $(document).ready(function(){

        if ('serviceWorker' in navigator) {
            // We want to register the service worker file with the browser
            navigator.serviceWorker.register('sw.js', {
            // Just the file scope; since this is in the main directory, we'll leave it blank. This is kind of a finicky option, FYI.
            scope: ''
            }).then(function(reg) {
            // registration worked, hurray!
            console.log('Registration succeeded. Scope is ' + reg.scope);
            if (reg.installing) {
            console.log('Service worker installing');
            } else if (reg.waiting) {
            console.log('Service worker installed');
            } else if (reg.active) {
            console.log('Service worker active');
            }
            }).catch(function(error) {
            // registration failed. No worries, just make sure HTTPS is enabled and you're calling the SW correctly.
            console.log('Registration failed with ' + error);
            });
            }

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
