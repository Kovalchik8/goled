<?php 

// get filtered items
add_action( 'wp_ajax_nopriv_get_filtered_items', 'get_filtered_items' );
add_action( 'wp_ajax_get_filtered_items', 'get_filtered_items' );

function get_filtered_items() {

  $result = array( 'products' => array() );
  
  // initial args
  $args = array('post_type' => 'products', 'posts_per_page' => -1);
  $tax_query = array('relation' => 'AND');
  $meta_query = array('relation' => 'AND');

  // set query by taxonomies
  $taxonomies = ['class', 'category', 'color'];
  foreach($taxonomies as $tax)
    if (!empty($_POST[$tax])) {
      $tax_query_args[] = array(
        'taxonomy' => $tax,
        'field'    => 'id',
        'terms'  => $_POST[$tax]
      );
      $tax_query[] = $tax_query_args;
    }
  
  $args['tax_query'] = $tax_query; 

  // set query by meta fields
  $meta_fields = ['size', 'physical', 'watts', 'cct', 'cri'];
  foreach($meta_fields as $meta)
    if ( !empty($_POST[$meta])) {
      $meta_query_args[] = array(
        'key'     => 'product_params_' . $meta,
        'value'   => esc_sql( $_POST[$meta] ),
        'compare' => 'IN',
      );
      $meta_query[] = $meta_query_args;
    }
  
  $args['meta_query'] = $meta_query;

  // make the query
  $products = new WP_Query($args); 

  while($products->have_posts()) {
    $products->the_post();

    if (get_post_type() == 'products')
      array_push($result['products'], array(
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'image' => get_field('product_gallery')[0],
      ));
  }

  echo json_encode($result);
  die();
}

?>