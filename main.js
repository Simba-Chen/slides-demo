/*$('#btn1').on('click',function(){
    $('.images').css({
        transform: 'translateX(0)'
    })
})
$('#btn2').on('click',function(){
    $('.images').css({
        transform: 'translateX(-800px)'
    })
})
$('#btn3').on('click',function(){
    $('.images').css({
        transform: 'translateX(-1600px)'
    })
})
$('#btn4').on('click',function(){
    $('.images').css({
        transform: 'translateX(-2400px)'
    })
})
$('#btn5').on('click',function(){
    $('.images').css({
        transform: 'translateX(-3200px)'
    })
})
$('#btn6').on('click',function(){
    $('.images').css({
        transform: 'translateX(-4000px)'
    })
})*/
//以后就可以不改动JS 增加轮播图片
var allButtons = $('.btn>button')

for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click', function(message){
        var index = $(message.currentTarget).index() //jQuery中index()方法得到自己在父元素处于第几个子元素，并将数值返回出来
        var n = index * -800
        $('.images').css({
            transform:'translate('+ n +'px)'
        })
        //解决鼠标选中button的bug       
        activeButton(allButtons.eq(index))
    })
}
//增加自动播放功能
var x = 0
var num = $('.images>img').length
playSlide(x%num)  //播放第0张

var timerId 
setTimer()
$('.window').on('mouseenter', function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function(){
    setTimer()
})



function playSlide(index){
    allButtons.eq(index).trigger('click')
        .addClass('red') //选中第几个子元素并以jQuery对象返回出来，帮助触发事件
        .siblings('.red').removeClass('red')//jQuery链式操作，每次找到元素后，后面的操作就把该元素当作操作对象。
}
function activeButton($button){
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}
function setTimer(){
    timerId = setInterval(()=>{
        x += 1
        playSlide(x%num)
    },1500)
}