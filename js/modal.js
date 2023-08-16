// Función para abrir el modal con el trailer en una ventana emergente
function openPopupModal(trailerUrl) {
    window.open(trailerUrl, 'Trailer', 'width=800,height=600');
}

// Función para abrir el modal con el trailer incrustado
function openTrailerModal(trailerUrl) {
    const trailerModal = document.getElementById('trailerModal');
    const trailerIframe = document.getElementById('trailerIframe');
    trailerIframe.src = trailerUrl;
    trailerModal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    const trailerModal = document.getElementById('trailerModal');
    const trailerIframe = document.getElementById('trailerIframe');
    trailerIframe.src = ''; // Detener el video
    trailerModal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const trailerModal = document.getElementById('trailerModal');
    if (event.target == trailerModal) {
        closeModal();
    }
};
