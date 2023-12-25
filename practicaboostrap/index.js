
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Realiza la lógica de búsqueda aquí (puede ser una solicitud AJAX a un servidor o búsqueda en datos locales)

        // Ejemplo de búsqueda local en un arreglo de palabras clave
        const keywords = ["noticia 1", "noticia 2", "noticia 3", "otra noticia"];
        const matchingKeywords = keywords.filter(keyword =>
            keyword.toLowerCase().includes(searchTerm)
        );

        // Muestra los resultados
        displayResults(matchingKeywords);
    });

    function displayResults(results) {
        searchResults.innerHTML = "";

        if (results.length === 0) {
            searchResults.innerHTML = "No se encontraron resultados.";
        } else {
            results.forEach(result => {
                const resultItem = document.createElement("div");
                resultItem.textContent = result;
                searchResults.appendChild(resultItem);
            });
        }
    }
});

function handleCommentFormSubmit(formId, commentsId, commentInputId, isAdmin) {
    const form = document.getElementById(formId);
    const comments = document.getElementById(commentsId);
    const commentInput = document.getElementById(commentInputId);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const commentValue = commentInput.value.trim();

        // Validar que el comentario no esté vacío
        if (commentValue === "") {
            alert("Por favor, escribe un comentario antes de enviar.");
            return;
        }

        // Sanitizar la entrada para prevenir ataques de script cruzado (XSS)
        const sanitizedComment = commentValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Crear un nuevo elemento de comentario
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = sanitizedComment;

        // Crear un botón de borrar asociado al comentario
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Borrar";
        
        // Mostrar el botón solo si el usuario es un administrador
        if (isAdmin) {
            deleteButton.style.display = 'block';
        } else {
            deleteButton.style.display = 'none';
        }

        deleteButton.addEventListener("click", function () {
            // Al hacer clic en el botón, eliminar el comentario y el botón
            commentElement.remove();
        });

        // Agregar el botón de borrar al comentario
        commentElement.appendChild(deleteButton);

        // Agregar el comentario al área de comentarios
        comments.appendChild(commentElement);

        // Limpiar el cuadro de texto de entrada
        commentInput.value = "";
    });
}

// Llamar a la función para cada sección de comentarios
// En este ejemplo, asumo que 'isAdmin' es un booleano que indica si el usuario es un administrador.
handleCommentFormSubmit("comment-form-1", "comments-1", "comment-input-1", false);
handleCommentFormSubmit("comment-form-2", "comments-2", "comment-input-2", true); // Ejemplo de administrador
handleCommentFormSubmit("comment-form-3", "comments-3", "comment-input-3", false);






//acceder modo usuario

document.addEventListener('DOMContentLoaded', function() {
    const btnAbrirModal = document.getElementById('btnAbrirModal');
    const modalRegistroAdmin = document.querySelector('.modalRegistroAdmin');
    const fondoOscuro = document.getElementById('fondoOscuro');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const formularioRegistroAdmin = document.getElementById('formularioRegistroAdmin');

    btnAbrirModal.addEventListener('click', function() {
        modalRegistroAdmin.style.display = 'block';
        fondoOscuro.style.display = 'block';
    });

    btnCerrarModal.addEventListener('click', function() {
        modalRegistroAdmin.style.display = 'none';
        fondoOscuro.style.display = 'none';
    });

    fondoOscuro.addEventListener('click', function() {
        modalRegistroAdmin.style.display = 'none';
        fondoOscuro.style.display = 'none';
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modalRegistroAdmin.style.display = 'none';
            fondoOscuro.style.display = 'none';
        }
    });

    formularioRegistroAdmin.addEventListener('submit', function(event) {
        event.preventDefault();
        // Obtener los valores del formulario
        const correoAdmin = formularioRegistroAdmin.querySelector('input[name="emailAdmin"]').value;
        const contrasenaAdmin = formularioRegistroAdmin.querySelector('input[name="passwordAdmin"]').value;

        // Validar campos del formulario
        if (correoAdmin.trim() === '' || contrasenaAdmin.trim() === '') {
            alert('Por favor, complete todos los campos del formulario');
            return;
        }
        // Validar credenciales de administrador
        if (correoAdmin === 'kevin@certus.edu.pe' && contrasenaAdmin === 'morales') {          
            alert('¡Bienvenido, Administrador!');
            // Aquí puedes redirigir al administrador a la página principal de administrador u otra acción
            modalRegistroAdmin.style.display = 'none';
            fondoOscuro.style.display = 'none';
            deleteButton.style.display = 'block';
        } else {
            alert('Credenciales incorrectas. Por favor, inténtelo nuevamente.');
        }
    });
});



