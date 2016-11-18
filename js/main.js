

$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
    event.preventDefault();

    $(this).ekkoLightbox();
}); // end delegate()

$(function () {
    $('[data-hover="tooltip"]').tooltip(); // end tooltip()
})
