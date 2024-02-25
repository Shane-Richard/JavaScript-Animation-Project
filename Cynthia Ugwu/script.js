const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;
let minicircle = document.querySelector(".minicircle");
let scalemovingCircle = () => {
    let xscale = 1;
    let yscale = 1;

    let xposition = 0;
    let yposition = 0;
    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xposition);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yposition);

        dets.clientX = xposition;
        dets.clientY = yposition;

        followCircle(xscale, yscale);

        timeout = setTimeout(() => {
            minicircle.style.transform = `translate(${dets.clientX - 5}px, 
         ${dets.clientY - 5}px) scale(1,1)`
        }, 100);
    });
}

let followCircle = (xscale, yscale) => {
    window.addEventListener("mousemove", (dets) => {
        minicircle.style.transform = `translate(${dets.clientX }px, 
        ${dets.clientY }px) scale(${xscale}, ${xscale})`;

        
    })
}


let pageOneAnimation = () => {
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: "-10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
    })
        .to(".boundingval", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .3,
            delay: -1,
        })
        .from(".page1-footer", {
            y: -10,
            opacity: 0,
            duration: 2,
            delay: -1,
        })
    
}


scalemovingCircle();
followCircle();
pageOneAnimation()

document.querySelectorAll(".item").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("h1"), {
            x: 0,
            ease: Power3,
            opacity: .6,
        })
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
        gsap.to(elem.querySelector("h4"), {
            opacity: .6,
        })
    });


    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("h1"), {
            x: 10,
            ease: Power3,
            opacity: 0.3,
        })

        gsap.to(elem.querySelector("h4"), {
            opacity: 0.3,
        })

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: "diff",
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
       
    });

});


// time function


let timer = () =>{
    let date = new Date;

    let hr =  date.getHours();
    let min = date.getMinutes();
    let am_pm = hr >= 12 ? "PM" :"AM" ;
    hr = hr % 12 || 12; 


    document.querySelector(".hour").innerHTML = hr;
    document.querySelector(".min").innerHTML = min;
    document.querySelector(".am-pm").innerHTML = am_pm;
}

timer();

// //navBar
let menuHid = document.querySelector(".menu")

let menuBar = ()=>{
    menuHid.addEventListener("click",()=>{
         gsap.to(".menu",{
             y:100,
             ease: Expo.easeInOut,
             
         })
         gsap.to(".hid-list h4",{
             y:0,
             ease: Expo.easeInOut,  
             stagger: .1,
         })
    })
}
menuBar();


