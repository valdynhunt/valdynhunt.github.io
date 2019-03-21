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


// nav color
$('#nav li:hover').addClass("navColor");