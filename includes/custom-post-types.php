<?php 

function custom_post_types() {

  // Post type products
  register_post_type( 'products', array(
    'has_archive' => 'products',
    'supports' => array('editor','title'),
    'show_in_rest' => true,
    'menu_icon' => 'dashicons-plus-alt',
    'public' => true,
    'labels' => array(
      'name' => 'Products',
      'add_new_item' => 'Add new',
      'edit_item' => 'Edit',
      'all_items' => 'All',
      'singular_name' => 'Product',
    )
  ));

  // taxonomy class
  register_taxonomy('class', array('products'), array(
    'hierarchical' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'labels'                => [
			'name'              => 'Class',
			'singular_name'     => 'Class',
			'search_items'      => 'Search Class',
			'all_items'         => 'All Classs',
			'view_item '        => 'View Class',
			'parent_item'       => 'Parent Class',
			'parent_item_colon' => 'Parent Class:',
			'edit_item'         => 'Edit Class',
			'update_item'       => 'Update Class',
			'add_new_item'      => 'Add New Class',
			'new_item_name'     => 'New Class Name',
			'menu_name'         => 'Class',
		],
  ));

  // taxonomy category
  register_taxonomy('category', array('products'), array(
    'hierarchical' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'labels' => [
			'name'              => 'Category',
			'singular_name'     => 'Category',
			'search_items'      => 'Search Category',
			'all_items'         => 'All Categorys',
			'view_item '        => 'View Category',
			'parent_item'       => 'Parent Category',
			'parent_item_colon' => 'Parent Category:',
			'edit_item'         => 'Edit Category',
			'update_item'       => 'Update Category',
			'add_new_item'      => 'Add New Category',
			'new_item_name'     => 'New Category Name',
			'menu_name'         => 'Category',
		],
  ));

  // taxonomy color
  register_taxonomy('color', array('products'), array(
    'hierarchical' => false,
    'show_in_rest' => true,
    'show_ui' => true,
    'query_var' => true,
    'labels' => [
			'name'              => 'Color',
			'singular_name'     => 'Color',
			'search_items'      => 'Search Color',
			'all_items'         => 'All Colors',
			'view_item '        => 'View Color',
			'parent_item'       => 'Parent Color',
			'parent_item_colon' => 'Parent Color:',
			'edit_item'         => 'Edit Color',
			'update_item'       => 'Update Color',
			'add_new_item'      => 'Add New Color',
			'new_item_name'     => 'New Color Name',
			'menu_name'         => 'Color',
		],
  ));

    // Post type projects
    register_post_type( 'projects', array(
      'has_archive' => 'projects',
      'supports' => array('editor','title', 'thumbnail'),
      'show_in_rest' => true,
      'menu_icon' => 'dashicons-plus-alt',
      'public' => true,
      'labels' => array(
        'name' => 'Projects',
        'add_new_item' => 'Add new',
        'edit_item' => 'Edit',
        'all_items' => 'All',
        'singular_name' => 'Project',
      )
    ));
	
}

add_action('init', 'custom_post_types');

?>