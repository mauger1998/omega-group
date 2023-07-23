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



// Mouse Move



mm.add("(min-width: 1024px)", () =>  {
  const follow = document.querySelector(".follow-container")
  const followImages = document.querySelectorAll(".follow-container img")
  const testimonialsItems = document.querySelectorAll(".testimonials-item")
  const testimonialsGrid = document.querySelector(".testimonials-grid");

  testimonialsGrid.addEventListener("mouseenter", (e) => {
    follow.setAttribute("id", "follow")
    follow.classList.add("display")
  })
  testimonialsGrid.addEventListener("mouseleave", (e) => {
    follow.removeAttribute("id", "follow")
    follow.classList.remove("display")
  
  })
  
  testimonialsItems.forEach((item, index) => {
  
      item.addEventListener("mouseenter", (e) => {
        
        followImages[index].classList.toggle("show")
      })
      item.addEventListener("mouseleave", (e) => {
        followImages[index].classList.toggle("show")
      })
      
  })
  
  $(document).ready(function(){
    $(document).mousemove(function(e){
      $('#follow').css('left',e.pageX+"px");
      $('#follow').css('top',e.pageY+"px");
    });
  });
})

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





