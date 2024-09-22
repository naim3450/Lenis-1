const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.querySelectorAll('.elem').forEach(element => {
    gsap.registerPlugin(ScrollTrigger)
    let image = element.querySelector('img')

    let tl = gsap.timeline()

    let xTransform = gsap.utils.random(-100, 100);

    tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : `100%`}`
    }, "start").to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            scroller: `body`,
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    }, "start").to(element, {
        xPercent: xTransform + 10,
        ease: "Power4.easeInOut",
        scrollTrigger: {
            scroller: `body`,
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    }, "start")
});

gsap.to('.downScreen', {
    opacity: 0,
    scrollTrigger: {
        scroller: `body`,
        trigger: `.upScreen`,
        start: "top 50%",
        end: "bottom 35%",
        scrub: true,
    }
})