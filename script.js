var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+5+"px"
    crsr.style.top  = dets.y+"px" 
    blur.style.left = dets.x - 200 +"px"
    blur.style.top  = dets.y - 200 +"px" 
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale = 1
            crsr.style.border = "0px solid #95C111E"
            crsr.style.backgroundColor = "#95C111E"
        })
    
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    hight:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scrooler:"body",
        start:"top -10%",
        scrub:1
    }
})


gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about-us, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrab:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"colon2",
        scroller:"body",
        start:"top 55%",

        end:"top 45%",
        scrab:4
    }
})