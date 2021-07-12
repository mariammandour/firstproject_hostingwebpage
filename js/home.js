$(window).on('load', function() { 
    
  $('.loading-overlay .sk-cube-grid').fadeOut(2000,function(){
      $('.loading-overlay').fadeOut(2000,function(){
        $(this).remove();
        new WOW().init(); 
        var typed = new Typed('.ourfit', {
          strings: ["Web Hosting , VPS ,Domain and more!"],
          typeSpeed:40
        }); 
      });     
  });
  $('body').css('overflow-y','auto');
 

});
$(document).ready(function(){
 
  
  
  $(function(){
    "use strick";
    $(".ourfit_h1").fitText(0.8);
  })
  $(function(){
    "use strick";
    $(".ourfit_h5").fitText(3);
  })
    // nav js
    $('#cnav').onePageNav({
      currentClass: 'active',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      
    });
    var x =  Math.round((window.innerWidth/16)*9);
    document.getElementById("home").style.height = x +"px";
    
    window.onresize = function(event) {
      var x =  Math.round((window.innerWidth/16)*9);
    document.getElementById("home").style.height = x +"px";
    };
    $('#list  div').click(function(){
      $('#list  div').removeClass('select');
      $(this).addClass('select');     
    }
    )  
    $('video').on('play', function () {
      $('#video img').css('display','none')
    })
    // $('video').on('pause', function () {
    //   $('#video img').css('display','block')
    // })

    $('#video img').click( function(){
      if($('video').get(0).paused==true){
        $('video').get(0).play();
      }
      else{$('video').get(0).pause();
      }
    });
    }); 
    