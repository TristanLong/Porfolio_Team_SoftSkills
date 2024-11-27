document.addEventListener('DOMContentLoaded', () => {
    const btnDark = document.querySelector(".dark");
    const btnLight = document.querySelector(".light");
    const html = document.documentElement;

    btnDark.addEventListener('click', () => {
        html.setAttribute("data-bs-theme", "dark");
    });

    btnLight.addEventListener('click', () => {
        html.setAttribute("data-bs-theme", "light");
    });
});
