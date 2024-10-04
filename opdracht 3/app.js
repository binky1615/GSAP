function animateMain() {
    let main_tl = gsap.timeline({});

    
    main_tl
        .add(animatieBox1(), 0)  
        .add(animatieBox2(), 0.2)  
        .add(animatieBox3(), 0.4) 
        .add(animatieBox4(), 0.6)  
        .add(animatieBox5(), 0.8)  
        .add(animatieBox6(), 1);   
    return main_tl;
}


function animatieBox1() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box1', { x: -300, ease: "expo.inOut" });
    return tl;
}

function animatieBox2() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box2', { x: 300, ease: "expo.inOut" });
    return tl;
}

function animatieBox3() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box3', { y: -300, ease: "expo.inOut" });
    return tl;
}

function animatieBox4() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box4', { y: 300, ease: "expo.inOut" });
    return tl;
}

function animatieBox5() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box5', { scale: 0, ease: "back.out(1.7)" });
    return tl;
}

function animatieBox6() {
    let tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.from('.box6', { rotation: 360, ease: "expo.inOut" });
    return tl;
}


let masterTimeline = animateMain();


document.getElementById("playBtn").addEventListener("click", () => masterTimeline.play());
document.getElementById("pauseBtn").addEventListener("click", () => masterTimeline.pause());
document.getElementById("reverseBtn").addEventListener("click", () => masterTimeline.reverse());
document.getElementById("restartBtn").addEventListener("click", () => masterTimeline.restart());