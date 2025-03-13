// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

// GSAP ScrollTrigger Integration
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger when locomotive scroll updates
locoScroll.on("scroll", ScrollTrigger.update);

// Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

// Initial Animations
const tl = gsap.timeline();

tl.from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

tl.from(".animate-text", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.5");

tl.from(".animate-image", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.5");

// Scroll Trigger Animations
gsap.from(".hero-content", {
    scrollTrigger: {
        trigger: ".hero-content",
        scroller: "[data-scroll-container]",
        start: "top center",
        end: "bottom center",
        scrub: 1
    },
    y: 100,
    opacity: 0.5
});

// Button hover animation
const button = document.querySelector(".get-started");
button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.3
    });
});

button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3
    });
});

// Each time the window updates, refresh ScrollTrigger
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// After everything is set up, refresh ScrollTrigger
ScrollTrigger.refresh();

// After existing ScrollTrigger animations, add:

// Job Simulation Section Animation
gsap.from(".job-sim", {
    scrollTrigger: {
        trigger: ".job-sim",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: 100,
    opacity: 0
});

// DSA Game Section Animation
gsap.from(".dsa-game", {
    scrollTrigger: {
        trigger: ".dsa-game",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 20%",
        scrub: 1
    },
    y: 100,
    opacity: 0
});

// Team Collaboration Cards Animation
gsap.from(".collab-card", {
    scrollTrigger: {
        trigger: ".team-collab",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 20%"
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1
});

// XP Bar Animation
gsap.to(".xp-bar", {
    scrollTrigger: {
        trigger: ".dsa-game",
        scroller: "[data-scroll-container]",
        start: "top 60%",
        toggleActions: "play none none reverse"
    },
    width: "80%",
    duration: 1.5,
    ease: "power2.out"
});