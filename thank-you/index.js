// Loader Dissapear

// Loader

// Select Content to be Loaded and Loader
const content = document.querySelector("main")
const loader = document.querySelector(".loader")

// Get all images
const imgLoad = imagesLoaded(content)

let timelineSVG = gsap.timeline({repeat: 0, repeatDelay: 0.5}); 


const svgLetters = document.querySelectorAll(".loader .svg-full svg")

timelineSVG.to(svgLetters, {
  stagger:0.025,
  x:0,
}, 0.05)
timelineSVG.to(".loader > svg", {
  opacity:1,
}, 1)
timelineSVG.to(svgLetters, {
  opacity:0,
}, 1)

// Wait for images
setTimeout(() => {
  const imgLoad = imagesLoaded(content, { background: true })
  imgLoad.on("done", instance => {
    gsap.to(loader, {
      opacity:0,
      duration:1.5,
      pointerEvents:"none",
      ease: "Power4.easeInOut",
    })
    gsap.to(".loader > svg", {
      scale:0,
      duration:1.5,
      ease: "Power4.easeInOut",
    })
    

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

   onComplete: () => {
    ScrollTrigger.refresh()
    // mainTop.style.overflow = "visible"
  }
},0.5) 

   
  ScrollTrigger.refresh()

  })
}, 1500);






