// Fungsi untuk menampilkan teks kejutan saat tombol ditekan
function showSurprise() {
    document.getElementById("surprise-text").style.display = "block";
}

// Fungsi untuk membuat efek hati jatuh
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Memanggil fungsi createHeart setiap 300ms untuk efek hujan hati
setInterval(createHeart, 300);

// Menjalankan lagu otomatis saat halaman dimuat
window.onload = function() {
    let audio = new Audio("https://www.mboxdrive.com/Lamunan-Jawa.mp3");
    audio.loop = true;
    audio.play().catch(error => console.log("Autoplay diblokir oleh browser"));
};