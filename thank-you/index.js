// Loader Dissapear


let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});
  
tlTwo.to("main h1", {
  y:0,
  ease:"Power1.ease",
},0.25)
tlTwo.to("main p", {
  y:0,
  ease:"Power1.ease",
},0.6)
tlTwo.to("main button", {
  y:0,
  ease:"Power1.ease",
},0.75)


