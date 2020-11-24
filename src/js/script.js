// $(document).ready(() => {
//   $('.carousel__inner').slick({
//     speed: 1000,
//     // adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/left.svg"/></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/right.svg"/></button>',
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           speed: 500,
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   });
// }
$(document).ready(() => {
  $('.carousel-promo').slick({
    speed: 1000,
    // adaptiveHeight: true,
    // prevArrow:
    //   '<button type="button" class="slick-prev"><img src="icons/left.svg"/></button>',
    // nextArrow:
    //   '<button type="button" class="slick-next"><img src="icons/right.svg"/></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          speed: 500,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
