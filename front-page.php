<?php get_header(); ?>

<?php $banner_bg = get_field('banner_bg'); 
$banner_bg_url = (wp_is_mobile()) ? $banner_bg['sizes']['medium_large'] : $banner_bg['url']; ?>

<div class="hero" style="background-image: url(<?php echo $banner_bg_url; ?>)">
  <div class="container hero__content">
    <h1 class="title wow fadeInDown animated"><?php echo get_field('banner_title'); ?></span></h1>
    <a href="#about" class="btn learn-more wow fadeInUp animated" data-wow-delay="400ms">LEARN MORE</a>
  </div>
</div>

<?php $about = get_field('home_about'); ?>
<section class="about section section--gray" id="about">
  <div class="container">
    <div class="row about__items">

      <?php $about_left = $about['left']; ?>
      <div class="item wow fadeInLeft animated" data-wow-delay="300ms">
        <h3 class="headline"><?php echo $about_left['title']; ?></h3>
        <div class="desc text"><?php echo $about_left['text']; ?></div>
      </div>

      <?php $about_right = $about['right']; ?>
      <div class="item wow fadeInLeft animated" data-wow-delay="600ms">
        <h3 class="headline"><?php echo $about_right['title']; ?></h3>
        <div class="desc text"><?php echo $about_right['text']; ?></div>
      </div>

    </div>
  </div>
</section>

<section class="section home-product" id="home-product">
  <div class="container">

    <h3 class="headline headline--center wow fadeInDown animated">OUR PRODUCT</h3>

    <div class="row home-product__items">

      <?php $classes = get_field('home_product'); $delay = 300;
      
      foreach($classes as $class) { $class_obj = $class['class']; ?>

      <a href="<?php echo get_category_link($class_obj) ?>" class="item wow fadeInUp animated"
        data-wow-delay="<?php echo $delay; ?>ms">

        <div class="image-wrapper">
          <div class="image"
            style="background-image: url(<?php echo get_field('class_featured-image', $class_obj); ?>)">
          </div>
          <div class="image-bg"></div>
        </div>

        <div class="name"><?php echo $class_obj->name; ?></div>
        <div class="desc text"><?php echo $class_obj->description; ?></div>
      </a>

      <?php $delay += 300; } ?>

    </div>
  </div>
</section>

<section class="section projects" id="projects">
  <div class="container">
    <h3 class="headline headline--center wow fadeInDown animated">PROJECTS</h3>

    <?php $projects = new WP_Query(array(
      'post_type' => 'projects',
      'post_per_page' => -1,
    )); ?>

    <div class="projects__buttons wow fadeInUp animated" data-wow-delay="200ms">
      <button class="active" data-filter=".grid-item">ALL PROJECTS</button>
      <button data-filter=".residential">RESIDENTIAL</button>
      <button data-filter=".commercial">COMMERCIAL</button>
      <button data-filter=".industrial">INDUSTRIAL</button>
    </div>
  </div>

  <div class="container container--no-pd container--fluid">
    <div class="grid wow fadeInLeft animated" data-wow-delay="300ms">

      <?php while ($projects->have_posts()) {
        $projects->the_post();
        $project_cat = get_field('project_category'); ?>

      <div class="grid-item <?php echo $project_cat; ?>"
        style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>)"><a
          href="<?php echo get_the_permalink(); ?>"><span><?php echo get_the_title(); ?></span></a></div>

      <?php } wp_reset_postdata(); ?>

    </div>
  </div>
</section>

<section class="section team" id="team">
  <div class="container">
    <h3 class="headline headline--center wow fadeInDown animated">Meet our team</h3>

    <div class="row team__items">

      <?php $list = get_field('home_team'); $delay = 200;
      foreach($list as $item) { ?>

      <div class="item wow fadeInUp animated" data-wow-delay="<?php echo $delay; ?>ms">
        <div class="image" style="background-image: url(<?php echo $item['photo']; ?>)">
        </div>
        <div class="name"><?php echo $item['name']; ?></div>
        <div class="position text"><?php echo $item['position']; ?></div>
      </div>

      <?php $delay += 200; } ?>

    </div>
  </div>
</section>

<?php $ego = get_field('home_advantages'); ?>
<section class="ego section" style="background-image: url(<?php echo $ego['image'];  ?>)">
  <div class="container container--no-pd">

    <div class="ego__content">
      <h3 class="headline headline--white wow fadeInDown animated"><?php echo $ego['title']; ?></h3>
      <div class=" ego__items">

        <?php $list = $ego['content']; $delay = 200;
        foreach($list as $item) { ?>

        <div class="item wow fadeInUp animated" data-wow-delay="<?php echo $delay; ?>ms">
          <div class="name"><?php echo $item['title']; ?></div>
          <div class="desc"><?php echo $item['text']; ?></div>
        </div>

        <?php $delay += 200; } ?>

      </div>
    </div>

  </div>
</section>

<section class="section contact section--gray" id="contact">
  <div class="container contact__content">

    <div class="contact__form">
      <div class="headline headline--center wow fadeInDown animated">CONTACT US</div>
      <form id="main-form" class="form wow fadeInUp animated" data-wow-delay="300ms">
        <div class="form__row">
          <input type="text" name="name" placeholder="Name">
          <input type="email" name="email" placeholder="Email">
        </div>
        <div class="form__row">
          <textarea name="message" placeholder="Message"></textarea>
        </div>

        <button type="submit" class="btn">SEND MESSAGE</button>
      </form>
    </div>

    <div class="contact__contacts">

      <?php $contacts = get_field('home_contacts'); $delay = 200;
      foreach($contacts as $item) { ?>

      <div class="item wow fadeInUp animated" data-wow-delay="<?php echo $delay; ?>ms">
        <div class="name"><?php echo $item['title']; ?></div>
        <div class="content"><?php echo $item['content']; ?></div>
      </div>

      <?php $delay += 200; } ?>

    </div>

  </div>
</section>

<?php get_footer(); ?>