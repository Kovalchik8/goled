<?php get_header(); the_post(); ?>

<div class="hero hero--product"
  style="background-image: url(<?php echo get_theme_file_uri('/img/single-product.jpg') ?>)">
  <div class="container">
    <h1 class="title wow fadeInDown animated"><?php echo get_the_title(); ?></h1>
  </div>
</div>

<section class="section product">

  <div class="container">
    <div class="row">

      <div class="product__gallery item wow fadeInLeft animated" data-wow-delay="400ms">

        <?php $gallery = get_field('product_gallery'); ?>

        <div class="swiper-container gallery-top">
          <div class="swiper-wrapper">

            <?php foreach($gallery as $image) { ?>
            <div class="swiper-slide" style="background-image:url(<?php echo $image; ?>)"></div>
            <?php } ?>

          </div>
        </div>

        <div class="swiper-container gallery-thumbs">
          <div class="swiper-wrapper">
            <?php foreach($gallery as $image) { ?>
            <div class="swiper-slide" style="background-image:url(<?php echo $image; ?>)"></div>
            <?php } ?>
          </div>
        </div>

      </div>

      <div class="product__desc item">
        <h3 class="product__title wow fadeInUp animated" data-wow-delay="600ms"><?php echo get_the_title(); ?></h3>
        <div class="content wow fadeInUp animated" data-wow-delay="800ms">
          <div class="content__table">

            <?php $params = get_field('product_params');
            $params_array = ['size', 'physical', 'watts', 'CCT', 'CRI'];
            foreach($params_array as $param) {
                
            if (!empty($params[strtolower($param)])) { ?>

            <div class="table-row">
              <div class="left"><?php echo ucfirst($param); ?></div>
              <div class="right"><?php echo $params[strtolower($param)]; ?></div>
            </div>

            <?php } } ?>

            <div class="table-row">
              <div class="left">Categories</div>

              <?php $product_categories = get_the_terms(get_the_ID(), 'category'); $string_categories = '';
                foreach($product_categories as $cat) {
                  if ($cat->parent != 0) {
                    $string_categories .= $cat->name; 
                    $string_categories .= ', '; 
                  }
                } ?>

              <div class="right"><?php echo rtrim($string_categories, ', '); ?></div>
            </div>

          </div>

          <?php echo the_content(); ?>

          <?php $download_file = get_field('product_specification'); 
          if(!empty($download_file)) { ?>
          <a href="<?php echo $download_file; ?>" class="btn" download>SPECIFICATION DOWNLOAD</a>
          <?php } ?>

        </div>
      </div>

    </div>
  </div>
</section>

<section class="product-tabs">
  <div class="tabs">
    <div class="container">
      <ul class="wow fadeInUp animated" data-wow-delay="300ms">
        <li data-target="#tab-1" class="active">DESCRIPTION</li>
        <li data-target="#tab-2">TECH SPECS</li>
        <li data-target="#tab-3">DOCUMENTS</li>
        <li data-target="#tab-4">MEDIA</li>
      </ul>
    </div>
  </div>

  <div class="content">
    <div class="container">

      <div class="tab-content active visible" id="tab-1">
        <div class="tab-content__left">
          <div class="content__title">DESCRIPTION</div>
          <div class="content__text"><?php echo get_field('product_tab_desc'); ?></div>
        </div>
      </div>

      <div class="tab-content" id="tab-2">
        <div class="tab-content__left">
          <div class="content__title">TECH SPECS</div>

          <div class="details">

            <?php $specs = get_field('product_tab_specs');
            foreach($specs as $row) { ?>

            <div class="details__row">
              <div class="left"><?php echo $row['parameter']; ?></div>
              <div class="right"><?php echo $row['value']; ?></div>
            </div>

            <?php } ?>

          </div>
        </div>

      </div>

      <div class="tab-content" id="tab-3">
        <div class="tab-content__left">
          <div class="content__title">Documents</div>
          <?php if(!empty($download_file)) { ?>
          <a href="<?php echo $download_file; ?>" class="btn" download>DOWNLOAD</a>
          <?php } ?>
        </div>
      </div>

      <div class="tab-content" id="tab-4">
        <div class="tab-content__left">
          <div class="content__title">Media</div>
          <?php echo get_field('product_tab_media'); ?>
        </div>

      </div>

    </div>
  </div>

</section>

<?php get_footer(); ?>