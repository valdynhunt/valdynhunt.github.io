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




// Controls for Views
$('#grid').click( function(){
  
    // Remove List
  $('main').removeClass('list');
  
  $('main').addClass('grid');
  // console.log('Grid Click');

});

$('#list').click( function(){
  
  // Remove Grid
  $('main').removeClass('grid');
  
  $('main').addClass('list');
  // console.log('List Click');
  
});

// Grid View


// List View