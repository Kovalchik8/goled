<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>GoLed</title>

  <!-- swiper css -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">

  <?php wp_head(); ?>
</head>

<body class="<?php if (is_front_page()) echo 'front-page'; ?>">

  <div class="body__loader visible">
    <div class="loader visible"></div>
  </div>

  <header class="header" id="header">
    <div class="container">
      <nav class="navbar">
        <a href="<?php echo site_url(); ?>" class="logo">
          <img src="<?php echo get_theme_file_uri('/img/header-logo.svg') ?>" alt="logo">
        </a>
        <ul class="navbar__nav">
          <?php $url = (!is_front_page()) ? site_url() . '/' : ''; ?>
          <li><a href="<?php echo $url; ?>#about">WHO WE ARE</a></li>
          <li><a href="<?php echo $url; ?>#home-product">PRODUCTS</a></li>
          <li><a href="<?php echo $url; ?>#projects">PROJECTS</a></li>
          <li><a href="<?php echo $url; ?>#team">TEAM</a></li>
          <li><a href="<?php echo $url; ?>#contact">CONTACT</a></li>
        </ul>
        <div class="mobile-menu">
          <img src="<?php echo get_theme_file_uri('/img/menu.svg') ?>" alt="menu">
        </div>
      </nav>
    </div>
  </header>