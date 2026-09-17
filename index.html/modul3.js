// ===== TOMBOL GANTI MODE =====

const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {

    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Ganti Mode';
    }

});


// ===== MODAL KONTAK =====

const btnBukaModal = document.querySelector('#btn-contact');
const elemenModal = document.querySelector('#modalkontak');
const btnTutupModal = document.querySelector('#btnTutupModal');


// Tombol Kirim Pesan
btnBukaModal.addEventListener('click', function (event) {

    event.preventDefault();

    elemenModal.classList.add('show');

});


// Tombol Tutup
btnTutupModal.addEventListener('click', function () {

    elemenModal.classList.remove('show');

});


// Tombol Escape untuk menutup modal
document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {
        elemenModal.classList.remove('show');
    }

});