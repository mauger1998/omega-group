// Register Plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

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


// Purple Services

var tlPurple = gsap.timeline({repeat: 0, repeatDelay: 1});


tlPurple.to(".purple-grid-item", {
  scrollTrigger: {
    trigger:".purple-services-section",
    start:"top 150px",
    scrub:0.1,
    end:"+=250",
  },
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger:0.2,
})
tlPurple.to(".purple-grid-item svg", {
  scrollTrigger: {
    trigger:".purple-services-section",
    start:"top 150px",
    scrub:0.1,
    end:"+=275",
  },
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger:0.2,
})
tlPurple.to(".purple-grid-item p", {
  scrollTrigger: {
    trigger:".purple-services-section",
    start:"top 150px",
    scrub:0.1,
    end:"+=300",
  },
  clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger:0.2,
})

const serviceWrapper = document.querySelector(".purple-services-section")
const follow = document.querySelector(".cursor")

serviceWrapper.addEventListener("mouseenter", (e) => {
  follow.setAttribute("id", "cursor")
  follow.classList.add("display")
})
serviceWrapper.addEventListener("mouseleave", (e) => {
  follow.removeAttribute("id", "cursor")
  follow.classList.remove("display")

})
  
  $(document).ready(function(){
    $(document).mousemove(function(e){
      $('#cursor').css('left',e.pageX+"px");
      $('#cursor').css('top',e.pageY+"px");
    });
  });

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
})

menuClose.addEventListener("click", () => {
  timeline.reverse(.5)
  contactButton.style.pointerEvents = "all"
})