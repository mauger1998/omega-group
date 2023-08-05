// Register Plugins
gsap.registerPlugin(ScrollTrigger)

// Gsap media Queries
let mm = gsap.matchMedia();



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

let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});

// Loader Dissapear Content Come In
setTimeout(() => {
  const imgLoad = imagesLoaded(content, { background: true })
  imgLoad.on("done", instance => {
    tlTwo.to(".loader", {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      ease:"Power1.ease"
    });
    tlTwo.to(".main-top svg path", {
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

      onComplete: () => {
        ScrollTrigger.refresh()
        // mainTop.style.overflow = "visible"
      }

    },2.5)
   
    
 })
 
}, 1500);





gsap.to(".main-top svg path", {
  scrollTrigger: {
    trigger:".main-top svg path",
    start:"top 150px",
    scrub:0.1,
  },
  yPercent:-100,
  
})









// Slider

gsap.to(".excellence-slider-left", {
  scrollTrigger: {
    trigger:".excellence-slider-left img",
    start:"center center",
    pin:".excellence-slider-left",
    end:"+=1600"
  }
})
gsap.to(".excellence-slider-left .slide-two", {
  scrollTrigger: {
    trigger:".slider-three",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-three", {
  scrollTrigger: {
    trigger:".slider-four",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})





// Accordian
const items = document.querySelectorAll(".accordion button");

items.forEach((item) => item.addEventListener("click", toggleAccordion));

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let item of items) {
    item.setAttribute("aria-expanded", false);
  }

  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", true);
  }
}





// Dropdown

const menuOpen = document.querySelector(".open")
const menuClose = document.querySelector(".close")
const overlay = document.querySelector(".overlay")
const contactButton = document.querySelector("header .secondary-button")


var timeline = gsap.timeline({defaults:{duration: 1, ease: Back.easeOut.config(2)}})

timeline.paused(true)

timeline.to(".overlay", {clipPath: "circle(100%)", "opacity":1,})

menuOpen.addEventListener("click", () => {
  timeline.play()
  contactButton.style.pointerEvents = "none"
  contactButton.style.display = "none"
})

menuClose.addEventListener("click", () => {
  timeline.reverse(.5)
  contactButton.style.pointerEvents = "all"
  contactButton.style.display = "block"

})



// Swiper 

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 50,
});

const swiperNext = document.querySelector(".swiper-button-next")
const swiperPrev = document.querySelector(".swiper-button-prev")

swiperNext.addEventListener("click", (e) => {
  swiper.slideNext();
})
swiperPrev.addEventListener("click", (e) => {
  swiper.slidePrev();
})


