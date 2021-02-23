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
    // 添加：节点.classList.add("类名")；

    // 删除：节点.classList.remove("类名")；

}