var Data = {//页面状态存储
    radio: false,
}
var radioEl = null  // radio标签
window.onload = function () {
    radioEl =$('#radio')[0]
}

var radioClick = function (e) {// radio click事件
    Data.radio = !Data.radio
    if(Data.radio){
        $('.radioChild').addClass('radioACtive')
        $('.radio').addClass('radioACtive')
    }else{
        $('.radioChild').removeClass('radioACtive')
        $('.radio').removeClass('radioACtive')

    }

}
var openTab=function(){
    let elStyle=$('.checkBoxRightTop').css('display')
    console.log(elStyle)
    if(elStyle==='none'){
        $('.checkBoxRightTop').css('display','block')
    }else{
        $('.checkBoxRightTop').css('display','none')

    }
    

    
}
$('.selectBox').click((e)=>{
    let el=e.target
    console.dir(el)
    if(el.className.indexOf('checkBoxAvtive')>-1){
        el.classList.remove('checkBoxAvtive')
    }else{
        el.classList.add('checkBoxAvtive')

    }
    console.dir()
})