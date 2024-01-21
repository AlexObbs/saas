document.addEventListener('DOMContentLoaded', () => {
    const HamBtn = document.querySelector(".hamburger-btn");
    const MobMenu = document.querySelector('.mobile-menu');
    HamBtn.addEventListener("click", () => MobMenu.classList.toggle("active"))
})