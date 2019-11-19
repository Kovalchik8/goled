<?php 

// include css and js assets
add_action( 'wp_enqueue_scripts', function () {
  wp_enqueue_style('goled-main-stylesheet', get_stylesheet_uri(), NULL, microtime() );
  
  wp_deregister_script('jquery');
  wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.4.1.min.js', array(), NULL, true);
  wp_enqueue_script('isotope-js', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array(), NULL, true);
  wp_enqueue_script('wow-js', 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', array(), NULL, true);
  wp_enqueue_script('goled-main-js', get_theme_file_uri('/js/scripts-bundled.js'), NULL, microtime(), true );

  wp_localize_script( 'goled-main-js', 'GoledData', array(
    'admin_ajax' => admin_url('admin-ajax.php'),
  ));
  
});

// add thumbnails support
add_theme_support( 'post-thumbnails');

add_filter('show_admin_bar', '__return_false');

// add option page from acf pro
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}

// ACF PRO - remove the update note
add_filter( 'site_transient_update_plugins', function ( $value ) {
  if( isset( $value->response['advanced-custom-fields-pro-master/acf.php'] ) ) {        
     unset( $value->response['advanced-custom-fields-pro-master/acf.php'] );
   } return $value;
});

// exclude folders for all in one wp migration
add_filter('ai1wm_exclude_content_from_export', function($exclude_filters) {
  $exclude_filters[] = 'themes/goled/node_modules';
  return $exclude_filters;
});

require_once get_theme_file_path('/includes/custom-post-types.php'); // custom post types
require_once get_theme_file_path('/includes/filtering.php'); // products filtering
require_once get_theme_file_path('/includes/mail.php'); // mail