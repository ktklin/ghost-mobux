/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
     moment.locale('de');

    $('.post-date').each(function (i, date) {
      var $date = $(date);

      $date.html(
        moment($date.attr('datetime'))
          .tz('Europe/Berlin')
          .format('LL')
       );
    });
    $('.secondary-nav').scrollFix();

    });


})(jQuery);

