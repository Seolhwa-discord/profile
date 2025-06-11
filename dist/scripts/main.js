"use strict";
var _a;
(_a = document.getElementById('copyEmail')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    const email = 'znzsndj@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        showToast('이메일 주소가 클립보드에 복사되었습니다.');
    }).catch(err => {
        showToast('복사 실패.');
    });
});
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast)
        return;
    toast.textContent = message;
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.visibility = 'hidden';
        }, 500);
    }, 2500);
}
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];
let inputSequence = [];
window.addEventListener("keydown", (event) => {
    inputSequence.push(event.key);
    if (inputSequence.length > konamiCode.length) {
        inputSequence.shift();
    }
    if (inputSequence.join("") === konamiCode.join("")) {
        triggerSeolhwaEasterEgg();
        inputSequence = [];
    }
});
function triggerSeolhwaEasterEgg() {
    const seolhwaDiv = document.createElement("div");
    seolhwaDiv.textContent = "설화!!!";
    seolhwaDiv.className = "big-seolhwa";
    document.body.appendChild(seolhwaDiv);
    setTimeout(() => {
        seolhwaDiv.classList.add("fade-out");
        setTimeout(() => {
            seolhwaDiv.remove();
        }, 1000);
    }, 2500);
}
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark ? "true" : "false");
        darkModeToggle.textContent = isDark ? "☀️" : "🌙";
    });
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }
}
