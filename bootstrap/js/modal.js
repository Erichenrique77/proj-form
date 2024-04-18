document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if (!nome || !email || !sobrenome || !senha) {
      alert('Por favor, preencha os campos solicitados.');
      return;
    }

    $('#successModal').modal('show');

    
    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
  });
  
  document.getElementById('addNewUserBtn').addEventListener('click', function() {
    $('#successModal').modal('hide');
  });
  