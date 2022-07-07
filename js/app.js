$(function(){

    /* #gnb toggle
        1. 열기: #toggle-btn 클릭시 #gnb on
        2. 닫기: #btn-close 클릭시 #gnb
    */
    $('#toggle-btn').click(function(){
        $('#gnb').addClass('on');
    });
    $('#btn-close').click(function(){
        $('#gnb').removeClass('on');
    });

});