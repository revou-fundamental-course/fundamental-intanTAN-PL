// ini javascript

//ini js untuk form nya, cara ambil value dr form yg disubmit
function validateForm() {
    let nama = document.getElementById('nama').value;
    let tanggal = document.getElementById('tanggal').value;
    let lakilaki = document.getElementById('lakilaki').value;
    let perempuan = document.getElementById('perempuan').value;
    let pesan = document.getElementById('pesan').value;
    // ini buat ngecek berhasil ga kita ambil inputannya
    console.log(nama);
    console.log(tanggal);
    console.log(lakilaki);
    console.log(perempuan);
    console.log(pesan);
    // nah ini untuk validasinya
    // cara baca : jika id yg dimaksuud itu ada isinya dan id lainnya ada isinya , maka output akan sukses kirim.
    // tp kalo else, maka output outputnya yg di else
    if (nama != '' && tanggal != '' && lakilaki != '' && pesan != '') {
        document.getElementById('result').innerHTML = nama + ' ' + tanggal +  ' ' + lakilaki  ' ' +  pesan;
    } else {
        alert('Tolong dilengkapi! Masih ada yang belum terisi');
    }

}

//ini js untuk banner autoslide
// Variabel untuk menyimpan referensi elemen
var bannerSlideContainer = document.querySelector('.banner-slide-container');
var bannerSlideItems = document.querySelectorAll('.banner-slide-item');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var currentSlide = 0;

// Fungsi untuk mengubah slide
function changeSlide(direction) {
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % bannerSlideItems.length;
    } else if (direction === 'prev') {
        currentSlide = (currentSlide - 1 + bannerSlideItems.length) % bannerSlideItems.length;
    }

    // Mengubah style untuk item slide yang aktif
    bannerSlideItems.forEach((item, index) => {
        if (index === currentSlide) {
            item.style.transform = 'scale(1)';
        } else {
            item.style.transform = 'scale(0.5)';
        }
    });
}

// Event listener untuk tombol navigasi
prevBtn.addEventListener('click', () => {
    changeSlide('prev');
});

nextBtn.addEventListener('click', () => {
    changeSlide('next');
});


// Mengubah slide secara otomatis setiap 5 detik
setInterval(() => {
    changeSlide('next');
}, 3000);