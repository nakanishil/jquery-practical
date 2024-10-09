$(function() {
// クラス属性btnがクリックされたら
  $('.btn').on('click', function() {
    // クラスtextのvalueを変更する
    $('.text-box').val('クリックしました！');
  });

});