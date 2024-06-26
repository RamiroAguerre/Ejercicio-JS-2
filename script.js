document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se recargue la página
    alert('¡Consulta enviada correctamente!');
    // Aquí podrías agregar lógica adicional como enviar los datos por AJAX
});
