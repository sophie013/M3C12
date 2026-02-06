const btn = document.getElementById('toggleLayout');
const container = document.getElementById('main-container');

btn.addEventListener('click', () => {
    if (container.classList.contains('layout-fijo')) {
        container.classList.remove('layout-fijo');
        container.classList.add('layout-fluido');
        btn.innerText = "Modo Actual: Fluido 🌊";
    } else {
        container.classList.remove('layout-fluido');
        container.classList.add('layout-fijo');
        btn.innerText = "Modo Actual: Fijo 🏛️";
    }
});