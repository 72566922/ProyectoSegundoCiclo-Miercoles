document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var commentInput = document.getElementById("comment-input");
    if (commentInput.value !== "") {
        var commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerText = commentInput.value;
        document.getElementById("comments").appendChild(commentElement);
        commentInput.value = "";
    }
});


(function () {
    'use strict';
    // Recupera todos los formularios a los que queremos aplicar estilos de validación Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation');
    // Bucle sobre ellas y evitar la presentación(
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
  })();