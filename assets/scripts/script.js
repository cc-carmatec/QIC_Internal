$(document).ready(function(){
	$('.selectpicker').selectpicker();  
  $('.selectpicker1').selectpicker({
    size: 4
  });
  $('select').change(function(){
    if ($(this).val()!="")
    {
      $(this).valid();
    }
  }); 
  /*Accordian*/
  $('#horizontalTab').easyResponsiveTabs({
type: 'default', //Types: default, vertical, accordion           
width: 'auto', //auto or any width like 600px
fit: true,   // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
activate: function(event) { // Callback function if tab is switched
	var $tab = $(this);
	var $info = $('#tabInfo');
	var $name = $('span', $info);
	$name.text($tab.text());
	$info.show();
}
});
  $('#contactpagetab').easyResponsiveTabs({
type: 'default', //Types: default, vertical, accordion           
width: 'auto', //auto or any width like 600px
fit: true,   // 100% fit in a container
closed: 'accordion', // Start closed if in accordion view
activate: function(event) { // Callback function if tab is switched
}
});
  /*Accordian*/
  /*Tooltip*/
  // $('[data-toggle="popover"]').popover({html:true,placement: 'auto'});
  // $('[data-toggle="tooltip"]').tooltip(); 
  /*Tooltip*/
  /*Setting equal heights*/
  // var highestBox = 0;

  // $('.comprehensive-tpl-details').each(function(){
  //   if($(this).height() > highestBox){  
  //     highestBox = $(this).height();  
  //   }
  // });

  // $('.comprehensive-tpl-details').height(highestBox);
  /*Setting equal heights*/
  $(".menu").on("click",function(){
    $("#overlay").addClass("on");
    $("#side-menu").addClass("on");
  });
  $(".close").on("click",function(){
    $("#overlay").removeClass("on");
    $("#side-menu").removeClass("on");
  });
  $("#overlay").on("click",function(){
    $(this).removeClass("on");
    $("#side-menu").removeClass("on");
  });
  $("#local li").on("click",function(){
    $(this).toggleClass("active");
  //$("#local li").not(this).removeClass("active");
  $(this).children("ul").slideToggle("slow");
});
  $(".search-btn").on("click",function(){
    $(".search-form").slideToggle("slow");
  });
//   $(document).click(function (e)
//         {
//             var container = $(".search-btn");
//             
//          if (!container.is(e.target) // if the target of the click isn't the container...
//             && container.has(e.target).length === 0) // ... nor a descendant of the container
//         {
//               $(".search-form").slideUp();
//         }  
//   });
$(".retrieve-quote").on("click",function(){
  $(this).hide();
  $(this).parents(".quotation_links").children(".renew-policy").hide();
  $(this).parents(".quotation_links").children(".new-quote").show();
  $(this).parents(".tab-form").find("h2,h3,.form1").hide();
  $(this).parents(".tab-form").find(".retrieve-quote-head,.form2").show();
});
$(".renew-policy").on("click",function(){
  $(this).hide();
  $(this).parents(".quotation_links").children(".retrieve-quote").hide();
  $(this).parents(".quotation_links").children(".new-quote").show();
  $(this).parents(".tab-form").find("h2,h3,.form1").hide();
  $(this).parents(".tab-form").find(".renew-policy-head,.form3").show();
});
$(".new-quote").on("click",function(){
  $(this).hide();
  $(this).parents(".quotation_links").children(".renew-policy,.retrieve-quote").show();
  $(this).parents(".tab-form").find("h2,h3,.form1").show();
  $(this).parents(".tab-form").find(".retrieve-quote-head,.renew-policy-head,.form2,.form3").hide();
});

/* slick slider */
if($('.responsive').length){
  $('.responsive').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
}

if($(".faq-block-types ul li a").length){
  $(".faq-block-types ul li a").on("click",function(){
    $(this).addClass("active");
    $(".faq-block-types ul li a").not(this).removeClass("active");
  });
}
/*Date Picker*/
/*if($('#example1').length){
  $('#example1').datetimepicker({
   format: 'dd/MM/yyyy hh:mm:ss'
 });
}*/
  // $('#datetimepicker1').datetimepicker({
  //    format: 'dd/MM/yyyy hh:mm:ss',
  //     pick12HourFormat: true,
  //     autoclose: true
  // });



/*$('.datepicker').datetimepicker({
  format: 'DD/MM/YYYY hh:mm:ss',
  dayHighlight:'TRUE',
  autoclose: true,
});*/
/*
$('.datepicker-notime').datetimepicker({
  format: 'DD/MM/YYYY',
  pickTime: false
});*/
/*Date Picker*/
$('input.datepicker').change(function(){
  if ($(this).val()!="")
  {
    $(this).valid();
  }
}); 



if($('.scroll_to_top').length){
  $('.scroll_to_top').click(function(e) {

    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);

    return false;

    e.preventDefault();

  });
}
/* Image upload function */

$(".img-upload-btn").change(function (e) {
  var obj = $(this);
  if (typeof (FileReader) != "undefined") {
    var dvPreview = $(obj).parents('.upload-image-block').find('.image-holder');
    var iconchange = $(obj).parents('.upload-block').find('i');
    var regex = new RegExp("(.*?)\.(.jpeg|.jpg|.png|.gif)$");
    $($(this)[0].files).each(function () {
      var file = $(this);
      if (regex.test(file[0].name.toLowerCase())) {
        var reader = new FileReader();
        reader.onload = function (e) {
         console.log();
         var img = $("<img />");
         img.attr("class", "preview_image");
         img.attr("src", e.target.result);
         img.attr("name", file[0].name);
         dvPreview.html("");
         dvPreview.append(img);
         iconchange.removeClass("fa-arrow-up").addClass("fa-check icon-bg-change");
         $(obj).parents('.upload-block').find('span').text("Click to Change");
         $(obj).parents('.upload-image-block').find('label.error').remove();

       }
       reader.readAsDataURL(file[0]);
     } else {
      $(obj).val('');
      iconchange.addClass("fa-arrow-up").removeClass("fa-check icon-bg-change");
      $(obj).parents('.upload-block').find('span').text("Click to Upload");
      dvPreview.html("");
      alert(file[0].name + " is not a valid image file.");
      return false;
    }
  });
} else {
  $(obj).val('');
  alert("This browser does not support HTML5 FileReader.");
}

});/*Image Upload end*/


$('body').on('click', '.trems-check-box', function(){
  setTimeout(function(){
   if($('input[type="checkbox"].trems-check-box').is(':checked'))
   {
    $('#rules_model').modal('show');
  }
}, 100);
  $('body').on('click', '.termsmodel .btn-cancel', function(){
    $('input[type="checkbox"].trems-check-box').prop( "checked", false);
  });  
});

/*****Close notification*****/
$(".close-notification").on("click",function(){
  $(this).parents(".notification-container").fadeOut(500);
});
/*****Close notification*****/
$(window).resize(function() {
  var maxHeight = $(".top_header_main").height();
  $(".com-description, .banner-img").css("margin-top",maxHeight);
});

/*home insurance layout 1 script start*/
$(".add-risks-cover-btn").click(function () {
  $(this).parents(".addfunction").children("tbody").children("tr:last-child").clone().addClass("bla").appendTo("table.addfunction");
  $(".close-risks-cover-btn").click(function(){  
    $(this).closest('tr.bla').remove();
  });
});
/*home insurance layout 2 script stop*/

}); //main ends

$(document).ready(function(){
   $('.oman-travel-dest> div').css("height",$('.oman-travel-dest').innerHeight());
   $('.oman-travel-regional> div >.title-plans').css("height",$('.oman-travel-regional').innerHeight());
   
});


$(function () {
      var $elem = $('body');
      $('#nav_up').hide();
      $('#nav_down').show();
      $('#nav_down').click(
          function (e) {
              $('html, body').animate({scrollTop: $elem.height()}, 3000);
          }
      );
      $('#nav_up').click(
          function (e) {
              $('html, body').animate({scrollTop: '0px'}, 3000);
          }
      );
      
      $(window).scroll(function () {
          if ($(window).scrollTop() < 100) {
              $('#nav_up').hide('slow');
              $('#nav_down').show('slow');
          }
          else {
              $('#nav_down').hide('slow');
              $('#nav_up').show('slow');
          }
      });
    });
