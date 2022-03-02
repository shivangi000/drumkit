var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    });
    function sound(key) {
        switch (key) {
            case "w":
            var sound1 = new Audio("w.wav");
            sound1.play();
            break;
        
            case "a":
            var sound2 = new Audio("a.wav");
            sound2.play();
            break;
        
            case "s":
            var sound3 = new Audio('s.wav');
            sound3.play();
            break;
        
            case "d":
            var sound4 = new Audio('d.wav');
            sound4.play();
            break;
        
            case "j":
            var sound5 = new Audio('j.wav');
            sound5.play();
            break;
        
            case "k":
            var sound6 = new Audio('k.wav');
            sound6.play();
            break;
        
            case "l":
            var sound7 = new Audio('l.wav');
            sound7.play();
            break;
        
            default: console.log(key);
        }
        }
        function animation(currentKey) {
            var activeButton = document.querySelector("." + currentKey);
            
            activeButton.classList.add("animation");
            
            setTimeout(function() {
                activeButton.classList.remove("animation");
            }, 100);
            }
                        