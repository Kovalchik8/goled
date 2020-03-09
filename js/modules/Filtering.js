class Filtering {
  constructor() {
    this.loader = $('.products__loader')
    this.products_layout = $('.products__right')
    this.is_filter_running = false
    this.filter_data = {
      action: 'get_filtered_items',
      class: this.products_layout.attr('data-class'),
      category: [],
      color: [],
      size: [],
      physical: [],
      watts: [],
      cct: [],
      cri: []
    }
    this.filter_items = $('.filter__list li')
    this.events()
  }

  events() {
    this.filter_items.on('click', this.filter_items_onClick.bind(this))
  }

  // filter list item on click
  filter_items_onClick(e) {
    if (this.is_filter_running) return

    var target = $(e.target).is('li') ? $(e.target) : $(e.target).closest('li'),
      filter_name = target.closest('.filter').attr('data-filter-name'),
      filter_items = target.closest('.filter').find('li')

    target.toggleClass('checked')

    // unique for categories
    if (target.hasClass('category__parent')) {
      target.hasClass('checked')
        ? target.find('.category__child').addClass('checked')
        : target.find('.category__child').removeClass('checked')
    } else if (target.hasClass('category__child')) {
      target.closest('.category__parent').removeClass('checked')
    }

    this.filter_data[filter_name] = []
    var $this = this
    filter_items.each(function() {
      if ($(this).hasClass('checked'))
        $this.filter_data[filter_name].push($(this).attr('data-term'))
    })

    this.get_filtered_items()
  }

  // filtering process
  get_filtered_items() {
    this.loader.addClass('visible')
    this.is_filter_running = true

    $.post(GoledData.admin_ajax, this.filter_data, result => {
      var result = JSON.parse(result)

      if (result.products.length) {
        this.products_layout.html(`
        ${result.products
          .map(
            item => `
            <a href="${item.link}" class="item">
            <div class="item__image" style="background-image: url(${item.image})"></div>
            <div class="item__name">${item.title}</div>
            </a>
            `
          )
          .join('')}
        `)
      } else {
        this.products_layout.html(
          '<div class="nothing-found">Nothing found, please try other parameters</div>'
        )
      }

      this.loader.removeClass('visible')
      this.is_filter_running = false
    })
  }
}

export default Filtering
