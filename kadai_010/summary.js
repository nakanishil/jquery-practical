$(function() {
  // ボタンクリックで文字色を変える
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });
  // ボタンクリックで表示を変える
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
    $('#target').css('color', 'red');
  });
  // ボタンクリックで文字がフェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
    $('#target').css('color', 'red');
  });
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
    $('#target').css('color', 'red');
  });
});