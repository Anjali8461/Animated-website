gsap.to(".tline h1",{
    x:"-100%",
    repeat:-1,
    ease:Linear.easeInOut,
    duration:3,
})
gsap.to(".images", {
    scrollTrigger: {
        // scroller: ".main",
        trigger: ".scnd",
        // markers:true,
        start: "top top",
        scrub: 2,
        pin: true,
    },
    y: "-200%",
    onUpdate: (function (elem) {
        let img = document.querySelectorAll(".img")

        for (var i = 0; i < img.length; i++) {
            let val = img[i].getBoundingClientRect().top
            let maprange = gsap.utils.mapRange(-10, 10, 1, 1.5, Math.floor(val * .01));
            img[i].style.transform = `scale(${maprange}) rotate3d(1,1,0, ${val * 0.05}deg)`
        }

    })
})



gsap.from(".parent .child",{
    scrollTrigger:{
        trigger:".fourth",
        markers:false,
        start:"top 70%",
        
    },
    y:260,
    duration:1,
    stagger:1,
    ease:"back.out(1.7)",
})


// document.querySelector(".parent").addEventListener("mousemove",function(dets){
//     var move=Math.floor(dets.screenX)
//     gsap.to(".parent img",{
//         scale:1,
//         opacity:1,
//         x:`${move*0.4}px`,
//         rotate:`${move * 0.2}deg`,
        
//     })

    document.querySelector(".parent").addEventListener("mouseleave",function(dets){
        var move=Math.floor(dets.screenX)
//         gsap.to(".parent img",{
//             scale:0,
//            x:0,
//            rotate:0,
            
//         })


    document.querySelector(".parent img").style.scale=1;
    document.querySelector(".parent img").style.opacity=1;
    var move=Math.floor(dets.screenX)
    // console.log(move)
    document.querySelector(".parent img").style.transform=`translateX(${move * 0.4}px) rotate(${move * 0.2}deg)`;
})
document.querySelector(".parent").addEventListener("mouseleave",function(dets){
    document.querySelector(".parent img").style.scale=0;
    document.querySelector(".parent img").style.opacity=0;
    document.querySelector(".parent img").style.transform=`translate(0,0) rotate(0deg)`
 
})

