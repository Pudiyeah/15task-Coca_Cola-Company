document.querySelector('.region').onclick = function (e) {
    var regionBtn = document.querySelector('.regionBtn');
    var region = document.querySelector('.region');

    regionBtn.classList.toggle('is-active');
    region.classList.toggle('is-active');
    e.preventDefault();
}