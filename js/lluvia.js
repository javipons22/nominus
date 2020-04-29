
$(document).ready(function(){

  var windowSizeHeight = jQuery(".animation-background").height();
  // keyframes URL
  // https://www.jqueryscript.net/animation/Set-CSS-Keyframes-jQuery.html
  $.keyframe.define([{
    name: 'element-drop',
    '0%': {
      'transform': 'translateY(-100px)',
    },
    '100%' : {
      // 'transform': 'translateY(250px)'
      'transform': 'translateY('+ (windowSizeHeight + 200 )+'px)'
    }
  }, {
    name: 'element-drop-spin',
    '0%': {
      'transform':'translateY(-100px) rotate(0deg)'
    },
    '100%': {
      'transform': 'translateY('+ (windowSizeHeight + 200 )+'px) rotate(1500deg)'
    }
  }]);

  function createElement(time){


        var windowSizeWidth = jQuery(window).width();
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
          // $(newElement).playKeyframe({
          //   name: 'element-drop',
          //   duration: time
          // });
          $(newElement).playKeyframe('element-drop '+ time + 'ms linear 0s 3 normal forwards', 3);
        } catch(e) {
          console.log(e)
        }
        try {
          if (element == 6 || element == 9 || element == 10){
            $(newElement).playKeyframe('element-drop-spin '+ time + 'ms linear 0s 3 normal forwards', 3);
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
