$(function() {
  // ナビゲーションメニューにマウスが乗ると半透明にする
  $(document).on('mouseenter', '.menu li', function() {
    $(this).animate({
      opacity:0.5
    });
  }).on('mouseleave', '.menu li', function() {
    $(this).animate({
      opacity: 1
    });
  });

  // My profileにも同様のものを適用
  $(document).on('mouseenter', '.home', function() {
    $(this).animate({
      opacity:0.5
    });
  }).on('mouseleave', '.home', function() {
    $(this).animate({
      opacity: 1
    });
  });

  // カルーセル
  $('.carousel').slick({
    autoplay: true,  //自動切換え
    dots: true, //UI
    infinite: true, //ループ
    autoplaySpeed: 5000, //画像切り替える時間
    arrows: false, //手動切り替え矢印の有無
    fade: true //フェードアニメーションの設定
  });


  // Works　ワークス
  // Works画像にマウスが乗ると半透明
  $(document).on('mouseenter', '.item img', function() {
    $(this).animate({
      opacity: 0.5
    });
  }).on('mouseleave', '.item img', function() {
    $(this).animate({
      opacity: 1
    });
  });

  // 画像クリック時にポップアップ表示
  $(document).ready(function() {
    $('.works img').on('click', function() {
      // クリックされた画像のsrcを取得して拡大表示
      var imgSrc = $(this).attr('src');

      // オーバーレイと拡大画像、×ボタンを動的に追加
      $('body').append('<div class="overlay"></div>');
      $('body').append('<img src="' + imgSrc + '" class="popup-image">');
      $('body').append('<div class="close-btn">&times;</div>');

      // オーバーレイと画像、×ボタンを表示
      $('.overlay, .popup-image, .close-btn').fadeIn();

      // ×ボタンまたはオーバーレイがクリックされたら閉じる
      $('.close-btn, .overlay').on('click', function() {
        $('.overlay, .popup-image, .close-btn').fadeOut(function() {
        // 完全に非表示になった後、要素を削除
          $('.overlay, .popup-image, .close-btn').remove();
        });
      });
    });
  });

  // TOPへ戻る
  const $pageTop = $("#js-pagetop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $pageTop.fadeIn(300).css('display', 'flex');
    } else {
      $pageTop.fadeOut(300);
      // スクロール後表示する
      $('section').fadeIn();
    }
  });

  $pageTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});