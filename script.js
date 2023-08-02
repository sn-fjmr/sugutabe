// JavaScript Document
$(function () {
  /*** 上に戻るボタン ***/
  let topBtn = $('#scroll-top');
  topBtn.hide();

  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });

  topBtn.click(function (event) {
    event.preventDefault(); // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
      scrollTop: 0
    }, 500);
  });

  /*** ナビゲーションメニュー ***/
  $('.close-button, .open-button').click(function () {
    $('.header nav').slideToggle();
  });

  /*** スライダー（slick） ***/
  // スライダーの初期設定
  let slickOptions = {
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };

  // デフォルトのslidesToShowの値を設定
  let slidesToShow = 3;

  // 画面幅によってslidesToShowの値を変更
  if ($(window).width() < 1040) {
    slidesToShow = 1;
  }

  // slidesToShowの値をslickOptionsに追加
  slickOptions.slidesToShow = slidesToShow;

  // スライダーを初期化
  $('#slick-slide').slick(slickOptions);

  // 画面サイズが変更されたら、スライダーの設定を更新
  $(window).resize(function () {
    if ($(window).width() < 1040) {
      slidesToShow = 1;
    } else {
      slidesToShow = 3;
    }

    // slidesToShowの値を更新してスライダーを再初期化
    slickOptions.slidesToShow = slidesToShow;
    $('#slick-slide').slick('unslick');
    $('#slick-slide').slick(slickOptions);
  });
});
