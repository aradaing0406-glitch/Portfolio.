
// 1. แสดงข้อความต้อนรับ
window.addEventListener("load", function () {
    alert("ยินดีต้อนรับเข้าสู่ Portfolio ของ Arada Nusue 💗");
});

// 2. เลื่อนหน้าเว็บไซต์อย่างนุ่มนวล
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. แสดงวันที่ปัจจุบัน
const dateElement = document.getElementById("date");

if (dateElement) {
    dateElement.textContent =
        new Date().toLocaleDateString("th-TH");
}

// 4. ปุ่มกลับขึ้นด้านบน
const topButton = document.getElementById("backToTop");

if (topButton) {
    window.addEventListener("scroll", function() {
        topButton.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// 5. แสดงข้อความเมื่อกดปุ่ม
function showMessage() {
    alert("ขอบคุณที่เข้าชม Portfolio ของ Arada Nusue 💕");
}
