<?php get_header(); ?>
<?php $project_gallery = get_field('project_gallery'); 
$hero_bg = $project_gallery[0] ? $project_gallery[0] : get_theme_file_uri('/img/project.jpg'); ?>
<div class="hero" style="background-image: url(<?php echo $hero_bg; ?>)">
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <h1 class="title wow fadeInDown animated"><?php echo get_the_title(); ?></h1>
  </div>
</div>

<main class="project">

  <section class="section section--gray project__desc" id="project">
    <div class="container">
      <div class="row">
        <div class="name item wow fadeInLeft animated" data-wow-delay="300ms"><?php echo get_the_title(); ?></div>
        <div class="desc item wow fadeInLeft animated" data-wow-delay="600ms"><?php echo get_the_content(); ?></div>
      </div>
    </div>
  </section>

  <section class="project__gallery">
    <div class="top">
      <div class="left top__image wow fadeInLeft animated" data-wow-delay="300ms"
        style="background-image: url(<?php echo $project_gallery[0]; ?>)"></div>
      <div class="right top__image wow fadeInUp animated" data-wow-delay="600ms"
        style="background-image: url(<?php echo $project_gallery[1]; ?>)"></div>
    </div>
    <div class="bottom wow fadeInUp animated" data-wow-delay="400ms"
      style="background-image: url(<?php echo $project_gallery[2]; ?>)"></div>
  </section>

  <section class="section section--gray project__details">
    <div class="container">
      <div class="row">

        <?php $project_params = get_field('project_params'); ?>
        <div class="item wow fadeInLeft animated" data-wow-delay="300ms">

          <?php $list_left = $project_params['left'];
          foreach($list_left as $item) { ?>

          <div class="item__row">
            <div class="left"><?php echo $item['param']; ?></div>
            <div class="right"><?php echo $item['value']; ?></div>
          </div>

          <?php } ?>

        </div>

        <div class="item wow fadeInLeft animated" data-wow-delay="600ms">
          <?php $list_right = $project_params['right'];
          foreach($list_right as $item) { ?>

          <div class="item__row">
            <div class="left"><?php echo $item['param']; ?></div>
            <div class="right"><?php echo $item['value']; ?></div>
          </div>

          <?php } ?>
        </div>

      </div>
    </div>

  </section>


  <div class="project__button">
    <a class="btn wow fadeInUp animated" data-wow-delay="400ms" href="<?php echo site_url() . '#projects' ?>">BACK TO
      ALL PROJECTS</a>
  </div>

</main>

<?php get_footer(); ?>