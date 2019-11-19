<?php 

// send mail
add_action('wp_ajax_nopriv_send_mail', 'send_mail');
add_action('wp_ajax_send_mail', 'send_mail');

function send_mail() {

  $subject = get_bloginfo('name') . ': message from website';
  $headers  = "Content-type: text/html; charset=utf8 \r\n";

  $message = '<b>Name:</b> ' . esc_sql( $_POST['name'] ) . '<br><br>'; 
  $message .= '<b>Email:</b> ' . esc_sql( $_POST['email'] ) . '<br><br>'; 
  $message .= '<b>Message:</b> ' . esc_sql( $_POST['message'] ) . '<br><br>'; 

  echo wp_mail( get_field('option_email', 'option'), $subject, $message, $headers)  ? "Success" : "Error"; 
  die();
}

?>