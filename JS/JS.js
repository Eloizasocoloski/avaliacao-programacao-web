document.addEventListener("DOMContentLoaded", function() {

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const login = document.getElementById("login").value.trim();
            const senha = document.getElementById("senha").value.trim();
            if (login !== "" && senha !== "") {
                localStorage.setItem("usuario", login);
                localStorage.setItem("autenticado", "true");
                window.location.replace("pagina1.html");
                alert("Login realizado com sucesso!");
            } else {
                alert("Preencha todos os campos!");
            }
        });
    }
    const cadastroForm = document.getElementById("cadastroForm");
    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefone = document.getElementById("telefone").value.trim();
            const nascimento = document.getElementById("nascimento").value;
            const tipoPet = document.getElementById("tipoPet").value;

            const checkboxes = document.querySelectorAll(".checkbox input[type='checkbox']:checked");
            const servicos = Array.from(checkboxes).map(cb => cb.value);

            if (nome === "" || email === "" || telefone === "" || nascimento === "") {
                alert("Preencha todos os campos obrigatórios!");
                return;
            }

            localStorage.setItem("cadastroNome", nome);
            localStorage.setItem("cadastroEmail", email);
            localStorage.setItem("cadastroTelefone", telefone);
            localStorage.setItem("cadastroNascimento", nascimento);
            localStorage.setItem("cadastroPet", tipoPet);
            localStorage.setItem("cadastroServicos", servicos.join(", "));

            window.location.href = "pagina1.html"; 
            alert("Cadastro realizado com sucesso!"); 
        });
    }
    const tema = document.getElementById("tema");
    const mensagem = document.getElementById("mensagemEstilo");
    if (tema) {
        tema.addEventListener("change", function() {
            const labels = document.querySelectorAll("label");
            const inputs = document.querySelectorAll("input, select");
            if (tema.value === "custom") {
                labels.forEach(label => {
                    label.style.fontFamily = "cursive";
                    label.style.color = "#4CAF50";
                });
                inputs.forEach(input => {
                    input.style.backgroundColor = "#7cbf5e";
                    input.style.border = "2px solid #4CAF50";
                });
                document.body.style.backgroundColor = "#eefaf0";
                mensagem.innerHTML = "Modo custom ativado!";
            } else {
                labels.forEach(label => {
                    label.style.fontFamily = "Arial";
                    label.style.color = "black";
                });
                inputs.forEach(input => {
                    input.style.backgroundColor = "white";
                    input.style.border = "1px solid gray";
                });
                document.body.style.backgroundColor = "#f5f5f5";
                mensagem.innerHTML = "Estilo padrão ativado.";
            }
        });
    }

});