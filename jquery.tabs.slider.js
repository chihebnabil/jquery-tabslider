(function ($) {
  $.fn.tabSlider = function () {
    return this.each(function () {
      var el = $(this);
      var tabs_count = el.find(".tab").length;
      var tabs_index = 1;

      $prevA = el.find(".prev-link i");
      $nextA = el.find(".next-link i");

      $nextA.on("click", function (e) {
        e.preventDefault();
        tabs_index++;
        var $target = $(e.target);
        var $current = el.find(".tab.active");

        if ($current.index() > tabs_count) {
          $current.removeClass("active");

          var $next = el.find(".tab").first();
          tabs_index = 1;
          $next.addClass("active");
        }
        if ($current.index() > 0) {
          var $next = $current.next();
          $current.removeClass("active");
          $next.addClass("active");
        }
      });

      $prevA.on("click", function (e) {
        e.preventDefault();
        tabs_index--;
        console.log(tabs_index);
        var $target = $(e.target);
        var $current = el.find(".tab.active");

        if (tabs_index <= 1) {
          $current.removeClass("active");
          var $prev = el.find(".tab").last();
          $prev.addClass("active");
        }

        if ($current.index() <= 0) {
          var $prev = $current.prev();
          $current.removeClass("active");
          $prev.addClass("active");
        }
      });
    });
  };
})(jQuery);
