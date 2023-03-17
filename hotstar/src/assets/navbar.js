$(window).scroll(reOrder)
$(window).resize(reOrder)

function reOrder() {
  var mq = window.matchMedia("(min-width: 992px)");
  if (mq.matches) {
    $('.right-child').addClass('customm');
    $('.right-child h2').text('Scroll')
    var scroll = $(window).scrollTop(),
      topContent = $('.one').position().top - 25,
      sectionHeight = $('.left').height(),
      rightHeight = $('.right-child').height(),
      bottomContent = topContent + sectionHeight - rightHeight - 45;

    if (scroll > topContent && scroll < bottomContent) {
      $('.customm').removeClass('posAbs').addClass('posFix');
    } else if (scroll > bottomContent) {
      $('.customm').removeClass('posFix').addClass('posAbs');
    } else if (scroll < topContent) {
      $('.customm').removeClass('posFix');
    }
  } else {
    $('.right-child').removeClass('customm posAbs posFix');
    $('.right-child h2').text("fixed")
  }
}