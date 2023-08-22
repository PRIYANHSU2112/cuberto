
function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

init()

var cursor=document.querySelector(".cursor");
var cursor2=document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX
    + "px; top: "+e.clientY + "px;";
    // cursor.style.transform=`translate(${e.clientX}px ,${e.clientY}px )`;
})

var creat=document.querySelector("#page1>h1>span");
creat.addEventListener("mousemove",function(e){
  gsap.to("#page1>h1>span>h2",{
    y:"-50%",
    color:"black",
  })
})
creat.addEventListener("mouseleave",function(e){
    gsap.to("#page1>h1>span>h2",{
      y:"0%",
      color:"#e0fd60",
    })
  })

  gsap.to("#cry1",{
    y:"30%",
    borderRadius: "1000px",
    x:"-70%",
    width:"80%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#cry1",
        start:"top 70%",
        end:"top 10%",
        scrub:0.5,
        
      
      },
  })


   
  gsap.to(".cur1",{
    
    width:"400px",
    height:"400px",
    scrollTrigger:{
      scroller:"#main",
      trigger:".cur1",
      start:"top 50%",
      end:"top 10%",
      scrub:1,
      
    
    },

  })

  gsap.to(".cur1>video",{
    
    width:"270px",
    height:"270px",
    scrollTrigger:{
      scroller:"#main",
      trigger:".cur1",
      start:"top 50%",
      end:"top 10%",
      scrub:1,
      
    
    },

  })

  gsap.to(".cur1",{
    
    onstartfunction(){
      var cur1=document.querySelector(".cur1");
      var page3=document.querySelector("#page3");
    page3.addEventListener("mousemove",function(e){
    // cur1.style.cssText =  "left: " + e.clientX + "px; top: "+ e.clientY + "px;";
    cur1.style.transform=`translate(${e.clientX}px ,${e.clientY}px )`;
    })
   
    },
    scrollTrigger:{
      scroll:"#main",
      trigger:".cur1",
      start:"top 50%",
      end:"top 10%",
      scrub:1,
      
    
    },

  })
  var line=document.querySelector(".line");
 line.addEventListener("mousemove",function(dets){
    var path2= `M 20 75 Q ${dets.clientX} ${ dets.clientY} 1500 75`;
    console.log(path2);
       gsap.to("path",{
           attr:{d: path2},
         
       })
       line.addEventListener("mouseleave",function(dets){
          var path2= `M 20 75 Q 750 75 1500 75`; 
           gsap.to("path",{
           attr:{d: path2},
             ease: "bounce.out",
             duration:0.6
           })
       })
      
      
   })   
   
   
   
  var line2=document.querySelector(".line2");
  line2.addEventListener("mousemove",function(dets){
     var path2= `M 20 75 Q ${dets.clientX} ${ dets.clientY} 1500 75`;
     console.log(path2);
        gsap.to("path",{
            attr:{d: path2},
          
        })
        line2.addEventListener("mouseleave",function(dets){
           var path2= `M 20 75 Q 750 75 1500 75`; 
            gsap.to("path",{
            attr:{d: path2},
              ease: "bounce.out",
              duration:0.6
            })
        })
       
       
    })   
    
      
  var line3=document.querySelector(".line3");
  line3.addEventListener("mousemove",function(dets){
     var path2= `M 20 75 Q ${dets.clientX} ${ dets.clientY} 1500 75`;
     console.log(path2);
        gsap.to("path",{
            attr:{d: path2},
          
        })
        line3.addEventListener("mouseleave",function(dets){
           var path2= `M 20 75 Q 750 75 1500 75`; 
            gsap.to("path",{
            attr:{d: path2},
              ease: "bounce.out",
              duration:0.6
            })
        })
       
       
    })  
    
    function counter(){
      var count=setInterval(function(){
        var c=parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c==100){
          clearInterval(count);
          $('.counter').addClass('hide')
        }
      },18)
    }
    counter()
    var at=gsap.timeline();
    at.to("#loder>h1",{
      x:-200,
      duration:1,
      delay:0.5
    })
    at.to("#loder>h1",{
      y:170,
    })
    at.to("#loder>h1",{
      y:50,
      opacity:0,
    })
    
var at2=gsap.timeline();
at2.to("#loder>h2",{
  x:300,
  duration:1,
  delay:0.5,
} )
   at2.to("#loder>h2",{
    y:-120,
    opacity:0,
    delay:0.5,
  })

gsap.to("#loder>h3",{
   y:-100,
   delay:2,
   opacity:0,
})
gsap.to("#loder>h4",{
  y:-100,
  delay:2,
  opacity:0,
})
var t1=gsap.timeline();
t1.to("#loder",{
  delay:2.2,
  opacity:0,
  duration:1,
  y:"-100%"
})
// t1.to("#page1>h1",{
//   opacity:1,
//   onStart: function () {
//       $('#page1>h2').textillate({ in: { effect: 'fadeInUp' } });
//   },
// })

gsap.to("#page1>h2",{
  onStart: function () {
      $('#page1>h2').textillate({ in: { effect: 'fadeInUp',  delayScale:0.5  } });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page1>h2",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})

gsap.from("#page3>h1",{
  y:100,
  opacity:0,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page3>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.to("#page3>h1",{
  onStart: function () {
      $('#page3>h1>span').textillate({ in: { effect: 'fadeInUp',    delayScale: 0.7,} });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page3>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})

gsap.from("#page4>h1",{
  y:100,
  opacity:0,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page4>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.to("#page4>h1",{
  onStart: function () {
      $('#page4>h1>span').textillate({ in: { effect: 'fadeInUp',    delayScale: 0.7,} });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page4>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.to("#page5>h1",{
  onStart: function () {
      $('#page5>h1').textillate({ in: { effect: 'fadeInUp',    delayScale: 0.7,} });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page5>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.from("#page6>h1",{
  y:100,
  opacity:0,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page6>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.from("#p-6-h2",{
  y:100,
  opacity:0,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#p-6-h2",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})

gsap.to("#p-upper>h1",{
  onStart: function () {
      $('#p-upper>h1>span').textillate({ in: { effect: 'fadeInUp',    delayScale: 2,} });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#p-upper>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})
gsap.to("#p-upper>h1",{
  onStart: function () {
      $('#p-upper>h1').textillate({ in: { effect: 'fadeInUp',    delayScale: 1,} });
  },
  opacity:1,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#p-upper>h1",
      scrub:true,
      start:"top 90%",
      end:"top 30%",
     
  }
})



  gsap.from("#s1",{
    scale:0.6,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s1",
        // scrub:true,
        start:"top 90%",
         end:"top 30%",
       
    }
  })

  

  gsap.from("#s2-",{
    scale:0.6,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s2-",
        // scrub:true,
        start:"top 90%",
         end:"top 30%",
       
    }
  })
  

  gsap.from("#s3",{
    scale:0.6,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#s3",
        // scrub:true,
        start:"top 90%",
         end:"top 30%",
       
    }
  })
var card=document.querySelectorAll("#c2");
 card.forEach(function(item){
  item.addEventListener("mousemove",function(detes){
    const rotx =40-detes.x/11;
    const roty=Math.abs(rotx);
    console.log(rotx,roty)
    item.style.transform=`rotateX(${rotx}deg) rotateY(${-roty}deg)`;
  })
 })
 