class Isotope {
  constructor() {
    this.events()
  }

  events() {
    this.iniIsotope()
  }

  iniIsotope() {
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    })

    $('.projects__buttons button').on('click', e => {
      $('.projects__buttons button').each(function(index, element) {
        $(this).removeClass('active')
      })
      $(e.target).addClass('active')
    })

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this)
          .find('.number')
          .text()
        return parseInt(number, 10) > 50
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this)
          .find('.name')
          .text()
        return name.match(/ium$/)
      }
    }

    // bind filter button click
    $('.projects__buttons').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter')
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue
      $grid.isotope({ filter: filterValue })
    })
  }
}

export default Isotope
