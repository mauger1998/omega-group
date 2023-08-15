gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();


// Images Animation

const mainTop = document.querySelector(".main-top")



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});



// Split type
let textLines = document.querySelectorAll(".text1, .text2")
let firstSplit;


textLines.forEach(textLine => {
  firstSplit = new SplitType(textLine, {
      type: "chars"
  })
})



// Loader Dissapear


 let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});
  
   
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

      onComplete: () => {
        ScrollTrigger.refresh()
        // mainTop.style.overflow = "visible"
      }
    },2.5)



    




gsap.to("h1 .char", {
  scrollTrigger: {
    trigger:"h1",
    start:"top 125px",
    end:"+=300",
    scrub:true,
  },
  yPercent:-100,
  opacity:0,
  ease:"Power1.ease",
  stagger:0.25,

})

window.addEventListener("resize", (e) => {
  SplitType.revert('h1')
})

// h1 out

// Swiper 

const swiper = new Swiper('.swiper:not(.swiper2)', {
  speed: 400,
  spaceBetween: 0,
  slidesPerView:1.25,
  centeredSlides:true,
  direction:"horizontal",
  loop:true,

  breakpoints: {
    // when window width is >= 320px
    397: {
      slidesPerView:1.5,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 480px
   
  }
 
});



const swiperNext = document.querySelector(".swiper-button-next:not(.next-button-2)")
const swiperPrev = document.querySelector(".swiper-button-prev:not(.prev-button-2)")

swiperNext.addEventListener("click", (e) => {
  swiper.slideNext();
})
swiperPrev.addEventListener("click", (e) => {
  swiper.slidePrev();
})

// Swiper 2



const swiper2 = new Swiper('.swiper2', {
  speed: 400,
  spaceBetween: 50,
  // direction:"horizontal",
 
});



const swiperNext2 = document.querySelector(".next-button-2")
const swiperPrev2 = document.querySelector(".prev-button-2")

swiperNext2.addEventListener("click", (e) => {
  swiper2.slideNext();
})
swiperPrev2.addEventListener("click", (e) => {
  swiper2.slidePrev();
})


// Mouse Move




  


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







