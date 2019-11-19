<?php get_header(); $class = get_queried_object(); ?>

<?php $hero_bg = get_field('class_bg', $class); 
$hero_bg = $hero_bg ? $hero_bg : get_theme_file_uri('/img/single-product.jpg');

// fill arrays with unique meta values for filtering (for current class)
$class_filter_params = array(
  'size' => array(),
  'physical' => array(),
  'watts' => array(),
  'cct' => array(),
  'cri' => array(),
);

$class_posts = new WP_Query(array(
  'post_type' => 'products',
  'posts_per_page' => -1,
  'orderby' => 'name',
  'order' => 'ASC', 
  'tax_query' => array(
    array(
      'taxonomy' => 'class',
      'field' => 'slug',
      'terms' => $class,
      ),
    ),
)); 

while($class_posts->have_posts()) {
  $class_posts->the_post();
  $post_params = get_field('product_params');
  
  foreach($class_filter_params as $key => $param) {
    if (!empty($post_params[$key]) && !in_array($post_params[$key], $class_filter_params[$key]) )
     array_push($class_filter_params[$key], $post_params[$key]);
  }
} rewind_posts(); ?>

<div class="hero hero--product" style="background-image: url(<?php echo $hero_bg; ?>)">
  <div class="container">
    <h1 class="title wow fadeInDown animated"><?php echo $class->name; ?></h1>
  </div>
</div>

<section class="section products" id="products">

  <div class="products__loader">
    <div class="loader visible"></div>
  </div>

  <div class="container">

    <div class="products__filter-icon">
      <img src="<?php echo get_theme_file_uri('/img/equalizer.svg') ?>" alt="fileter">
    </div>

    <div class="row">

      <div class="products__left item wow fadeInLeft animated" data-wow-delay="400ms">

        <!-- filter category -->
        <div class="filter" data-filter-name="category">
          <div class="filter__name active">Category</div>

          <ul class="filter__list category">

            <?php $categories = get_categories(array(
              'type' => 'products',
              'hide_empty' => 1,
              'parent' => 0, 
              'taxonomy' => 'category',
            )); 
            
            foreach($categories as $category) { ?>

            <li class="category__parent" data-term="<?php echo $category->term_id; ?>">
              <?php echo $category->name ?>

              <ul class="filter__sublist">
                <?php $sub_categories = get_categories(array(
                  'type' => 'products',
                  'hide_empty' => 1,
                  'parent' => $category->term_id, 
                  'taxonomy' => 'category',
                )); 
                
                foreach($sub_categories as $sub_category) {
                  
                $sub_category_products = get_posts(array(
                  'numberposts' => -1,
                  'post_type' => 'products',
                  'tax_query' => array(
                    'relation' => 'AND',
                      array(
                        'taxonomy' => 'category',
                        'field' => 'slug',
                        'terms' => $sub_category,
                      ),
                      array(
                        'taxonomy' => 'class',
                        'field' => 'slug',
                        'terms' => $class,
                      ),
                    )
                )); 
                
                if (!empty($sub_category_products)) { ?>

                <li class="category__child" data-term="<?php echo $sub_category->term_id; ?>">
                  <?php echo $sub_category->name ?>
                  <span>(<?php echo count($sub_category_products) ?>)</span>

                  <?php } } ?>
              </ul>

            </li>

            <?php } ?>

          </ul>
        </div>

        <!-- meta filters -->
        <?php foreach($class_filter_params as $key => $param) { ?>

        <div class="filter" data-filter-name="<?php echo $key; ?>">
          <div class="filter__name <?php echo $key ?> active"><?php echo ucfirst($key) ?></div>
          <ul class="filter__list filter__list--meta <?php echo $key ?>">

            <?php foreach($param as $param_value) { ?>
            <li data-term="<?php echo $param_value ?>">
              <?php echo $param_value; if ($key == 'size') echo "\""; ?></li>
            <?php } ?>

          </ul>
        </div>

        <?php } ?>

        <!-- filter color -->
        <div class="filter" data-filter-name="color">
          <div class="filter__name active">Finish</div>
          <ul class="filter__list filter__list--color color">

            <?php $colors = get_categories(array(
              'type' => 'products',
              'hide_empty' => 1,
              'taxonomy' => 'color',
            )); 
            
            foreach($colors as $color) {

              $color_class_products = get_posts(array(
              'numberposts' => -1,
              'post_type' => 'products',
              'tax_query' => array(
                'relation' => 'AND',
                  array(
                    'taxonomy' => 'color',
                    'field' => 'slug',
                    'terms' => $color,
                  ),
                  array(
                    'taxonomy' => 'class',
                    'field' => 'slug',
                    'terms' => $class,
                  ),
                )
            )); 
              
            if (!empty($color_class_products)) { ?>
            <li data-term="<?php echo $color->term_id; ?>" style="background-color: <?php echo $color->name ?>">
            </li>
            <?php } } ?>

          </ul>
        </div>

      </div>

      <div class="products__right item wow fadeInUp animated" data-wow-delay="600ms"
        data-class="<?php echo $class->term_id; ?>">

        <?php while ($class_posts->have_posts()) {
        $class_posts->the_post();
        $product_gallery = get_field('product_gallery'); ?>

        <a href="<?php echo get_the_permalink(); ?>" class="item">
          <div class="item__image" style="background-image: url(<?php echo $product_gallery[0]; ?>)"></div>
          <div class="item__name"><?php echo get_the_title(); ?></div>
        </a>

        <?php } ?>

      </div>

    </div>

  </div>
</section>

<?php get_footer(); ?>