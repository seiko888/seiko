$(function(){

// スマホレイアウトのときに、ハンバーガーボタンを押すとメニューを表示させる
$('.hum_menu').on('click', function(){
  $('header').toggleClass('open');
});


// グローバルメニュー国際化
$("#lng-ja").on('click', function() {
  $("#menu-sec1").text('見出しのエリア');
  $("#menu-sec2").text('flexのエリア');
  $("#menu-sec3").text('センタリングエリア');
  $("#menu-sec4").text('制作実績');
});

$("#lng-en").on('click', function() {
  $('#menu-sec1').text('Heading');
  $('#menu-sec2').text('Flex');
  $('#menu-sec3').text('Centering');
  $('#menu-sec4').text('Portfolio');
});

////////////////////////////
// ここからプラグイン用の記述 //
///////////////////////////

// スライドイン
$(window).fadeThis();

//ドロワーメニュー
$(".drawer").drawer();

});