gsap.registerPlugin(ScrollTrigger);
var timeLine = gsap.timeline();

gsap.from('.stagger-animate', {
    opacity: 0,
    duration: 1,
    y: -50,
    stagger: 0.4
});

gsap.from('.stagger-animate-up', {
    scrollTrigger: '.stagger-animate-up',
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.4
});

gsap.from('.right-part', {
    opacity: 0,
    duration: 1,
    x: 100,
})

gsap.from('.elastic-up', {
    scrollTrigger: '.elastic-up',
    opacity: 0,
    duration: 1,
    y: 50,
})