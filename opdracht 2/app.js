gsap.to("#element1", {
    duration: 2,
    x: 200, 
    scale: 1.5, 
    backgroundColor: "#e74c3c", 
    ease: "power2.out" 
});

gsap.from("#element2", {
    duration: 2,
    x: -300, 
    ease: "bounce.out" 
  });
  
gsap.fromTo("#element3",
    { y: 200, opacity: 0 }, 
    { duration: 2, y: 0, opacity: 1, ease: "elastic.out(1, 0.3)" } 
);
// Faith's coding, 27-9-2024
document.querySelectorAll(".element").forEach(element => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {scale: 1.5, duration: 0.5, ease: "power1.out"});
    });
    
    element.addEventListener("mouseleave", () => {
      gsap.to(element, {scale: 1, duration: 0.5, ease: "power1.in"});
    });
  });
  