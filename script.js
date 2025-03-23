document.addEventListener("DOMContentLoaded", function () {
    // Form submission handler
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            alert("Thank you for your message!");
        });
    }

    // Button click event handler
    const buttons = document.querySelectorAll(".button-group button, .introduction button");
    
    const actionMap = {
        "Lihat Semua Course": "Anda akan melihat semua course yang tersedia!",
        "Mulai Sekarang": "Anda akan memulai perjalanan belajar Shopee Affiliate!",
        "See More": "Anda akan melihat lebih banyak informasi!"
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert(actionMap[this.innerText] || "Fitur ini belum tersedia!");
        });
    });
});
