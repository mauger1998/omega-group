gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();


const mainTop = document.querySelector(".main-top")



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});







// Loader Dissapear


 let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});
  
    tlTwo.to(".main-top h1", {
      y:0,
    },0.25)
   
    tlTwo.to(".stat-item", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger:0.1,
    },0.35)
    tlTwo.to(".number-item", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    },0.4)
    tlTwo.to(".stat-item > p", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

    },0.45)
    tlTwo.to(".main-bottom-left", {
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

      onComplete: () => {
        ScrollTrigger.refresh()
        // mainTop.style.overflow = "visible"
      }
    },0.5)






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

