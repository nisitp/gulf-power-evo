
$(document).ready(function () {



  // Product Drawers
  $('.product .expansion-link').click(function (e) {
    $(e.currentTarget).parents('.product').find('.specs').slideToggle();
    $(e.currentTarget).toggleClass('expanded');
  });

  // Table at the bottom
  var tableOffset = 0;
  $('.table-section .slide-link').click(function (e) {
    // Remember how many columns are behind and coming up
    var hasPreviousColumn = ($('.table-section .currently-visible').prev('td').length == 0) ? false : true;
    var hasAnotherColumn = ($('.table-section .currently-visible').next('td').length == 0) ? false : true;

    if ($(e.currentTarget).hasClass('backward')) {
      // Go backwards
      if (hasPreviousColumn) {
        tableOffset -= $('.table-section .currently-visible').prev('td').width();

        // Remove the '.currently-visible' class unless there
        // are no more columns left to transfer the class to
        $('.table-section .currently-visible').prev('td').addClass('currently-visible');
        $('.table-section .currently-visible:last').removeClass('currently-visible');
      }
    } else if ($(e.currentTarget).hasClass('forward')) {
      // Go forward
      if (hasAnotherColumn) {
        tableOffset += $('.table-section .currently-visible').width();

        // Remove the '.currently-visible' class unless there
        // are no more columns left to transfer the class to
        $('.table-section .currently-visible').next('td').addClass('currently-visible');
        $('.table-section .currently-visible:first').removeClass('currently-visible');
      }
    }

    // Check how many columns are behind and coming up again
    var hasPreviousColumn = ($('.table-section .currently-visible').prev('td').length == 0) ? false : true;
    var hasAnotherColumn = ($('.table-section .currently-visible').next('td').length == 0) ? false : true;

    // Remove the indication that there are no
    // more columns if there are more columns
    if (hasPreviousColumn) {
      $('.backward').removeClass('out-of-columns');
    } else {
      // There are no more columns to go to
      $(e.currentTarget).addClass('out-of-columns');
    }

    // Remove the indication that there are no
    // more columns if there are more columns
    if (hasAnotherColumn) {
      $('.forward').removeClass('out-of-columns');
    } else {
      // There are no more columns to go to
      $(e.currentTarget).addClass('out-of-columns');
    }

    // Update the offset
    $('.table-section table').css('right', tableOffset);
  });
});
