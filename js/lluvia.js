
$(document).ready(function(){
  function createElement(time){

    var windowSizeWidth = jQuery(window).width();
    var windowSizeHeight = jQuery(".animation-background").height();
    console.log(windowSizeHeight);
        var position = Math.floor(Math.random() * (windowSizeWidth)) + 1;
        var element = Math.floor(Math.random() * 10) + 1;
        var newElement = document.createElement('img');
        newElement.src = "img/animacion/" + element + ".svg";
        newElement.classList.add('animation-element');
        document.getElementById("animation-background").appendChild(newElement);
        jQuery(newElement).css("position","absolute");
        jQuery(newElement).css("left",position + 'px');
        //jQuery(newElement).css("width",windowSizeWidth / 50 + 'px');
        try {
          newElement.animate([
            // keyframes
            { transform: 'translateY(-100px)', '-webkit-transform': 'translateY(-100px)' }, 
            { transform: 'translateY('+ (windowSizeHeight + 100 )+'px)','-webkit-transform': 'translateY('+ (windowSizeHeight + 100 )+'px)' }
          ], { 
            // timing options
            duration: time
          });
        } catch(e) {
          console.log(e)
        }
        try {
          if (element == 6 || element == 9 || element == 10){
            newElement.animate([
              // keyframes
              { transform: 'translateY(-100px) rotate(0deg)','-webkit-transform': 'translateY(-100px) rotate(0deg)' }, 
              { transform: 'translateY('+ (windowSizeHeight + 100 )+'px) rotate(1500deg)','-webkit-transform': 'translateY('+ (windowSizeHeight + 100 )+'px) rotate(1500deg)' }
            ], { 
              // timing options
              duration: time
            });
        }
        }catch(e) {
          console.log(e);
        }
        
        setTimeout(function(){
          document.getElementById("animation-background").removeChild(newElement);
        },time);
    }
    
    
    if(jQuery(window).width() > 675) {
      setInterval(function(){
          createElement(2000);
      }, 300);
    
      setInterval(function(){
        createElement(1500);
      }, 500);
    } else {
        setInterval(function(){
          createElement(4500);
      }, 300);
    
      setInterval(function(){
        createElement(3500);
      }, 500);
    } 
});
