class Mail {
  constructor() {
    this.submit_btn = $('#main-form button[type=submit]')
    this.is_email_sending = false
    this.events()
  }

  events() {
    this.submit_btn.on('click', this.submit_btn_onClick.bind(this))
  }

  submit_btn_onClick(e) {
    e.preventDefault()

    if (this.is_email_sending) {
      console.log('Email is sending...')
      return
    }

    var submit_btn = $(e.target),
      submit_btn_text = submit_btn.text(),
      form = submit_btn.closest('form')

    var ajax_data = {
      action: 'send_mail',
      name: form.find('input[name=name]').val(),
      email: form.find('input[name=email]').val(),
      message: form.find('textarea[name=message]').val()
    }

    // validation
    if (ajax_data.email && !validate_email(ajax_data.email))
      ajax_data.email = 'invalid'

    // check inputs (might be invalid or empty)
    if (!ajax_data.name || !ajax_data.email || ajax_data.email == 'invalid') {
      check_input(form.find('input[name=name]'), ajax_data.name, true)
      check_input(form.find('input[name=email]'), ajax_data.email, true)
      check_input(form.find('textarea[name=message]'), ajax_data.message)
      return
    }

    form.find('input').removeClass('error')

    submit_btn.text('Sending...')
    this.is_email_sending = true

    $.post(GoledData.admin_ajax, ajax_data, result => {
      setTimeout(() => {
        // clean all inputs
        submit_btn.text(result)
        if (result == 'Success')
          form.find('input:not([type=submit])').each(function(index) {
            $(this).val('')
          })
        form.find('textarea').val('')
        this.is_email_sending = false

        setTimeout(() => {
          submit_btn.text(submit_btn_text)
        }, 2000)
      }, 2000)
    })

    // check if input isn't empty or invalid after submit
    function check_input(input, input_value, required = false) {
      if ((required && !input_value) || input_value == 'invalid') {
        input.addClass('error')
      } else {
        input.removeClass('error')
      }
    }

    // validator for email
    function validate_email(email) {
      return email.match(/\S+@\S+\.\S+/) != null
    }
  }
}

export default Mail
