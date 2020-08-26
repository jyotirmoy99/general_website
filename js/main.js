//BLOGS FILTER

// $(document).ready(function () {

//     // isotope filter
//     var $grid = $(".grid").isotope({
//         itemSelector: '.grid-item',
//         layoutMode: 'fitRows'
//     });

//     // filter items on button click
//     $(".button-group").on("click", "button", function () {
//         var filterValue = $(this).attr('data-filter');
//         $grid.isotope({
//             filter: filterValue
//         });
//     })

// });


// BOOTSTRAP MODEL
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

// CV Attachment
$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


// Sticky Navigation

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $(".section-3").offset().top - window.innerHeight;
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});