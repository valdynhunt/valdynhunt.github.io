// Everything OK?
console.log('OK');


// Light Gallery
$('#gallery-1').lightGallery({
    thumbnail: false,
    share: false,
    download: false,
    mode: 'lg-tube',
    speed: 300
});

$('#gallery-2').lightGallery({
    share: false,
    download: false,
    mode: 'lg-scale-up',
    speed: 2000
});

$('#gallery-3').lightGallery({
  thumbnail: false,
  share: false,
  download: false,
  mode: 'lg-tube',
  speed: 300
});

$('#gallery-4').lightGallery({
  thumbnail: false,
  share: false,
  download: false,
  mode: 'lg-tube',
  speed: 300
});

$('#gallery-5').lightGallery({
  thumbnail: false,
  share: false,
  download: false,
  mode: 'lg-tube',
  speed: 300
});

$('#gallery-6').lightGallery({
  thumbnail: false,
  share: false,
  download: false,
  mode: 'lg-tube',
  speed: 300
});

$('#gallery-7').lightGallery({
  thumbnail: false,
  share: false,
  download: false,
  mode: 'lg-tube',
  speed: 300
});


// Controls for Views
$('#grid').click( function(){
  
    // Remove List and add Grid
  $('main').removeClass('list');
  $('main').addClass('grid');
  // console.log('Grid Click');
});

$('#list').click( function(){
  
  // Remove Grid and add Class
  $('main').removeClass('grid');
  $('main').addClass('list');
  // console.log('List Click');
});

// Grid View


// List View



var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
};

// Click Photography
$('#photo').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('img:not(.photo)').toggleClass('hide');

});

// Click Illustration
$('#illus').click( function() {
  
    checkClass();
    $('img:not(.illus)').toggleClass('hide');
  
});

// Click Logo
$('#logo').click( function() {
 
    checkClass();
    $('img:not(.logo)').toggleClass('hide');
  
});

// Click Design
$('#logo').click( function() {
 
  checkClass();
  $('img:not(.design)').toggleClass('hide');

});

// Click Developer
$('#logo').click( function() {
 
  checkClass();
  $('img:not(.dev)').toggleClass('hide');

});

// Show All 
$('#all').click( function() {
  
  checkClass();
  
});