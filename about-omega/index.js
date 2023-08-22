gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();

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


let URLTHREE = "https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22careers%22%5D"

fetch(URLTHREE)
  .then((res) => res.json())
  .then(({ result }) => {
    const hiringList = document.querySelector(".hiring-list")
    if (result.length > 0) {
      hiringList.innerHTML = ""

      result.forEach((result, index) => {
        const hiringListItem = document.createElement("div")
        hiringListItem.classList.add("hiring-list-item")
        hiringList.appendChild(hiringListItem)

        const question = document.createElement("button")
        question.classList.add("question")
        question.setAttribute("aria-expanded", "false")
        hiringListItem.appendChild(question)

        const questionH2 = document.createElement("h2")
        questionH2.textContent = result.position
        question.appendChild(questionH2)

        const svgContainer = document.createElement("div")
        svgContainer.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
        question.appendChild(svgContainer)

        const answer = document.createElement("div")
        answer.classList.add("answer")
        hiringListItem.appendChild(answer)

        const answerP = document.createElement("p")
        answerP.textContent = result.moreInfo
        answer.appendChild(answerP)
      })

      // Accordian
const items = document.querySelectorAll(".hiring-list-item button");

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
      
    }
  })
  .catch((err) => console.error(err));


// Images Animation

const mainTop = document.querySelector(".main-top")



var tl = gsap.timeline({repeat: 0, repeatDelay: 1});








    




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













// CMS

let URL = "https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22aboutBigText%22%5D+"

fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    const bigText = document.querySelector(".text-section .wrapper h2")
    if (result.length > 0) {
      bigText.textContent = result[0].bigText
      
    }
  })
  .catch((err) => console.error(err));

let URLTWO = "https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22testimonials%22%5D+%7C+order%28order%29+%7B%0A++%22imgUrl%22%3A+profilePicture.asset-%3Eurl%2C%0A++name%2C%0A++review%2C%0A++order%0A%7D"

fetch(URLTWO)
  .then((res) => res.json())
  .then(({ result }) => {
    const testimonialsSlider = document.querySelector(".swiper2 .swiper-wrapper")
    if (result.length > 0) {
      testimonialsSlider.innerHTML = ""

      result.forEach((result, index) => {
        const swiperSlide = document.createElement("div")
        swiperSlide.classList.add("swiper-slide")
        testimonialsSlider.appendChild(swiperSlide)

        const swiperImage = document.createElement("img")
        swiperImage.src = result.imgUrl
        swiperSlide.appendChild(swiperImage)

        const swiperH3 = document.createElement("h3")
        swiperH3.textContent = result.name
        swiperSlide.appendChild(swiperH3)

        const swiperH4 = document.createElement("h4")
        swiperH4.textContent = result.position
        swiperSlide.appendChild(swiperH4)

        const swiperP = document.createElement("p")
        swiperP.textContent = result.review
        swiperSlide.appendChild(swiperP)
      })
      
    }
  })
  .catch((err) => console.error(err));

