gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();


const mainTop = document.querySelector(".main-top")



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});

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
    
    

 let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});

 tlTwo.to(loader, {
  opacity:0,
  duration:1.5,
  pointerEvents:"none",
  ease: "Power4.easeInOut",
}, 0)
tlTwo.to(".loader > svg", {
  scale:0,
  duration:1.5,
  ease: "Power4.easeInOut",
}, 0)
  
 tlTwo.to(".main-top h1", {
   y:0,
 },0.75)

 tlTwo.to(".stat-item", {
   clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
   stagger:0.1,
 },0.9)
 tlTwo.to(".number-item", {
   clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

 },0.95)
 tlTwo.to(".stat-item > p", {
   clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

 },1)
 tlTwo.to(".main-bottom-left", {
   clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

   onComplete: () => {
     ScrollTrigger.refresh()
     // mainTop.style.overflow = "visible"
   }
 },1) 
  ScrollTrigger.refresh()

  })
}, 1200);







// Loader Dissapear







// h1 out



// Dropdown

const menuOpen = document.querySelector(".open")
const menuClose = document.querySelector(".close")
const overlay = document.querySelector(".overlay")
const contactButton = document.querySelector("header .secondary-button")
const menuLinks = document.querySelectorAll(".overlay ul a")



var timeline = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

timeline.paused(true)

timeline.to(".overlay", {clipPath: "circle(100%)", "opacity":1,})

menuOpen.addEventListener("click", () => {
  timeline.play()
  contactButton.style.pointerEvents = "none"
  contactButton.style.display = "none"

  menuLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {

      if (link[index] == 5 || 6 || 7 ) {
        timeline.reverse(.5)
        contactButton.style.pointerEvents = "all"
        contactButton.style.display = "block"
      }
      
    })
  })

})

menuClose.addEventListener("click", () => {
  timeline.reverse(.5)
  contactButton.style.pointerEvents = "all"
  contactButton.style.display = "block"

})

