<?php 

// get filtered items
add_action( 'wp_ajax_nopriv_get_filtered_items', 'get_filtered_items' );
add_action( 'wp_ajax_get_filtered_items', 'get_filtered_items' );

function get_filtered_items() {

  $result = array( 'products' => array() );
  
  // initial args
  $args = array(
    'post_type' => 'products',
    'posts_per_page' => -1
  );
  
  $tax_query = array('relation' => 'AND');
  $meta_query = array('relation' => 'AND');

  // set filter by taxonomy class
  $tax_query[] = array(
    array (
      'taxonomy' => 'class',
      'field'    => 'id',
      'terms'    => esc_sql($_POST['class']),
    ));

  // set filter by taxonomy category
  if ($_POST['category']) {
    $tax_cat[] = array(
      array (
        'taxonomy' => 'category',
        'field'    => 'term_id',
        'terms'    => esc_sql( $_POST['category'] ),
      ));
    $tax_query[] = $tax_cat;
  }

  // set filter by taxonomy color
  if ($_POST['color']) {
    $tax_color[] = array(
      array (
        'taxonomy' => 'color',
        'field'    => 'term_id',
        'terms'    => esc_sql( $_POST['color'] ),
      ));
    $tax_query[] = $tax_color;
  }
  
  $args['tax_query'] = $tax_query;

  // set filter by meta fields
  $meta_params = ['size', 'physical', 'watts', 'cct', 'cri'];
  foreach($meta_params as $meta) {
    if ( !empty($_POST[$meta])) {
      $meta_query_param[] = array(
        'key'     => 'product_params_' . $meta,
        'value'   => esc_sql( $_POST[$meta] ),
        'compare' => 'IN',
      );
      $meta_query[] = $meta_query_param;
    }
  }
  
  $args['meta_query'] = $meta_query;

  // make the query
  $products = new WP_Query($args); 

  while($products->have_posts()) {
    $products->the_post();

    if (get_post_type() == 'products') {
      array_push($result['products'], array(
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'image' => get_field('product_gallery')[0],
      ));
    }
    
  }

  echo json_encode($result);
  die();
}

?>