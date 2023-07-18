// 스크롤 올리시 해더 나옴
let prevScroll = window.scrollY;
console.log(prevScroll);

$(window).on('scroll', () => {
  // 스크롤시 변수에 저장
  let currentScroll = window.scrollY;
  console.log('currentScroll', currentScroll);
  console.log('1prevScroll', prevScroll);

  // 이전 스크롤 값이 크면 true, 스크롤을 올리면 header 보임
  if (prevScroll > currentScroll) {
    // $('header').show();
    $('.header').css({ top: 0 });
  } else {
    // 이후 스크롤 값이 크면 false, 스크롤을 내리면 header 숨김
    // $('header').hide();
    $('.header').css({ top: -150 });
  }

  // prev에 현재 스크롤 값 대입
  prevScroll = currentScroll;
  console.log('2prevScroll', prevScroll);
});

// menu 버튼
$(function () {
  $('.checkbox').on('click', () => {
    $('.header').toggleClass('active');
    $('.hamburger_btn').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

$('#project').on('click', () => {
  $('.menu').slideToggle();
});

$('#about').on('click', () => {
  $('.menu').slideToggle();
});

$('#home').on('click', () => {
  $('.menu').slideToggle();
});
