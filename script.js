document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message!');
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-group button, .introduction button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const actionMap = {
                "Lihat Semua Course": "Anda akan melihat semua course yang tersedia!",
                "Mulai Sekarang": "Anda akan memulai perjalanan belajar Shopee Affiliate!",
                "See More": "Anda akan melihat lebih banyak informasi!"
            };

            // Cek apakah teks tombol ada dalam actionMap
            if (actionMap[this.innerText]) {
                alert(actionMap[this.innerText]);
            } else {
                alert("Fitur ini belum tersedia!");
            }
        });
    });
});
