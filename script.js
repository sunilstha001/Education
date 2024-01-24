gsap.from("#nav",{
    opacity: 0,
    scale: 0,
    duration:1,
    delay:1.5,
    scale: 0,
})
gsap.from("#page2 .container",{
    opacity: 0,
    duration: 2,
    scale: 0,
    scrollTrigger:{
        trigger:"#page2 .container",
        scroller:"body",
        // markers: true,
        start: "top 100%",
        end:"button 10%",
       
    }
    
})



Shery.textAnimate("#hero h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#page2 .container .child button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet(".button button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



  Shery.imageEffect(".img", {
    style: 1 /*OR 5 for different variant */,
    debug: true,
  });


  Shery.imageEffect(".uni", {
    style: 3,
    debug: true,
  });

