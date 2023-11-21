// Register Plugins
gsap.registerPlugin(ScrollTrigger)

// Gsap media Queries
let mm = gsap.matchMedia()

// Loader

// Select Content to be Loaded and Loader
const content = document.querySelector('main')
const loader = document.querySelector('.loader')

// Get all images
const imgLoad = imagesLoaded(content)

let timelineSVG = gsap.timeline({ repeat: 0, repeatDelay: 0.5 })

const svgLetters = document.querySelectorAll('.loader .svg-full svg')

timelineSVG.to(
    svgLetters,
    {
        stagger: 0.025,
        x: 0,
    },
    0.05
)
timelineSVG.to(
    '.loader > svg',
    {
        opacity: 1,
    },
    1
)
timelineSVG.to(
    svgLetters,
    {
        opacity: 0,
    },
    1
)

// Wait for images
setTimeout(() => {
    const imgLoad = imagesLoaded(content, { background: true })

    imgLoad.on('done', (instance) => {
        let tlTwo = gsap.timeline({ repeat: 0, repeatDelay: 0.5 })
        tlTwo.to(
            loader,
            {
                opacity: 0,
                duration: 1.5,
                pointerEvents: 'none',
                ease: 'Power4.easeInOut',
            },
            0
        )
        tlTwo.to(
            '.loader > svg',
            {
                scale: 0,
                duration: 1.5,
                ease: 'Power4.easeInOut',
            },
            0
        )
        tlTwo.to(
            '.main-top svg path',
            {
                y: 0,
            },
            0.75
        )

        tlTwo.to(
            '.stat-item',
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                stagger: 0.1,
            },
            0.9
        )
        tlTwo.to(
            '.number-item',
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            0.95
        )
        tlTwo.to(
            '.stat-item > p',
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            1
        )
        tlTwo.to(
            '.main-bottom-left',
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',

                onComplete: () => {
                    ScrollTrigger.refresh()
                    // mainTop.style.overflow = "visible"
                },
            },
            0.5
        )

        ScrollTrigger.refresh()
    })
}, 1200)

// Swiper

const swiper = new Swiper('.swiper:not(.swiper3)', {
    speed: 400,
    spaceBetween: 50,
})

const swiperNext = document.querySelector('.swiper-button-next')
const swiperPrev = document.querySelector('.swiper-button-prev')

swiperNext.addEventListener('click', (e) => {
    swiper.slideNext()
})
swiperPrev.addEventListener('click', (e) => {
    swiper.slidePrev()
})

// Cms

let URL =
    'https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22gallery%22%5D+%7B%0A++%22imgUrl%22%3A+image.asset-%3Eurl%0A%7D%0A'

// fetch the content
fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        const galleryGrid = document.querySelector('.gallery-grid')
        if (result.length > 0) {
            galleryGrid.innerHTML = ''
            result.forEach((result) => {
                const galleryGridItem = document.createElement('div')
                galleryGridItem.classList.add('gallery-grid-item')
                galleryGrid.appendChild(galleryGridItem)

                const galleryImage = document.createElement('img')
                galleryImage.src = result.imgUrl
                galleryGridItem.appendChild(galleryImage)
            })
        }
    })
    .catch((err) => console.error(err))

// Swiper

let URLTWO =
    'https://f9u8zfhq.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D+%7B%0A++question%2C%0A++++answer%0A%7D'

// fetch the content
fetch(URLTWO)
    .then((res) => res.json())
    .then(({ result }) => {
        console.log(result)

        const accordionFaq = document.querySelector('.accordion')
        if (result.length > 0) {
            accordionFaq.innerHTML = ''
            result.forEach((result) => {
                let accordionItem = document.createElement('div')
                accordionItem.classList.add('accordion-item')
                accordionFaq.appendChild(accordionItem)

                let accordionQuestion = document.createElement('button')
                accordionQuestion.setAttribute('aria-expanded', 'false')
                accordionItem.appendChild(accordionQuestion)

                let accordionTitle = document.createElement('span')
                accordionTitle.classList.add('accordion-title')
                accordionTitle.textContent = result.question
                accordionQuestion.appendChild(accordionTitle)

                let accordionIcon = document.createElement('span')
                accordionIcon.classList.add('icon')
                accordionIcon.setAttribute('aria-hidden', 'true')
                accordionQuestion.appendChild(accordionIcon)

                let content = document.createElement('div')
                content.classList.add('content')

                accordionItem.appendChild(content)

                let contentP = document.createElement('p')
                contentP.textContent = result.answer
                content.appendChild(contentP)
            })

            // Accordian
            const items = document.querySelectorAll('.accordion button')

            items.forEach((item) =>
                item.addEventListener('click', toggleAccordion)
            )

            function toggleAccordion() {
                const itemToggle = this.getAttribute('aria-expanded')

                for (let item of items) {
                    item.setAttribute('aria-expanded', false)
                }

                if (itemToggle === 'false') {
                    this.setAttribute('aria-expanded', true)
                }
            }
        }
    })
    .catch((err) => console.error(err))

// Dropdown

const menuOpen = document.querySelector('.open')
const menuClose = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const contactButton = document.querySelector('header .header-button')
const menuLinks = document.querySelectorAll('.overlay ul a')

var timeline = gsap.timeline({
    defaults: { duration: 1, ease: Back.easeOut.config(2) },
})

timeline.paused(true)

timeline.to('.overlay', { clipPath: 'circle(100%)', opacity: 1 })

menuOpen.addEventListener('click', () => {
    timeline.play()
    contactButton.style.pointerEvents = 'none'
    contactButton.style.display = 'none'

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            if (link[index] == 0 || 1 || 2 || 3 || 4 || 9) {
                timeline.reverse(0.5)
                contactButton.style.pointerEvents = 'all'
                contactButton.style.display = 'block'
            }
        })
    })
})

menuClose.addEventListener('click', () => {
    timeline.reverse(0.5)
    contactButton.style.pointerEvents = 'all'
    contactButton.style.display = 'block'
})
