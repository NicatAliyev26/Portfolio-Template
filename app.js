$(document).ready(function(){
  $("#bar").click(function(){
    $("#full-pr").animate({
        width:'360px'
    });
  });
});

// 2
$(document).ready(function(){
  $("#pyt").click(function(){
    $("#full-pr2").animate({
        width:'200px'
    });
  });
});

// 3
$(document).ready(function(){
  $("#js").click(function(){
    $("#full-pr3").animate({
        width:'150px'
    });
  });
});

// 4
$(document).ready(function(){
  $("#rb").click(function(){
    $("#full-pr4").animate({
        width:'100px'
    });
  });
});

// 5
$(document).ready(function(){
  $("#php").click(function(){
    $("#full-pr5").animate({
        width:'300px'
    });
  });
});

// 6
$(document).ready(function(){
  $("#jv").click(function(){
    $("#full-pr6").animate({
        width:'360px'
    });
  });
});



// counterrr.............................
var start = new Date;
setInterval(function() {
    $('#infinity').text((new Date - start) / 1000 );
}, 1000);



// ......section-1.......................

$( window ).scroll(function() {
  $( "#sec-1" ).css( "background-color", "white" );
});




// top button.....................


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}