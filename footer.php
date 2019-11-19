<footer class="footer" id="footer">
  <div class="footer__content">

    <ul class="social wow fadeInDown animated" data-wow-delay="300ms">
      <?php $list = get_field('option_social', 'option');
      foreach($list as $item) { ?>

      <li><a href="<?php $item['link']; ?>"><img src="<?php echo $item['icon']; ?>" alt="fb"></a></li>

      <?php } ?>

    </ul>

    <div class="footer__text">
      © 2016 INTERSPACE. All rights reserved.
    </div>
  </div>
</footer>

<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>

<?php wp_footer(); ?>
</body>

</html>