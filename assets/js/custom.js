(function ($) {

// prettyPhoto
  jQuery(document).ready(function () {
    jQuery('a[data-gal]').each(function () {
      jQuery(this).attr('rel', jQuery(this).data('gal'));
    });
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
      animationSpeed: 'slow',
      theme: 'facebook',
      slideshow: false,
      overlay_gallery: false,
      social_tools: false,
      deeplinking: false,
	  hook: "data-rel"
    });
  });


})(jQuery);