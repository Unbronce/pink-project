var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var navHeader = document.querySelector('.page-header')

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {      
      navMain.classList.remove('main-nav--closed');
      navHeader.classList.remove('page-header--transparent');      
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navHeader.classList.add('page-header--transparent');
      navMain.classList.remove('main-nav--opened');      
    }
  });


// var navMain = document.querySelector('.main-nav');
//   var navToggle = document.querySelector('.main-nav__toggle');
//   var navHeader = document.querySelector('.page-header')

//   navMain.classList.remove('main-nav--nojs');
//   navHeader.classList.add('page-header--transparent');  

//   navToggle.addEventListener('click', function() {
//     if (navMain.classList.contains('main-nav--closed')) {      
//       navMain.classList.remove('main-nav--closed');
//       navHeader.classList.remove('page-header--transparent');      
//       navMain.classList.add('main-nav--opened');
//     } else {
//       navMain.classList.add('main-nav--closed');
//       navHeader.classList.add('page-header--transparent');
//       navMain.classList.remove('main-nav--opened');      
//     }
//   });
