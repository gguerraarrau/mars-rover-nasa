/// <reference path="../jquery-3.5.1.js" />
$('#fetch').on('click', function () {
    var date = $('#date').val();
    $('.result').html("");
    if (date === "")
        alert("Enter valid date")
    else {
        $.ajax({
            url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
            method: 'get',
            success: function (data) {
                var photos = data.photos;
                photos.forEach(e => {
                    $('.result').append(`
                <div class="image-container">
                    <img src="${e.img_src}" alt="">
                </div>`);
                });
            },
            data: {
                earth_date: date,
                api_key: 'DEMO_KEY'
            }

        });
    }
});