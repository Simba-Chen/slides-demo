var $allButtons = $('.btn>button')
var index
var num = $('.images>img').length
var x = 0

$allButtons.on('click', function(message){
    index = $(message.currentTarget).index() //jQuery中index()方法得到自己在父元素处于第几个子元素，并将数值返回出来
    var n = index * -800
    x = index
    $('.images').css({
        transform:'translate('+ n +'px)'
    })
    //解决鼠标选中button的bug
    $allButtons.eq(index)
    .addClass('red')
    .siblings('.red').removeClass('red')
})
//增加自动播放功能
var timerId = setInterval(()=>{
    x += 1
    $allButtons.eq(x%num).trigger('click') //.eq()选中第几个子元素并以jQuery对象返回出来，帮助触发事件
        .addClass('red')
        .siblings('.red').removeClass('red')
},1500)
$('.window').on('mouseenter', function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function(){
    setTimer()
})
function setTimer(){
    timerId = setInterval(()=>{
        x += 1
        $allButtons.eq(x%num).trigger('click')
            .addClass('red') 
            .siblings('.red').removeClass('red')
    },1500)
}