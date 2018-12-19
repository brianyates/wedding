// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
$(document).on('turbolinks:load', function(){
	function closeMenu() {
		$('#menu').animate({
        'marginLeft' : "-=280px" 
        });
		$('#menu-overlay').fadeOut(300);
	};
    $('#menu-btn').click(function() {
        $('#menu').animate({
        'marginLeft' : "+=280px" 
        });
		$('#menu-overlay').fadeIn(300);
    });
    $('#close-menu').click(function() {
		closeMenu();
    });
    $('#menu-overlay').click(function() {
		closeMenu();
    });
	
	$(".main-menu").on('click', function(e) {
	if (this.hash !== "") {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 900, function(){
		  window.location.hash = hash;
		  });
		}
		closeMenu();
	});
});
$(document).on('turbolinks:load', function(){
	function navScroll (){
		var pos = $(window).scrollTop();
		if (pos > 100) {$('#nav.home-nav').addClass("scrolled");}
		else {$('#nav.home-nav').removeClass("scrolled");}
	};
	navScroll();
	$(window).scroll(function(){
		navScroll();
	});
});
$(document).on('turbolinks:load', function(){
	$(window).scroll(function() {
	  $(".front-img").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 80) {
		  $(this).addClass("hide-img");
		}
		else {$(this).removeClass("hide-img");}
	  });
	});
});
$(document).on('turbolinks:load', function(){
	$(window).scroll(function() {
	  $(".slideanim").each(function(){
		var pos = $(this).offset().top;
		var winTop = $(window).scrollTop();
		if (pos < winTop + 600) {
		  $(this).addClass("slider");
		}
	  });
	});
});
$(document).on('turbolinks:load', function(){
    var s = $("#our-story");
    if (s.length > 0){
        var storyHeight = $("#our-story").offset().top;
        $("a#slide-down-link").on('click', function() {
            $('html, body').animate({
                scrollTop: storyHeight
            }, 900);
        });
    }
});
$(document).on('turbolinks:load', function() {
  $('input#submit-rsvp').click(function(e){
    e.preventDefault();
	var firstNameLength = $('input#rsvp_first_name').val().length;
	var lastNameLength = $('input#rsvp_last_name').val().length;
	var attendingValue = $('input#rsvp_attending_value').val();
	var SOBoolean = $('input#rsvp_plus_one').val();
	if (firstNameLength === 0) {
	  $('div#alerts p').replaceWith("<p><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please enter your first name.</p>");
	  $('input#rsvp_first_name').focus();
	  $('input#rsvp_first_name').on('change',function(){
		  var firstName = $('input#rsvp_first_name').val().length;
		  if (firstName > 0) {
			  $('div#alerts p').replaceWith("<p></p>");
		  }
	  });
	}
	else if (lastNameLength === 0) {
	  $('div#alerts p').replaceWith("<p><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please enter your last name.</p>");
	  $('input#rsvp_last_name').focus();
	  $('input#rsvp_last_name').on('change',function(){
		  var lastName = $('input#rsvp_last_name').val().length;
		  if (lastName > 0) {
			  $('div#alerts p').replaceWith("<p></p>");
		  }
      });
	}
	else if ((attendingValue !== "true") && (attendingValue !== "false")) {
		$('div#alerts p').replaceWith("<p><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please accept or decline.</p>");
		$('input#rsvp_attending_true').on('click', function() {
			$('div#alerts p').replaceWith("<p></p>");
		});
		$('input#rsvp_attending_false').on('click', function() {
			$('div#alerts p').replaceWith("<p></p>");
		});
	}
	else if (SOBoolean === "true") {
		var SOFirstName = $('input#rsvp_so_first_name').val().length;
		var SOLastName = $('input#rsvp_so_last_name').val().length;
		if (SOFirstName === 0) {
			$('div#alerts p').replaceWith("<p><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please enter your partner's first name.</p>");
			$('input#rsvp_so_first_name').focus();
			$('input#rsvp_so_first_name').on('change',function(){
			  var firstName = $('input#rsvp_so_first_name').val().length;
			  if (firstName > 0) {
				  $('div#alerts p').replaceWith("<p></p>");
			  }
			});
		}
		else if (SOLastName === 0) {
			$('div#alerts p').replaceWith("<p><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please enter your partner's last name.</p>");
			$('input#rsvp_so_last_name').focus();
			$('input#rsvp_so_last_name').on('change',function(){
			  var lastName = $('input#rsvp_so_last_name').val().length;
			  if (lastName > 0) {
				  $('div#alerts p').replaceWith("<p></p>");
			  }
			});
		}
		else {
			$('form#new_rsvp').submit();
			$('input#submit-rsvp').addClass("disabled");
			$('input#submit-rsvp').attr("value", "Submitting...");
		}
	}
	else {
	  $('form#new_rsvp').submit();
	  $('input#submit-rsvp').addClass("disabled");
	  $('input#submit-rsvp').attr("value", "Submitting...");
	}
  });
});
$(document).on('turbolinks:load', function() {
	$('input#rsvp_attending_true').on('click', function() {
		$('.checkbox-wrapper.collapse').collapse('show');
		$('label.radio').removeClass('checked');
		$('label.radio').removeClass('not-checked');
		$('label#attend').addClass('checked');
		$('label#decline').addClass('not-checked');
		$('input#rsvp_attending_value').val("true");
	});
	$('input#rsvp_attending_false').on('click', function() {
		if ($('.checkbox-wrapper.collapse').is(":visible")) {
			$('.checkbox-wrapper.collapse').collapse('hide');
		}
		if ($('.so-fields-wrapper').is(":visible")) {
			$('.so-fields-wrapper').collapse('hide');
		}
		$('label.radio').removeClass('checked');
		$('label.radio').removeClass('not-checked');
		$('label#decline').addClass('checked');
		$('label#attend').addClass('not-checked');
		$('input#rsvp_attending_value').val("false");
		$('input#rsvp_plus_one').val("false");
		$('div#plus-one-wrapper').removeClass('checked');
	});
});

$(document).on('turbolinks:load', function() {
	$('div#plus-one-wrapper').on('click', function() {
		var SOBoolean = $('input#rsvp_plus_one').val();
		if (SOBoolean === "true") {
			$(this).removeClass('checked');
			$('input#rsvp_plus_one').val("false");
			$('.so-fields-wrapper').collapse('hide');	
		}
		else {
			$(this).addClass('checked');
			$('input#rsvp_plus_one').val("true");
			$('.so-fields-wrapper').collapse('show');
			$('html, body').animate({scrollTop: $('input#rsvp_first_name').offset().top}, 800);
		}	
	});
});

$(document).on('turbolinks:load', function(){
	$("main-menu").on('click', function(e) {
	if (this.hash !== "") {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 900, function(){
		  window.location.hash = hash;
		  });
		}
	});
	$('#engagement-target').click();
	$('.collage-btn').click(function(){$('#photo-modal').fadeIn(300)});
	$('#close-photos').click(function(){$('#photo-modal').fadeOut(300)});
});
$(document).on('turbolinks:load', function(){
	$("#create-message").click(function() {
		$('#overlay').fadeIn(300);
	});
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;

    if (isIE || isEdge) {
        $('#home').removeClass('not-ie');
		$('.top-details').removeClass('not-ie');
    }
});