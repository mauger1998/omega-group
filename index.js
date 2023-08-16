// Register Plugins
gsap.registerPlugin(ScrollTrigger)

// Gsap media Queries
let mm = gsap.matchMedia();





// Images Animation
var tl = gsap.timeline({repeat: 0, repeatDelay: 1});



let tlTwo = gsap.timeline({repeat: 0, repeatDelay: 1});

 
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
   



    







// gsap.to(".main-top svg path", {
//   scrollTrigger: {
//     trigger:".main-top svg path",
//     start:"top 150px",
//     scrub:0.1,
//   },
//   yPercent:-100,
  
// })

// Cms

let URL = "https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22gallery%22%5D+%7B%0A++%22imgUrl%22%3A+image.asset-%3Eurl%0A%7D%0A"



// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    const galleryGrid = document.querySelector(".gallery-grid")
    if (result.length > 0) {
      galleryGrid.innerHTML = ""
      result.forEach((result) => {
        const galleryGridItem = document.createElement("img")
        galleryGridItem.src = result.imgUrl
        galleryGrid.appendChild(galleryGridItem)
      });
      
    }
  })
  .catch((err) => console.error(err));

let URLTWO = "https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D+%7B%0A++question%2C%0A++++answer%0A%7D"



// fetch the content
fetch(URLTWO)
  .then((res) => res.json())
  .then(({ result }) => {
    console.log(result)

    const accordionFaq = document.querySelector(".accordion")
    if (result.length > 0) {
      accordionFaq.innerHTML = ""
      result.forEach((result) => {
        let accordionItem = document.createElement("div")
        accordionItem.classList.add("accordion-item")
        accordionFaq.appendChild(accordionItem)

        let accordionQuestion = document.createElement("button")
        accordionQuestion.setAttribute("aria-expanded", "false")
        accordionItem.appendChild(accordionQuestion)

        let accordionTitle = document.createElement("span")
        accordionTitle.classList.add("accordion-title")
        accordionTitle.textContent = result.question
        accordionQuestion.appendChild(accordionTitle)

        let accordionIcon = document.createElement("span")
        accordionIcon.classList.add("icon")
        accordionIcon.setAttribute("aria-hidden", "true")
        accordionQuestion.appendChild(accordionIcon)

        let content = document.createElement("div")
        content.classList.add("content")

        accordionItem.appendChild(content)

        let contentP = document.createElement("p")
        contentP.textContent = result.answer
        content.appendChild(contentP)


      });

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
      
    }
  })
  .catch((err) => console.error(err));



















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

      if (link[index] == 0 || 1 || 2 || 3 || 4 || 9) {
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




let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
//Format: Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2023, 7, 31, 12, 00);
//Output value in milliseconds
let endTime = endDate.getTime();
function countdown() {
  let todayDate = new Date();
  //Output value in milliseconds
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  //60sec => 1000 milliseconds
  let oneMin = 60 * 1000;
  //1hr => 60 minutes
  let oneHr = 60 * oneMin;
  //1 day => 24 hours
  let oneDay = 24 * oneHr;
  //Function to format number if it is single digit
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
  //If end dat is before today date
  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>Countdown had expired!</h1>`;
  }
  //If end date is not before today date
  else {
    //Calculating remaining days, hrs,mins ,secs
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    //Displaying Valurs
    dayBox.textContent = addZeroes(daysLeft);
    hrBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minsLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();




