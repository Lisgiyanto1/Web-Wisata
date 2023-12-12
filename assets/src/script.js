var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide', // Atur efek pergeseran menjadi slide
  speed: 1000, // Atur kecepatan pergeseran dalam milidetik (misalnya, 1000 untuk 1 detik)
});

// SCROLL VIEW
window.addEventListener('scroll', function () {
  var topNav = document.querySelector('.top-nav');
  if (window.scrollY > 0) {
    topNav.classList.add('scrolled');
  } else {
    topNav.classList.remove('scrolled');
  }
});

// loader
function showContent() {
  // Sembunyikan placeholder loader
  var loader = document.querySelector('.loader');
  loader.style.display = 'none';

  // Tampilkan konten sebenarnya
  var content = document.getElementById('content');
  content.style.display = 'block';
}

// Tampilkan placeholder loader saat halaman dimuat
var loader = document.querySelector('.loader');
loader.style.display = 'block';

// Penundaan 5 detik sebelum menampilkan konten sebenarnya
setTimeout(function () {
  showContent();
  loader.style.display = 'none'; // Menyembunyikan loader setelah 5 detik
}, 1000);
