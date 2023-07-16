gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


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

    },2.5)
    
 })
}, 1500);

// Button



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


// Velocity

let slides = gsap.utils.toArray(".scroll-container .slide")

let scrollTween = gsap.to(slides, {
  xPercent: -100 * (slides.length - 1),
  ease:"none",
  scrollTrigger: {
    trigger: ".gallery-section",
    pin:true,
    scrub: 0.01,
    end: "+=3000",

    onUpdate: self => {
      let skewAmount = self.getVelocity() / 200
      console.log(skewAmount)
      let scaleAmount = 1 + Math.abs(self.getVelocity() / 5000)

       slides.forEach(slide => {
        gsap.to(slide.querySelector(".skew-group"), {
          skewX: skewAmount,
          scaleY: scaleAmount,
          overwrite: true,
          ease:"power1.out"
        })
       })
    },

    onScrubComplete: () => {
      slides.forEach(slide => {
        gsap.to(slide.querySelector(".skew-group"), {
          skewX: 0,
          scaleY:1,
          duration: 0.5,
          ease:"power1.out"
        })
       })
    }
  }
})

// ScrollSmoother.create({
//   smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true,           // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });
