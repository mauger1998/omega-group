

// // Loader
// // Select Content to be Loaded
const content = document.querySelector("main")
// // Select Loader
const loader = document.querySelector(".loader")

// // Get all images
const imgLoad = imagesLoaded(content)

// Images Animation



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});

window.addEventListener("load", (e) => {
  tl.to(".loader img", {
    stagger:0.5,
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease:"Power1.easeInOut"
})
})


// Loader Dissapear

setTimeout(() => {
  const imgLoad = imagesLoaded(content, { background: true })
 let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});
  imgLoad.on("done", instance => {
    tlTwo.to(".loader", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      ease:"Power1.ease"
    });
    tlTwo.to(".main-top h1", {
      y:0,
    },0.85)
   
    tlTwo.to(".stat-item", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger:0.5,
    },0.5)
    tlTwo.to(".number-item", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    },2.25)
    tlTwo.to(".stat-item > p", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    },2.25)
    tlTwo.to(".main-bottom-left", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    },2.5)
    
 })
}, 1500);

// Button


