document.querySelector('.btn').onclick = function (e) {
    var barBtn = document.querySelector('.barBtn');
    var btn = document.querySelector('.btn');

    barBtn.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    e.preventDefault();
}