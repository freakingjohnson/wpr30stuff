var tl = new TimelineMax({onComplete: function(){
    tl.reverse
}});

tl.to('.top_section',1,{x:200, y:300},'start')
    .to('.main_header',.5,{height:300},'start+=0.5')