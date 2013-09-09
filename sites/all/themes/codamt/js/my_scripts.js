jQuery(function() {

//lines and arrows of recipe section
    jQuery('.pane-who-and-what .pane-title').append('<hr>');
    jQuery('.pane-who-and-what .pane-title').prepend('<hr>');

//lines for porfolio section
    jQuery('<hr class="foo">').insertAfter('.pane-our-work .pane-title');
    jQuery('<hr class="foot">').insertBefore('.pane-our-work .pane-title');

//lines for recipe section
    jQuery('#mini-panel-recipe').children().before('<h2 class="crep">Codam Recipe</h2>');
    jQuery('<hr class="fox">').insertAfter('.crep');
    jQuery('<hr class="for">').insertBefore('.crep');
    jQuery('.fox').add('.for').add('.crep').wrapAll('<div class="rep"></div>');

    jQuery('#mini-panel-recipe .panel-separator').detach();

    jQuery('#mini-panel-recipe .panel-pane').eq(0)
        .append('<img class="arrow" src="/codam/sites/default/files/arrow.png" />');

    jQuery('#mini-panel-recipe .panel-pane').eq(1)
        .append('<img class="arrow1" src="/codam/sites/default/files/arrow.png" />');

    jQuery('#mini-panel-recipe .panel-pane').eq(2)
        .append('<img class="arrow2" src="/codam/sites/default/files/arrow.png" />');


//Contact Form Placeholder
    var  $A = jQuery('input#edit-submitted-name');
    var  $B = jQuery('input#edit-submitted-email');
    var  $C = jQuery('input#edit-submitted-subject');
    var  $D = jQuery('textarea#edit-submitted-message');

    $A.attr({'placeholder':'Martin Oru'});
    $A.focus(function(){
    $A.removeAttr('placeholder');
});
$A.blur(function(){
  $A.attr({'placeholder':'Martin Oru'});
});

$B.attr({'placeholder':'fuzzy_stuff@gmail.com'});
$B.focus(function(){
   $B.removeAttr('placeholder');
});
$B.blur(function(){
   $B.attr({'placeholder':'fuzzy_stuff@gmail.com'});
});

$C.attr({'placeholder':'Cost Of Website'});
$C.focus(function(){
   $C.removeAttr('placeholder');
});
$C.blur(function(){
   $C.attr({'placeholder':'Cost Of Website'});
});

$D.attr({'placeholder':'I Would Like To........'});
$D.focus(function(){
   $D.removeAttr('placeholder');
});
$D.blur(function(){
  $D.attr({'placeholder':'I Would Like To........'});
});

 jQuery('.arrow').add('.arrow1').add('.arrow2').hide();
 function arrow(){
 jQuery('.arrow').fadeIn(900, function(){
 jQuery('.arrow').fadeOut(700, function(){
 jQuery('.arrow1').fadeIn(900, function(){
   jQuery('.arrow1').fadeOut(700, function(){
     jQuery('.arrow2').fadeIn(900, function(){
       jQuery('.arrow2').fadeOut(700, function(){
         arrow();
       });
     });
   });
  });
  });
  });
 }

 arrow();



});





