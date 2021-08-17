window.location.replace("#");
$(document).ready(function(){  
  $('.product_inside1').hide();
  $('.product_inside2').hide();
  $('.product_inside3').hide();
  $('.product_inside4').hide();
  $('.product_inside5').hide();
  $('#title1').text();
  $('#plan1').text();
  $('#price1').text();
  $('#second').hide();
  $('#third').hide();
   $('#single_plan_silver').hide();
  $('#double_plan_silver').hide();
  $('#double_plan_gold').hide();

  $('.product1_subtotal').hide();
  $('.product2_subtotal').hide();
  $('.product3_subtotal').hide();
  $('.product4_subtotal').hide();
  $('.product5_subtotal').hide();
  $('.t_silver_priceHide0').hide();
  $('#t_silver_priceHide1').hide();
  $('#t_silver_priceHide2').hide();
  $('#t_silver_priceHide3').hide();
  $('#t_silver_priceHide4').hide();
  $('#t_silver_priceHide5').hide();
  $('.t_gold_priceHide0').hide();
  $('#t_gold_priceHide1').hide();
  $('#t_gold_priceHide2').hide();
  $('#t_gold_priceHide3').hide();
  $('#t_gold_priceHide4').hide();
  $('#t_gold_priceHide5').hide();
  $('#product1_name').prop('disabled', true);
  $('#product2_name').prop('disabled', true);
  $('#product3_name').prop('disabled', true);
  $('#product4_name').prop('disabled', true);
  $('#product5_name').prop('disabled', true);

  $('a, down-popup').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('#down-popup').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
    // ML3 START
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 95 * (i + 1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });
// ML3 END
// ML2 START
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1000 + 50 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
// ML2 END

// ML3-1 START
var textWrapper = document.querySelector('.ml3-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3-1 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 95 * (i + 1)
  }).add({
    targets: '.ml3-1',
    opacity: 0,
    duration: 2000,
    easing: "easeOutExpo",
    delay: 2000
  });
// ML3-1 END
// ML2-1 START
var textWrapper = document.querySelector('.ml12-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12-1 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1000 + 50 * i
  }).add({
    targets: '.ml12-1 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
// ML2-1 END


// ML3-2 START
var textWrapper = document.querySelector('.ml3-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3-2 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 95 * (i + 1)
  }).add({
    targets: '.ml3-2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// ML3-1 END
// ML2-2 START
var textWrapper = document.querySelector('.ml12-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12-2 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1000 + 50 * i
  }).add({
    targets: '.ml12-2 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
// ML2-2 END


// ML3-3 START
var textWrapper = document.querySelector('.ml3-3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml3-3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 95 * (i + 1)
  }).add({
    targets: '.ml3-3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
// ML3-1 END
// ML2-3 START
var textWrapper = document.querySelector('.ml12-3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
    loop: true
  })
  .add({
    targets: '.ml12-3 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1000 + 50 * i
  }).add({
    targets: '.ml12-3 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
// ML2-3 END
  });
    
    // pos_silver CLICK
    $('#pos_silver').on('click', function() {
      
      $('#product1_name').prop('disabled', false);
      $('#product2_name').prop('disabled', false);
      $('#product3_name').prop('disabled', false);
      $('#product4_name').prop('disabled', false);
      $('#product5_name').prop('disabled', false);
      // $('#pos_silver').prop('disabled', true);
      // $('#pos_gold').prop('disabled', true);


      var price = $('#price_49').val();
      // var.subtotal_product_name = $('.subtotal_product_name').val();
    //   $('#t_silver_price1').empty().append(49);
    //   $('#t_silver_price2').empty().append(60);
    //   $('#t_silver_price3').empty().append(70);
    //   $('#t_silver_price4').empty().append(80);
    //   $('#t_silver_price5').empty().append(90);
      // alert(price);
      // $('#price49').empty().val(price);

      $('.t_silver_priceHide0').show();
      $('.t_silver_price0').empty().append(price);

      $('#product1_name').on('click', function() {

        $('.t_silver_priceHide0').hide();
        var product1_name = $('#product1_name').val();
        // alert(product1_name);
        var abcd1 = $('#pgprice1').val();
        var pricee_silver = $('#price_49').val();

        // alert('hello pos_silver'+ abcd);
        $('.subtotal_product_name1').append(product1_name);
        // $('#product_price_49').val(abcd1);
        // $('.subtotal_price_49').val(abcd1);

        // $('#t_silver_price').empty().append(price);
        var c = (+pricee_silver) + (+abcd1);
        $('#t_silver_priceHide1').show();
        $('#t_silver_price1').empty().append(c.toFixed(2));

      });

      $('#product2_name').on('click', function() {

        $('.t_silver_priceHide0').hide();
        var abcd2 = $('#pgprice2').val();
        var pricee_silver = $('#price_49').val();
        var product2_name = $('#product2_name').val();


        // alert('hello pos_silver'+ abcd);
        $('.subtotal_product_name2').append(product2_name);
        // $('.product_price_60').val(abcd2);
        // $('.subtotal_price_60').val(abcd2);

        // $('#t_silver_price').empty().append(price);
        var d = (+pricee_silver) + (+abcd2);

        $('#t_silver_priceHide2').show();
        $('#t_silver_price2').empty().append(d.toFixed(2));

      });


      $('#product3_name').on('click', function() {

        $('.t_silver_priceHide0').hide();
        var abcd3 = $('#pgprice3').val();
        var pricee_silver = $('#price_49').val();
        var product3_name = $('#product3_name').val();


        // alert('hello pos_silver'+ abcd);
        $('.subtotal_product_name3').append(product3_name);
        // $('.product_price_70').val(abcd3);
        // $('.subtotal_price_70').val(abcd3);

        // $('#t_silver_price').empty().append(price);
        var e = (+pricee_silver) + (+abcd3);
        $('#t_silver_priceHide3').show();
        $('#t_silver_price3').empty().append(e.toFixed(2));

      });

      $('#product4_name').on('click', function() {

        $('.t_silver_priceHide0').hide();
        var abcd4 = $('#pgprice4').val();
        var pricee_silver = $('#price_49').val();
        var product4_name = $('#product4_name').val();


        // alert('hello pos_silver'+ abcd);
        $('.subtotal_product_name4').append(product4_name);
        // $('.product_price_80').val(abcd4);
        // $('.subtotal_price_80').val(abcd4);

        // $('#t_silver_price').empty().append(price);
        var f = (+pricee_silver) + (+abcd4);
        $('#t_silver_priceHide4').show();
        $('#t_silver_price4').empty().append(f.toFixed(2));

      });

      $('#product5_name').on('click', function() {

        $('.t_silver_priceHide0').hide();
        var abcd5 = $('#pgprice5').val();
        var pricee_silver = $('#price_49').val();
        var product5_name = $('#product5_name').val();


        // alert('hello pos_silver'+ abcd);
        $('.subtotal_product_name5').append(product5_name);
        // $('.product_price_90').val(abcd5);
        // $('.subtotal_price_90').val(abcd5);

        // $('#t_silver_price').empty().append(price);
        var g = (+pricee_silver) + (+abcd5);
        $('#t_silver_priceHide5').show();
        $('#t_silver_price5').empty().append(g.toFixed(2));

      });
    });


    // pos_gold CLICK
    $('#pos_gold').on('click', function() {

      $('#product1_name').prop('disabled', false);
      $('#product2_name').prop('disabled', false);
      $('#product3_name').prop('disabled', false);
      $('#product4_name').prop('disabled', false);
      $('#product5_name').prop('disabled', false);
      // $('#pos_silver').prop('disabled', true);
      // $('#pos_gold').prop('disabled', true);

      // alert(price);
      var price = $('#price_99').val();
    //   $('#t_gold_price1').empty().append(49);
    //   $('#t_gold_price2').empty().append(60);
    //   $('#t_gold_price3').empty().append(70);
    //   $('#t_gold_price4').empty().append(80);
    //   $('#t_gold_price5').empty().append(90);
      // $('#price99').empty().val(price);

      $('.t_gold_priceHide0').show();
      $('.t_gold_price0').empty().append(price);

      
      $('#product1_name').on('click', function() {

        $('.t_gold_priceHide0').hide();
        var product1_name = $('#product1_name').val();
        var abcd1 = $('#pgprice1').val();
        var pricee_gold = $('#price_99').val();


        $('.subtotal_product_name1').append(product1_name);
        // $('#product_price_49').val(abcd1);
        // $('.subtotal_price_49').val(abcd1);

        var c = (+pricee_gold) + (+abcd1);
        $('#t_gold_priceHide1').show();
        $('#t_gold_price1').empty().append(c.toFixed(2));

      });

      $('#product2_name').on('click', function() {

        $('.t_gold_priceHide0').hide();
        var abcd2 = $('#pgprice2').val();
        var pricee_gold = $('#price_99').val();
        var product2_name = $('#product2_name').val();


        $('.subtotal_product_name2').append(product2_name);
        // $('.product_price_60').val(abcd2);
        // $('.subtotal_price_60').val(abcd2);

        var d = (+pricee_gold) + (+abcd2);

        $('#t_gold_priceHide2').show();
        $('#t_gold_price2').empty().append(d.toFixed(2));
      });


      $('#product3_name').on('click', function() {

        $('.t_gold_priceHide0').hide();
        var abcd3 = $('#pgprice3').val();
        var pricee_gold = $('#price_99').val();
        var product3_name = $('#product3_name').val();


        $('.subtotal_product_name3').append(product3_name);
        // $('.product_price_70').val(abcd3);
        // $('.subtotal_price_70').val(abcd3);

        var e = (+pricee_gold) + (+abcd3);
        $('#t_gold_priceHide3').show();
        $('#t_gold_price3').empty().append(e.toFixed(2));

      });

      $('#product4_name').on('click', function() {

        $('.t_gold_priceHide0').hide();
        var abcd4 = $('#pgprice4').val();
        var pricee_gold = $('#price_99').val();
        // alert(pricee_gold);
        var product4_name = $('#product4_name').val();
        // alert(abcd4);

        $('.subtotal_product_name4').append(product4_name);
        // $('.product_price_80').val(abcd4);
        // $('.subtotal_price_80').val(abcd4);

        var f = (+pricee_gold) + (+abcd4);
        
        // alert(f);
        // var f = (+pricee_gold) + (+abcd4);
        $('#t_gold_priceHide4').show();
        $('#t_gold_price4').empty().append(f.toFixed(2));

      });

      $('#product5_name').on('click', function() {

        $('.t_gold_priceHide0').hide();
        var abcd5 = $('#pgprice5').val();
        var pricee_gold = $('#price_99').val();
        var product5_name = $('#product5_name').val();


        $('.subtotal_product_name5').append(product5_name);
        // $('.product_price_90').val(abcd5);
        // $('.subtotal_price_90').val(abcd5);

        var g = (+pricee_gold) + (+abcd5);
        $('#t_gold_priceHide5').show();
        $('#t_gold_price5').empty().append(g.toFixed(2));

      });
    });


function productFunction1(value){

  	$('#single_plan_silver').hide();
  	$('#double_plan_silver').show();

  	$('#single_plan_gold').hide();
  	$('#double_plan_gold').show();


    $('.product_inside1').show();
    $('.product_name1').empty().append(value);
    $('.product1_subtotal').show();
    
    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#pos_silver').prop('disabled', true);
    $('#pos_gold').prop('disabled', true);
    $('#close1').hide();
    $('#close2').hide();
}

function productFunction2(value){

	$('#single_plan_silver').hide();
  	$('#double_plan_silver').show();

  	$('#single_plan_gold').hide();
  	$('#double_plan_gold').show();
  
    $('.product_inside2').show();
    $('.product_name2').empty().append(value);
    $('.product2_subtotal').show();

    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#pos_silver').prop('disabled', true);
    $('#pos_gold').prop('disabled', true);
    $('#close1').hide();
    $('#close2').hide();
}

function productFunction3(value){

	$('#single_plan_silver').hide();
  	$('#double_plan_silver').show();

  	$('#single_plan_gold').hide();
  	$('#double_plan_gold').show();

    $('.product_inside3').show();
    $('.product_name3').empty().append(value);
    $('.product3_subtotal').show();

    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#pos_silver').prop('disabled', true);
    $('#pos_gold').prop('disabled', true);
    $('#close1').hide();
    $('#close2').hide();

}

function productFunction4(value){

	$('#single_plan_silver').hide();
  	$('#double_plan_silver').show();

  	$('#single_plan_gold').hide();
  	$('#double_plan_gold').show();

    $('.product_inside4').show();
    $('.product_name4').empty().append(value);
    $('.product4_subtotal').show();

    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#product4_name').prop('disabled', true);
    $('#product5_name').prop('disabled', true);
    $('#pos_silver').prop('disabled', true);
    $('#pos_gold').prop('disabled', true);
    $('#close1').hide();
    $('#close2').hide();

}

function productFunction5(value){

	$('#single_plan_silver').hide();
  	$('#double_plan_silver').show();

  	$('#single_plan_gold').hide();
  	$('#double_plan_gold').show();

    $('.product_inside5').show();
    $('.product_name5').empty().append(value);
    $('.product5_subtotal').show();

    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#product4_name').prop('disabled', true);
    $('#product5_name').prop('disabled', true);
    $('#pos_silver').prop('disabled', true);
    $('#pos_gold').prop('disabled', true);
    $('#close1').hide();
    $('#close2').hide();

}

window.closeFunction1 = function(target){
    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#product4_name').prop('disabled', true);
    $('#product5_name').prop('disabled', true);
}

window.closeFunction2 = function(target){
    $('#product1_name').prop('disabled', true);
    $('#product2_name').prop('disabled', true);
    $('#product3_name').prop('disabled', true);
    $('#product4_name').prop('disabled', true);
    $('#product5_name').prop('disabled', true);
}

window.smoothScroll = function(target) {
 
  $('#product1_name').prop('disabled', true);
  $('#product2_name').prop('disabled', true);
  $('#product3_name').prop('disabled', true);
  $('#product4_name').prop('disabled', true);
  $('#product5_name').prop('disabled', true);
  $('#pos_silver').prop('disabled', true);
  $('#pos_gold').prop('disabled', true);

  // alert(pos_gold);

  $('#exampleModalCenter').modal('hide');
  $('#second').show();
  $('#third').hide();

  var title_brisk = $('#title_brisk').text();
  $('#brisk_title').empty().append(title_brisk);

  var plane_silver = $('#plane_silver').text();
  $('#silver_plane').empty().append(plane_silver);
  



  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
window.smoothScrolll = function(target) {

  $('#product1_name').prop('disabled', true);
  $('#product2_name').prop('disabled', true);
  $('#product3_name').prop('disabled', true);
  $('#pos_silver').prop('disabled', true);
  $('#pos_gold').prop('disabled', true);

  // alert("love")
  $('#exampleModalCenter1').modal('hide');
  $('#second').hide();
  $('#third').show();
  var rebate_title = $('#rebate_title').text();
  $('#title_rebate').empty().append(rebate_title);
  var gold_plan = $('#gold_plan').text();
  $('#plan_gold').empty().append(gold_plan);
  var price_99 = $('#price_99').text();
  $('#price99').empty().append(price_99);
  var month_rebate = $('#month_rebate').text();
  $('#rebate_month').empty().append(month_rebate);
  $('#month5').empty().append(month_rebate);
  var totalprice1 = $('#price99').text();
  $('#total_rebate').empty().append(totalprice1);



  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
window.smoothScrolll = function(target) {

  $('#product1_name').prop('disabled', true);
  $('#product2_name').prop('disabled', true);
  $('#product3_name').prop('disabled', true);
  $('#pos_silver').prop('disabled', true);
  $('#pos_gold').prop('disabled', true);

  // alert("love")
  $('#exampleModalCenter1').modal('hide');
  $('#second').hide();
  $('#third').show();
  var rebate_title = $('#rebate_title').text();
  $('#title_rebate').empty().append(rebate_title);
  var gold_plan = $('#gold_plan').text();
  $('#plan_gold').empty().append(gold_plan);
  var price_99 = $('#price_99').text();
  $('#price99').empty().append(price_99);
  var month_rebate = $('#month_rebate').text();
  $('#rebate_month').empty().append(month_rebate);
  $('#month5').empty().append(month_rebate);
  var totalprice1 = $('#price99').text();
  $('#total_rebate').empty().append(totalprice1);



  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

window.onscroll = function () {
  scrollFunction();
};



function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    document.getElementById("navbar").style.padding = "20px 0px";
    document.getElementById("navbar").style.backgroundColor = "#fff";
    $(".nav-link1").css("color", "#000");  
    $(".signin-btn").css("color", "#000").css("border", "2px solid #a094c6" );
    var x = document.getElementsByClassName("custom-logo");
    x[0].innerHTML = "<a class='navbar-brand custom-logo1' href='/'><img src='assets/img/logo-black.png' style='width: 150px;height:auto;margin-top:0px;'></a>";
  } else {
    document.getElementById("navbar").style.padding = "20px 0px";
    document.getElementById("navbar").style.backgroundColor = "transparent";    
    document.getElementById("navbar").style.boxShadow = "none";
    $(".hover-body").css("color", "#fff");
    $(".signin-btn").css("color", "#fff").css("border", "2px solid #fff");
    var x = document.getElementsByClassName("custom-logo");
    x[0].innerHTML = "<a class='navbar-brand custom-logo' href='/'><img src='assets/img/logo.png' style='width: 150px;height:auto;margin-top:0px;'></a>";
  }
}




$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.custom-navbar').addClass('active');
            var x = document.getElementsByClassName("custom__logo");
            x[0].innerHTML = "<a class='navbar-brand custom-logo' href='/'><img src='assets/img/logo-black.png' style='width: 150px;'></a>";
        } else {
            $('.custom-navbar').removeClass('active');
            var x = document.getElementsByClassName("custom__logo");
            x[0].innerHTML = "<a class='navbar-brand custom-logo' href='/'><img src='assets/img/logo.png' style='width: 150px;'></a>";
        }
    });
});




(function () {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
    var menuItems = menu.querySelectorAll('.menu__link'),
      setCurrent = function (ev) {
        ev.preventDefault();

        var item = ev.target.parentNode; // li

        // return if already current
        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        // set current
        classie.add(item, 'menu__item--current');
      };

    [].slice.call(menuItems).forEach(function (el) {
      el.addEventListener('click', setCurrent);
    });
  });

  [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
    link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
    new Clipboard(link);
    link.addEventListener('click', function () {
      classie.add(link, 'link-copy--animate');
      setTimeout(function () {
        classie.remove(link, 'link-copy--animate');
      }, 300);
    });
  });
})(window);




// LOGO SLIDER START
$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
// LOGO SLIDER END
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 200000 / 20000)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


function toggleIcon(e) {
  $(e.target)
    .prev('.panel-heading')
    .find(".more-less")
    .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


function choice1()
    {
    var x = document.getElementById("role");
      var value = x.options[x.selectedIndex].value ;
  
    var demoemail = $('#demoemail');
    var demopass = $('#demopass');
    var chatHeading = $('#adminemail');
    var chatHeading1 = $('#adminpass');
    var uemail = $('#useremail');
    var upass = $('#userpass');
    var cashieremail = $('#cashieremail');
    var cashierpass = $('#cashierpass');
      if(value =='admin')
      {
      chatHeading.css('display','block');
      chatHeading1.css('display','block');
      cashieremail.css('display','none');
      cashierpass.css('display','none');
      demoemail.css('display','none');
      demopass.css('display','none');
      uemail.css('display','none');
      upass.css('display','none');
      }
  
      if(value =='manager')
      {
      chatHeading.css('display','none');
      chatHeading1.css('display','none');
      cashieremail.css('display','none');
      cashierpass.css('display','none');
      demoemail.css('display','none');
      demopass.css('display','none');
      uemail.css('display','block');
      upass.css('display','block');
      }

      if(value =='cashier')
      {
      demoemail.css('display','none');
      demopass.css('display','none');
      chatHeading.css('display','none');
      chatHeading1.css('display','none');
      uemail.css('display','none');
      upass.css('display','none');
      cashieremail.css('display','block');
      cashierpass.css('display','block');

      }
    }



    $(document).ready(function(){
  
  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  nav:false,
  dots:false,
  autoWidth:true,
  items:8,
  margin:42
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  
  });


