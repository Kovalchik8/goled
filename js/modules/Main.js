class Main {
  constructor() {
    this.filter_name = $('.filter .filter__name')
    this.is_filter_processing = false
    this.tab_button = $('.product-tabs .tabs li')
    this.product_filters = $('.products__left')
    this.events()
  }

  events() {
    $(document).ready(this.document_onReady.bind(this))
    $(window).on('load', this.window_onLoad)
    this.filter_name.on('click', this.filter_name_onClick)
    this.tab_button.on('click', this.tab_button_onClick.bind(this))
  }

  window_onLoad() {
    // remove preloader
    setTimeout(() => {
      $('.body__loader').removeClass('visible')

      // wow animation
      if ($(window).outerWidth() > 992) new WOW().init()
    }, 200)

    // spy scroll
    if ($('body').hasClass('front-page'))
      $(window).scroll(function() {
        var scrollpos = $(window).scrollTop()
        if (scrollpos <= 0) $('.navbar__nav li a.active').removeClass('active')
        $('section')
          .not('.ego')
          .each(function(i) {
            if ($(this).position().top <= scrollpos + 200) {
              $('.navbar__nav li a.active').removeClass('active')
              $('.navbar__nav li a')
                .eq(i)
                .addClass('active')
            }
          })
      })
  }

  document_onReady() {
    // fixed navbar on scroll
    if ($(window).outerWidth() > 992) {
      if ($(window).scrollTop() > 0) {
        $('.header').addClass('scrolled')
      }

      $(window).scroll(e => {
        $(window).scrollTop() > 0
          ? $('.header').addClass('scrolled')
          : $('.header').removeClass('scrolled')
      })
    }

    // mobile menu toggle
    $('.header .mobile-menu').on('click', () => {
      $('.navbar__nav').slideToggle()
    })

    // products filter menu
    $('.products__filter-icon').on('click', () => {
      this.product_filters.addClass('visible')
      $('body').addClass('inactive')
    })

    // filter toggler on mobile
    $('body, html').on('click', e => {
      let filter_btn_clicked =
        $(e.target).hasClass('products__filter-icon') ||
        $(e.target)
          .parent()
          .hasClass('products__filter-icon')
          ? true
          : false
      if (
        !$(e.target).closest('.products__left').length &&
        this.product_filters.hasClass('visible') &&
        !filter_btn_clicked &&
        !this.is_filter_processing
      ) {
        this.product_filters.removeClass('visible')
        $('body').removeClass('inactive')
      }
    })
  }

  tab_button_onClick(e) {
    this.tab_button.removeClass('active')
    $('.tab-content').removeClass('active visible')

    var tab_button = $(e.target),
      tab_content = $(tab_button.attr('data-target'))

    tab_button.addClass('active')
    tab_content.addClass('active')
    setTimeout(() => {
      tab_content.addClass('visible')
    }, 100)
  }

  // filter slides on click
  filter_name_onClick(e) {
    $(e.target)
      .toggleClass('active')
      .siblings('.filter__list')
      .slideToggle('fast')
  }
}

export default Main
