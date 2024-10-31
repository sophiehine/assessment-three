console.log("JavaScript is working!");

// audio element layout
const bgMusic = new Audio('audio/bgmusic.wav');

const soundBtn = document.querySelector('#sound-btn');
soundBtn.addEventListener('click', () => {
  
  if(bgMusic.paused){
    bgMusic.play();
    soundBtn.name = 'volume-up';
  }else{
    bgMusic.pause();
    soundBtn.name = 'volume-mute';
  }
  
});

// scroll interaction structure #2
const tlStars = gsap.timeline ({
  scrollTrigger: {
      trigger: '.stars-section',
      start: "center bottom",
      scrub: true
  }
});

tlStars.from ('.star', {y:-300, opacity:0, duration: 2, ease:"power4.out", stagger:0.1});

// scroll interaction structure #2
const tlFeatures = gsap.timeline ({
    scrollTrigger: {
        trigger: '.features-section',
        start: "center bottom",
        scrub: true
    }
});

tlFeatures.from ('.feature', {y:-300, opacity:0, duration: 2, ease:"power4.out", stagger:0.1});

// scroll interaction structure #3
const tlHeros = gsap.timeline ({
  scrollTrigger: {
      trigger: '.heros-section',
      start: "center bottom",
      scrub: true
  }
});

tlHeros.from ('.hero', {y:-300, opacity:0, duration: 2, ease:"power4.out", stagger:0.1});

// load scene function 
function loadScene (){
    //gsap timeline 
    const tl = new TimeLineMax()
    //animate elements 
    .to ('#night-toggle-tooltip',{open:true});
}

// detect toggle/switch change 
let nightToggle = document.querySelector ('#night-toggle');
nightToggle.addEventListener('sl-change', () => {
  if( nightToggle.checked === true ){
    isoNightMode ();
  } else {
    isoDayMode ();
  }
});

function isoNightMode (){
    //gsap timeline 
    const tl = new TimeLineMax();
    // animate elements 
    tl.to ('.pairing-bg.pink', {opacity:0, duration:0.5})
    .to ('.pairing-bg.gold', {opacity:1, duration:0.5},'-=0.5');
}

function isoDayMode (){
    //gsap timeline 
    const tl = new TimeLineMax();
    // animate elements 
    tl.to ('.pairing-bg.gold', {opacity:0, duration:0.5})
    .to ('.pairing-bg.pink', {opacity:1, duration:0.5},'-=0.5');
}

// review button dialog 
const reviewDialogBtn =document.querySelector ('.review-sent-btn');
const reviewDialog = document.querySelector ('#review-button');
//click to trigger dialog show 
reviewDialogBtn.addEventListener ('click', () => reviewDialog.show () );

loadScene ();