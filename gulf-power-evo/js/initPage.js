var desktop = 1024;
var tablet = 768;
var viewportWidth;
var viewportHeight;
var pageScrollAmt;

$(window).on('load', function () {
  equalHeight();
});

$(document).ready(function(){


  $(window).scroll(function(){
    pageScrollAmt = $(window).scrollTop();
  });

  if($('#tweetsHere').length > 0) {
    getTheTweets();
  }


  // Google Search Bar
  // (<gcse:searchbox-only></gcse:searchbox-only>)
  (function() {
    var cx = '018317755217344636685:1yedcsdnkac';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

  // Google Search Results
  // (<gcse:searchresults-only></gcse:searchresults-only>)
  (function() {
    var cx = '018317755217344636685:1yedcsdnkac';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();

  if($('body').hasClass('search-results')) buildSearchResults();

  // Go to the top unless it's supposed to jump
  if (window.location.href.indexOf('#') == -1) {
    window.scrollTo(0,0);
  } else {
    var hash = window.location.hash;
    setTimeout( function() { $('html,body').animate({ scrollTop: $(hash).offset().top }, 0); }, 500);
  }

  FastClick.attach(document.body);
  // Don't let href="/#/" anchors take
  // the user to another page
  $('[href="/#/"]').click(function (e) {
    e.preventDefault();
  });

  // Collapse and expand the 'Rebates and Programs' list
  // ('View All +' link in the footer)
  $('.view-all-rebates-and-programs-link').unbind('click');
  $('.view-all-rebates-and-programs-link').click(function (e) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('expanded');
    $('.rebates-and-programs-list').slideToggle();
  });

  $('.ash-rules section div > p, .ash-rules section > p').unbind('click');
  $('.ash-rules section div > p, .ash-rules section > p').click(function (e) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('expanded');
    $(e.currentTarget).next('ul').slideToggle(125);
  });

  $('.extra-fields').slideUp();

  initPage();

});
function getTheTweets() {
  var tweetsRequested = false;
  var checkTweetOnScreen = function(){
    if(tweetsRequested==false) {
      var tweetTop = $('#tweetsHere').offset().top;
      var pageBottom = pageScrollAmt+viewportHeight;
      var offset=40;
      if(pageBottom >= tweetTop - offset) {
        tweetsRequested = true;
				// NEED TO CHANGE THIS
        $('#tweetsHere').load('/tweets.aspx');
        initTweets();
      }
    }
  }
  $(window).scroll(function(){
    checkTweetOnScreen();
  });
  $(window).resize(function(){
    checkTweetOnScreen();
  });
  checkTweetOnScreen();


}

function resetViewportVars() {
  viewportWidth = parseInt($(window).width());
  viewportHeight = parseInt($(window).height());
}
function searchFormStuff() {
  $('#searchbox').submit(function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    var formURL = $('#searchbox').attr('action');
    var formData = $(this).serialize();
    // is "gulf power" in the search term?
    var searchTerm = $('#searchbox input[name=q]').val();
    var regEx = /[Gg]ulf *[Pp]ower/g;
    var containsFPC = searchTerm.search(regEx);
    // send the form with added text
    if (containsFPC === -1 && searchTerm !== '') {
      location.href = formURL + '?' + formData + '+gulf+power';
    }
    // send the form as is
    else if (searchTerm !== '') {
      location.href = formURL + '?' + formData;
    }
  });


}

function initPage() {

  searchFormStuff();
  resetViewportVars();
  initToggleNav();
  initFeatures();
  initFaqs();
  videoAspectRatio($('.youtube-vid'));
  recalcAspectRatios();
  initFilterBar();
  linkCheck();
  devStuff();
  initSearchForm();
  setTimeout(function(){
    if( $('.program').length > 0 ) programTiles();
  }, 2000);
  if($('.news-items').length>0) newsItems();
//   if( $('#tweetFeed').length > 0 ) initTweets();
  if( $('table').length > 0 ) generateMobileTables();
  if( $('.story-tile-slide-show').length>0 ) storyTileSlideShow();

  checkCookies();


  // responsive image map plugin
	$('img[usemap]').rwdImageMaps();

  if($('#bill-demo').length > 0) {
  	$('.understanding-your-bill .back-front-toggler, .business-understanding-your-bill .back-front-toggler').click(function(){
  		$('#bill-front-container,#bill-back-container,.view-front-page,.view-back-page').toggleClass('hidden');
  	});
  }

  if($('#dal-tool-container').length>0) designALight();

/*
  $(document).on('click', '.jump-link', function(e){
    e.preventDefault();
    var tID = $(this).attr('href');
    $('html, body').animate({'scrollTop': $(tID).offset().top }, 500);
  });
*/

  $('a').each(function() {
    if ( $(this).attr('rel') == 'external' ) {
      $(this).attr('target', '_blank');
    }

    if( $(this).attr('href').indexOf('customerservice.southernco')>-1 ) {
      $(this).attr('target', '_self');
    }
  });

  $('.modal-trigger').magnificPopup({
    type: 'inline',
    showCloseBtn: true,
    closeOnBgClick: true
  });

  $(window).resize(function(){
    recalcAspectRatios();
    resetViewportVars();
  });


  setTimeout(function(){ equalHeight(); });
}


  var googleSearchIframeName = "results_012252656008891264245:1yedcsdnkac";
  var googleSearchFormName = "searchbox_012252656008891264245:1yedcsdnkac";
  var googleSearchFrameWidth = 940;
  var googleSearchFrameborder = 0;
  var googleSearchDomain = "www.google.com";
  var googleSearchPath = "/cse";


function buildSearchResults() {
  var searchString = getParameterByName('q');
  $('#search-results-container').append('<iframe name="googleSearchFrame" src="https://www.google.com/cse?cx=018317755217344636685%3A1yedcsdnkac&amp;cof=FORID%3A11&amp;q='+searchString+'+gulf+power&amp;ad=n9&amp;num=10&amp;rurl=http%3A%2F%2Fwww.gulfpower.com%2Fsearch-results.cshtml%3Fcx%3D018317755217344636685%253A1yedcsdnkac%26cof%3DFORID%253A11%26q%3D'+searchString+'%2Bgulf%2Bpower&amp;siteurl=http%3A%2F%2Fwww.gulfpower.com%2F" frameborder="0" width="940" height="1860" marginwidth="0" marginheight="0" hspace="0" vspace="0" allowtransparency="true" scrolling="no"></iframe>');

}

function initSearchForm() {
  // if "gulf power" is not in the search term, add it, and send form data
  $('#searchbox').submit(function(event) {
    if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; } var formURL = $('#searchbox').attr('action'); var formData = $(this).serialize();
  // is "gulf power" in the search term?
    var searchTerm = $('#searchbox input[name=q]').val(); var regEx = /[Gg]ulf *[Pp]ower/g; var containsFPC = searchTerm.search(regEx);
  // send the form with added text
    if ( containsFPC === -1 && searchTerm!=='') { location.href = formURL + '?' + formData + '+gulf+power'; }
  // send the form as is
    else if (searchTerm!=='') { location.href = formURL + '?' + formData; }
  });
/*

  if( $('body').hasClass('search-results') ) {

    var searchUrl = 'http://www.google.com/cse' + '?cx=012252656008891264245:1yedcsdnkac&cof=FORID:11&q=wind%20gulf%20power';
// ?cx=018317755217344636685%3A1yedcsdnkac&cof=FORID%3A11&q=wind+gulf+power&ad=n9&num=10&rurl=http%3A%2F%2Fwww.gulfpower.com%2Fsearch-results.cshtml%3Fcx%3D018317755217344636685%253A1yedcsdnkac%26cof%3DFORID%253A11%26q%3Dwind%2Bgulf%2Bpower
    $('#results-container').append('<iframe src="'+searchUrl+'"/>')
  }
*/



/*
http://www.google.com/cse?cx=018317755217344636685%3A1yedcsdnkac&cof=FORID%3A11&q=wind+gulf+power&ad=n9&num=10&rurl=http%3A%2F%2Fwww.gulfpower.com%2Fsearch-results.cshtml%3Fcx%3D018317755217344636685%253A1yedcsdnkac%26cof%3DFORID%253A11%26q%3Dwind%2Bgulf%2Bpower


cx=018317755217344636685:1yedcsdnkac&cof=FORID:11&q=wind%20gulf%20power



http://www.google.com/cse?cx=018317755217344636685:1yedcsdnkac&cof=FORID:11&q=wind%20gulf%20power
*/




}


function storyTileSlideShow() {
  $('.story-tile-slide-show .tiles').each(function(){
    var storySlides = $(this).slick({
      mobileFirst: true,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: desktop,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: tablet,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
    $(this).parents('.story-tile-slide-show').find('.nav-prev').click(function(){
      storySlides.slick('slickPrev');
    });
    $(this).parents('.story-tile-slide-show').find('.nav-next').click(function(){
      storySlides.slick('slickNext');
    });
  });
}





function initTweets() {
  var checkTweets = setInterval(function(){
    if( $('#tweetFeed .tweets').length>0 ) {
      var tweetSlider = $('#tweetFeed .tweets').slick({
        infinite: true,
        mobileFirst: true,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: desktop,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: tablet,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('#tweetFeed .tweet').matchHeight({
        byRow: true
      });

      clearInterval(checkTweets);
    }
  }, 200);

  $(document).on('click', '.tweets-nav.direction-nav .nav-prev', function(e){
    $('#tweetFeed').find('.slick-slider').slick('slickPrev');
  });
  $(document).on('click', '.tweets-nav.direction-nav .nav-next', function(e){
    $('#tweetFeed').find('.slick-slider').slick('slickNext');
  });




}












function newsItems() {
  $('.news-items-inner').slick({
    mobileFirst: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: desktop,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: tablet,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}


function devStuff() {}

function checkCookies() {
  var href = window.location.pathname.split('/');
  if( (href[1] != 'residential' && href[1] != 'business') || window.location.pathname == '/' ) {
    var c;
    if($.cookie('section')!=undefined) {
      c = $.cookie('section');
    } else {
      c = 'residential';
    }
    $('.site-navigation-links a[href*="savings-and-energy"]').attr('href', '/' + c + '/savings-and-energy');
    if(window.location.pathname == "/" ) {
      $('.section-toggle .section-options li a[data-section="'+c+'"]').trigger('click');
    }
  } else {
    $.cookie('section', href[1]);
  }
}
function linkCheck() {
  $('a').each(function(){
    var thisHref = String($(this).attr('href'));
    if(thisHref.indexOf('://') == -1
      && thisHref.indexOf('www.') == -1
      && thisHref.indexOf('../') == -1
      && thisHref.indexOf('/') != 0
      && thisHref.indexOf('#') != 0
      && thisHref.indexOf('tel:') == -1
      && thisHref.indexOf('mailto:') == -1) {
      var thisPath = window.location.pathname;
      var urlBase;
      if($('body').hasClass('landing-page')) {
        urlBase = thisPath;
      } else {
        urlBase = thisPath.substring(0, thisPath.lastIndexOf('/')+1);
      }
      var newPath = String( urlBase + thisHref );
      $(this).attr('href', newPath);
    }
  });
}


function generateMobileTables() {
  var thisMobileTable;
  $('th').addClass('th');
  $('#container table').each(function(){
    var thisWrapper;
    var thisTable = $(this);
    thisTable.after('<table class="mobile-table"></table>');
    thisMobileTable = $(this).next('.mobile-table');
    var numTD = 0;
    var numTR = 0;

    thisTable.find('tr').each(function(trs){
      numTD = $(this).find('td').length;
    });
    if (numTD>2) {
      $(this).addClass('mobile-alt-exists');
      for(n=1; n<=numTD; n++) {
        thisMobileTable.append('<tr></tr>');
        thisTable.find('td:nth-child('+n+'), th:nth-child('+n+')').each(function(){
          var thisClass = $(this).attr('class');
          thisMobileTable.find('tr:nth-child('+n+')').append('<td class="'+thisClass+'"><span>'+$(this).html()+'</span></td>');
        });
      }
      thisMobileTable.wrap('<div class="mobile-table-wrapper"></div>');
      thisMobileTable.clone().appendTo($(this).parent('.mobile-table-wrapper'));
    }
  });
  $('#container .mobile-table-wrapper').each(function(){
    var mtw = $(this);
    mtw.prepend( '<div class="table-headers-wrapper">'+mtw.html()+'</div>' );
    var t = mtw.find('.table-headers-wrapper');

    var calcWrapperSize = function() {
      var tableHeight = parseInt( t.prev('.mobile-table').css('height') );
      var tableWidth = t.next('.mobile-table').find('tbody tr td:first-child').outerWidth();
      t.css({
        'height': tableHeight,
        'width': tableWidth
      });
    };
    calcWrapperSize();
    $(window).resize(function(){
      calcWrapperSize();
    });
    mtw.wrap('<div class="mobile-table-wrapper-wrapper"></div>').parent().append('<span class="scroll-indicator scroll-right-indicator">&gt;</span><span class="scroll-indicator scroll-left-indicator">&lt;</span>');
    thisWrapper = mtw.parents('.mobile-table-wrapper-wrapper');
    thisWrapper.addClass('min-scroll');
    var maxScroll;
    var calcScroll = function(t){
      var classes = 'min-scroll max-scroll';
      var scrollAmt = Math.floor(t.scrollLeft());
      maxScroll = parseInt( thisMobileTable.css('width') ) - parseInt( t.width() );
      if( (maxScroll - scrollAmt) <= 20 ) { thisWrapper.removeClass(classes).addClass('max-scroll'); }
      else if( (scrollAmt) <= 20  ) { thisWrapper.removeClass(classes).addClass('min-scroll'); }
      else {
        thisWrapper.removeClass(classes);
      }
    };
    thisWrapper.find('.scroll-right-indicator').on('touchstart click', function(){
      thisWrapper.find('.mobile-table-wrapper').animate({scrollLeft: 30}, 100);
    });
    thisWrapper.find('.scroll-left-indicator').on('touchstart click', function(){
      thisWrapper.find('.mobile-table-wrapper').animate({scrollLeft: maxScroll - 30}, 100);
    });
    mtw.scroll(function() {
      calcScroll( mtw );
    });
    $(window).scroll(function(){
      calcScroll( mtw );
      calcWrapperSize();
    });
  });
}

function initDirectionNav() {
  $('.mobile-direction-nav:not(.init), .direction-nav:not(.init)').each(function(){
    var nav = $(this);
    nav.find('.nav-prev').click(function(){
      nav.siblings('.slick-slider').slick('slickPrev');
    });
    nav.find('.nav-next').click(function(){
      nav.siblings('.slick-slider').slick('slickNext');
    });
    $(this).addClass('init');
  });
}
function safetyTips() {
//   temp
  var safetyTips = $('.home .safety-tips-container').slick({
    infinite: true,
    mobileFirst: true,
    arrows: false,
    dots: false
  });
}
function programTiles() {

  var mobileProgInit = false;
  setTimeout(function(){
    $('.business .mobile-direction-nav .view-all-link, .business-related-content .view-all-link').attr('href', '/business/savings-and-energy/rebates-and-programs');
    $('.program').each(function(){
      var numLinks = $(this).find('a').length;
      if(numLinks==1) {
        $(this).addClass('single-link');
      }
    });
    $(document).on('click', '.program.single-link', function(){
      window.open( $(this).find('a').attr('href'), "_self" );
    });

    var initMobileProgs = function() {
      if(parseInt(window.innerWidth)<tablet && mobileProgInit == false ) {
        mobileProgInit = true;
        var mobilePrograms = $('body:not(".rebates-and-programs-home") .programs-container').slick({
          infinite: true,
          mobileFirst: true,
          dots: false,
          prevArrow: false,
          nextArrow: false,
          responsive: [
            {
              slidesToShow: 1,
              breakpoint: tablet,
              settings: "unslick"
            }
          ]
        });
      } else {
        mobileProgInit = false;
      }

      initDirectionNav();
    }

    initMobileProgs();
    $(window).resize(function(){
      if(window.innerWidth>tablet) mobileProgInit = false; 
      if(mobileProgInit==false) initMobileProgs();
    });
    equalHeight();
    if( $('.mobile-view-all').length > 0 ) {
      $('.mobile-view-all').click(function(){
        $(this).fadeOut().parents('.programs-and-rebates-section').addClass('view-all');
      });
    }

  }, 2000);


}

function initFilterBar() {
  $('.filter-bar input[type="checkbox"]').each(function(){
    $(this).change(function(){
      if( $(this).prop('checked')==true ) {
        $('body').addClass($(this).attr('data-filter-type'));
      } else {
        $('body').removeClass($(this).attr('data-filter-type'));
      }
    });
    $(this).trigger('change');
  });
}

function videoAspectRatio(t) {
  t.each(function() {
    var thisWidth = $(this).attr('width');
    var thisHeight = $(this).attr('height');
    var ar = thisHeight / thisWidth;

    $(this).addClass('aspect-ratio').attr('data-aspect-ratio', ar);
  });
}

function recalcAspectRatios() {
  $(".aspect-ratio").each(function() {
    var t = $(this);
    var ratio = t.data('aspect-ratio');
    var thisWidth = parseInt(t.css('width'));
    var thisHeight = thisWidth * ratio;
    t.css('height', thisHeight);
  });
}

function initFeatures() {
  $('.features-container .introduction').matchHeight({
    byRow: true
  });

  $('.features-container').each(function(){
    $(this).find('.introduction').each(function(i){
      if(i/2 == Math.ceil(i/2)) {
        $(this).addClass('odd');
      } else {
        $(this).addClass('even');
        $(this).after('<section class="drawer-container"></section>');

        var appendHtml = "";

        if($(this).prev('.introduction').find('.feature-description').length>0) {
          appendHtml += '<div class="feature-description odd appended">' + $(this).prev('.introduction').find('.feature-description').html() + '</div>';
        } if ($(this).find('.feature-description').length>0) {
          appendHtml += '<div class="feature-description even appended">' + $(this).find('.feature-description').html() + '</div>';
        }
        $(this).next('.drawer-container').append( appendHtml );
      }
    });
  });

  $('.features-container .expansion-link').click(function(e){
    e.preventDefault();
    $('.features-container .drawer-container').removeClass('odd even');
    if( $(this).parents('.introduction').hasClass('open') ) {

      // close the feature
      $('.features-container .introduction').removeClass('open');
      $('html, body').animate({scrollTop: $(this).parents('.features').offset().top });
    }
    else {

      // open the feature
      $('.features-container .introduction').removeClass('open');
      $(this).parents('.introduction').addClass('open');
      var targetDrawer;
      if ( $(this).parents('.introduction').hasClass('odd') ) {
        targetDrawer = $(this).parents('.introduction').next('.introduction').next('.drawer-container');
        targetDrawer.removeClass('odd even').addClass('odd');
      }
      else if( $(this).parents('.introduction').hasClass('even') ) {
        targetDrawer = $(this).parents('.introduction').next('.drawer-container');
        targetDrawer.removeClass('odd even').addClass('even');
      }
      $('html, body').animate({'scrollTop': targetDrawer.offset().top });
    }
    $(document).on('click', '.feature-close-button', function(e) {
      var targetIntro = $(e.currentTarget).parents('.introduction');
/*
      targetIntro.each(function(){
        $('html, body').animate({'scrollTop': $(this).offset().top });
      });
*/
      $('.features-container .drawer-container').removeClass('odd even');
      $('.features-container .introduction.open').removeClass('open');
      $('html, body').animate({scrollTop: $(this).parents('.features').offset().top });
    });
  });

}


function equalHeight() {

  $('.programs-and-rebates-section .program').matchHeight({
      byRow: true
  });
  $('.story-tiles.layout-1 .story-tile, .story-tiles.layout-2 .story-tile').matchHeight({
      byRow: true
  });
  $('.story-tiles.layout-3 .column').matchHeight({
      byRow: true
  });
  $('.content-decorative-image-combo .text-section, .content-decorative-image-combo .image-section').matchHeight({
      // byRow: true
  });
  $('#design-a-light-products .product').matchHeight({
      byRow: true
  });
  $('.story-tile-slide-show .story-tile').matchHeight({
      byRow: true
  });

  setInterval(function(){
//     $(window).trigger('resize');
  }, 1000);

}
function initFaqs() {
  // FAQs
  $('.faqs h3+div, .faqs h3+section, .read-more-link+div, .read-more-link+section').hide();
  $('.faqs h3:not(.init), .read-more-link:not(.init)').click(function(e) {
    $(e.currentTarget).toggleClass('opened');
    $(e.currentTarget).next('div').slideToggle(125);
    $(e.currentTarget).next('section').slideToggle(125);
    recalcAspectRatios();
  });
  $('.faqs h3, .read-more-link').addClass('init');
}




function initToggleNav() {
  var sectionClasses = '';
  var found = false;
  var relUrl = $('body').attr('data-related-cross-section-url');

//   reinit everything (classes and hrefs)
  $('.section-toggle').removeClass('open');
  $('li.current').removeClass('current');
  $('.section-options a.residential').attr('href', '/residential/savings-and-energy');
  $('.section-options a.business').attr('href', '/business/savings-and-energy');
  $('.section-target:not(.init)').click(function(){
    $(this).parent('.section-toggle').toggleClass('open');
  }).addClass('init');

//   home and non-home pages
  $('.section-options a').click(function(e){
    $.cookie('section', $(this).attr('data-section'));

//     prevent link functionality and just change classes if home page
    if($('body').hasClass('home')) {
      e.preventDefault();
      $('body').removeClass(sectionClasses).addClass('section-' + $(this).attr('data-section'));
      $('.section-toggle .active-section').text( $(this).text() );
      $('.savings-and-energy-link').attr('href', $(this).attr('href') );
      $('.section-toggle  ').removeClass('open');
    }
  });

//   Home page: define the section classes to be removed when switching
  $('body.home .section-toggle .section-options li a').each(function(){
    sectionClasses+=' section-' + $(this).attr('data-section');
  });

//   Non Home pages: set the relative alt section url
  if(!$('body').hasClass('home')) {
    if(relUrl.indexOf('residential')>-1) {
      $('.section-options a.residential').attr('href', relUrl);
      $('.section-options a.business').parent('li').addClass('current');
    } else if (relUrl.indexOf('business')>-1) {
      $('.section-options a.business').attr('href', relUrl);
      $('.section-options a.residential').parent('li').addClass('current');
    }
    $('.section-toggle .active-section').text( $('li.current').text() );
  }

//   Close when clicking outside of the thing
/*
  $(window).click(function() {
    $('.section-toggle').removeClass('open');
  });

  $('.section-toggle').click(function(event){
      event.stopPropagation();
  });
*/


}






function designALight(){

  var fixturesQuantity = parseInt( $('#dal-tool-container .flexslider.fixtures .slides li').length );
  var polesQuantity = parseInt( $('#dal-tool-container .flexslider.poles .slides li').length );

  var fixturesDescriptions = $('#fixtures-descriptions.descriptions-container > .fixtures-list').slick({
    mobileFirst: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: desktop,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: tablet,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  var polesDescriptions = $('#poles-descriptions.descriptions-container > .poles-list').slick({
    mobileFirst: true,
    arrows: true,
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: desktop,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: tablet,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('#fixtures-descriptions .nav-prev').click(function(){
    fixturesDescriptions.slick('slickPrev');
  });
  $('#fixtures-descriptions .nav-next').click(function(){
    fixturesDescriptions.slick('slickNext');
  });


  $('#poles-descriptions .nav-prev').click(function(){
    polesDescriptions.slick('slickPrev');
  });
  $('#poles-descriptions .nav-next').click(function(){
    polesDescriptions.slick('slickNext');
  });


	$('#scene-switch-buttons a, #dat-tool-container a[href="#"], #design-a-light-content a[href="#"]').click(function(event){ event.preventDefault(); });
	var savedItemCount = 0;
	var savedItemIndex = 0;

	var IEfix = $("html.lt-ie10").length ? 1 : 0;
	var currentFixture = 0 + IEfix;
	var currentPole = 0 + IEfix;
	var fixtureSlider = $('#dat-tool-container .flexslider.fixtures');
	var poleSlider = $('#dat-tool-container .flexslider.poles');
	var updateProds = true;

	$('.descriptions-container .product').each(function(){
		var thisName = $(this).find('.product-name').text();
		var formattedName = thisName.replace(/\W/g, '');
		$(this).attr('id', formattedName);
	});
	$('.fav-add').each(function(){
		var thisName = $(this).attr('data-product-name');
		var formattedName = 'fav-add-' + thisName.replace(/\W/g, '');
		$(this).attr('id', formattedName);
		$(this).siblings('label').attr('for', formattedName);
	});

	$('#dal-tool-container .flexslider').each(function(){
		$(this).flexslider({
			animation: "slide",
			slideshow: false,
			after: function(slider) {
				var thisSlider = slider.parents('.carousel').attr('data-product-type');
				if( updateProds == true ) {
  				updateContentProduct(thisSlider, slider.currentSlide);
				}
				updateProds = true;
			},
			start: function(slider){
				$('body').removeClass('loading');
			}
		});
	});

	$('.carousel-navigation a').click(function(event){
		event.preventDefault();
		var direction = $(this).attr('data-direction');
		var productType = $(this).parents('.carousel').attr('data-product-type');
		$(this).parent('.carousel-navigation').next('.flexslider').find('.flex-'+direction).trigger('click');
	});


	$('.descriptions-container .product').click(function(event){
		$(this).siblings('.product').removeClass('active-product');

		$(this).addClass('active-product');
		var productType = $(this).attr('data-product-type');
		var index = parseInt($(this).attr('data-index')) ;
		updateProds = false;
		updateProductSlider(productType, index);
	});

	var updateContentProduct = function(productType, index) {
  	index+=1;
  	if(productType == 'fixtures') {
      if( index >= fixturesQuantity) {
      	index=index-fixturesQuantity;
      }
      else if ( index < 0) {
      	index=index+fixturesQuantity;
      }
  	}

  	else if(productType == 'poles') {
      if( index >= polesQuantity) {
      	index=index-polesQuantity;
      }
      else if ( index < 0) {
      	index=index+polesQuantity;
      }
  	}

		$('#' + productType + '-descriptions').find('.product').removeClass('active-product');
		$('#' + productType + '-descriptions').find('.product[data-slick-index="'+parseInt(index-IEfix)+'"]').addClass('active-product');
    $('#' + productType + '-descriptions .slick-slider').slick('slickGoTo', parseInt(index) );

	}

	var updateProductSlider = function(productType, index) {
		var thisSlider = $('.carousel.' + productType).find('.flexslider').data('flexslider');
		thisSlider.flexAnimate(index+IEfix-1);
	}


  $('.add-remove .add-item').click(function(e){
    if(!$(this).siblings('input').hasClass('checked')) {
      $(this).siblings('input').addClass('checked').prop('checked', true).trigger('change');
    }
  });
  $('.add-remove .remove-item').click(function(e){
    if($(this).siblings('input').hasClass('checked')) {
      $(this).siblings('input').removeClass('checked').prop('checked', false).trigger('change');
    }
  });
	$('.fav-add').change(function(){
  	if($(this).prop('checked')==true) {
    	$(this).addClass('checked').parent().addClass('checked').parents('.product').addClass('checked');
  	} else {
    	$(this).removeClass('checked').parent().removeClass('checked').parents('.product').removeClass('checked');
  	}
		var thisFav = $(this);
		updateSavedItems(thisFav);
		updateForm();
		$(window).trigger('resize');
	});
	$('#update-items').click(function(){
		removeSavedItems();
	});
	$('#clear-all').click(function(){
		removeAllSavedItems();
	});
	$('.scene-switcher').click(function(event){
		event.preventDefault();
		updateBG($(this));
	});


	$(document).on('change', '.remove-this-item', function(){
    var removeID = $(this).parents('.saved-item').attr('id');
    removeID = removeID.replace('saved-item-', '');
    $("#" + removeID).find('.remove-item').trigger('click');
  	removeSavedItems();
	});
	$(document).on('click', '.remove-this-item-link', function(){
  	$(this).siblings('input').addClass('remove-me').trigger('change');
	});

	var updateSavedItems = function(thisFav){
		var thisType = thisFav.parents('.product').attr('data-product-type');
		var relatedSavedItem = thisFav.attr('id').replace('fav-add', 'saved-item');
		var relatedDescription = $('#'+thisFav.attr('id').replace('fav-add-', ''));
		var relatedDescriptionId = '#'+thisFav.attr('id').replace('fav-add-', '');
		if(thisFav.hasClass("checked")){
			var thisImage = relatedDescription.find('.product-image').attr('src');
			var thisName = relatedDescription.find('.product-name').text();
			$('#saved-items .items').append('<div id="'+relatedSavedItem+'" class="saved-item ' + thisType + '">\
				<div class="product-image-container"><img class="saved-item-image" src="'+thisImage+'"></div>\
				<div class="product-info-container"><h3 class="saved-item-name">'+thisName+'</h3>\
				<div class="remove"><input type="checkbox" class="remove-this-item" data-related-description="'+relatedDescriptionId+'" id="inpt_'+relatedDescriptionId.substr(1)+'"/><a class="remove-this-item-link" href="#" for="inpt_'+relatedDescriptionId.substr(1)+'">- Remove From Favorites</a></div><div class="clearfix"></div>\
			</div></div>');
		}
		else {
			$('#saved-items #'+relatedSavedItem).remove();
		}
    $('#design-a-light-products .saved-item').matchHeight({
        byRow: true
    });

		updateForm();
    if($('.saved-item').length <= 0) {
      $('.favs-empty-message').fadeIn();
    } else {
      $('.favs-empty-message').fadeOut();
    }

	};
	var updateForm = function(){
		var favItemString = "Inquiring about: ";
		$('.fav-add.checked').each(function(i){
			var numFavs = $('.fav-add.checked').length;
			var comma = "";
			if(i>0){
				comma = ", ";
			}
			favItemString += comma + $(this).attr('data-product-name');
		});
		$('#products-inquiring-about').attr('value', favItemString).attr('data-favItemString', favItemString).triggerHandler('input#products-inquiring-about');		
	};

	var removeSavedItems = function(){
		$('.remove-this-item').each(function(){
			if($(this).hasClass('remove-me')){
				var relatedDescription = $($(this).attr('data-related-description'));
				relatedDescription.find('.fav-add').prop("checked", "");
				$(this).parents('.saved-item').remove();
			}
		});
		updateForm();
	};
	var removeAllSavedItems = function(){
		$('.remove-this-item').each(function(){
			var relatedDescription = $($(this).attr('data-related-description'));
			relatedDescription.find('.fav-add').removeClass('checked').prop("checked", "");
			$(this).parents('.saved-item').remove();
		});
		updateForm();
	};
	var updateBG = function(t) {
		var allRels;
		$('.scene-switcher').each(function(){
			allRels += $(this).attr('rel') + ' ';
		});
		$('body').removeClass(allRels);
		$('body').addClass((t).attr('rel'));
	}

	updateProductSlider('fixture', fixturesQuantity);
	updateProductSlider('pole', polesQuantity);


}
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
