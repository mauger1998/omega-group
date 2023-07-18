gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();

// // Loader
// // Select Content to be Loaded
const content = document.querySelector("main")
// // Select Loader
const loader = document.querySelector(".loader")

// // Get all images
const imgLoad = imagesLoaded(content)

// Images Animation

const mainTop = document.querySelector(".main-top")



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});

window.addEventListener("load", (e) => {
  tl.to(".loader img", {
    stagger:0.5,
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    ease:"Power1.easeInOut"
})
})

// Split type
let textLines = document.querySelectorAll(".text1, .text2")
let firstSplit;


textLines.forEach(textLine => {
  firstSplit = new SplitType(textLine, {
      type: "chars"
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

      onComplete: () => {
        ScrollTrigger.refresh()
        // mainTop.style.overflow = "visible"
      }
    },2.5)



    

 })
}, 1500);

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

// Slider

gsap.to(".excellence-slider-left", {
  scrollTrigger: {
    trigger:".excellence-slider-left img",
    start:"center center",
    pin:".excellence-slider-left",
    end:"+=4000"
  }
})

gsap.to(".excellence-slider-left .slide-one", {
  scrollTrigger: {
    trigger:".slider-one",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-two", {
  scrollTrigger: {
    trigger:".slider-two",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-three", {
  scrollTrigger: {
    trigger:".slider-three",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-four", {
  scrollTrigger: {
    trigger:".slider-four",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-five", {
  scrollTrigger: {
    trigger:".slider-five",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-six", {
  scrollTrigger: {
    trigger:".slider-six",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})
gsap.to(".excellence-slider-left .slide-seven", {
  scrollTrigger: {
    trigger:".slider-seven",
    start:"top center",
    scrub:true,
    end:"+=100",
  },
  opacity:1,
})

ScrollSmoother.create({
  smooth: 2,               // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true,           // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});


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
})

menuClose.addEventListener("click", () => {
  timeline.reverse(.5)
  contactButton.style.pointerEvents = "all"
})