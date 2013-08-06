jQuery(function(){
jQuery('profit').textillate({
  // the default selector to use when detecting multiple texts to animate
  selector: '.texts',

  // enable looping
  loop: true,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 2000,

  // sets the initial delay before starting the animation
  initialDelay: 0,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the
  // character is shown/hidden before or after an animation
  inEffects: ['swing'],

  // custom set of 'out' effects
  outEffects: [ 'tada' ],

  // in animation settings
  in: {
    // set the effect name
    effect: 'swing',

    // set the delay factor applied to each consecutive character
    delayScale: 1.5,

    // set the delay between each character
    delay: 50,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sence in sync = true)
    shuffle: false
  },

  // out animation settings
  out: {
    effect: 'tada',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
  }
});

});
