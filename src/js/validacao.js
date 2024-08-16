const form = document.querySelector('.form');
const inputName = document.querySelector("input[name='nome']"); 
const inputEmail = document.querySelector("input[name='email']"); 
const inputTelefone = document.querySelector("input[name='telefone']"); 
const inputMensagem = document.querySelector("textarea"); 

const inputs = [inputName, inputEmail, inputTelefone, inputMensagem];

const adicionarERemoverClasse = (elemento, classeNome, acao) =>{
    if (acao === 'adicionar') {
        elemento.classList.add(classeNome);
    } else if (acao === 'remover') {
        elemento.classList.remove(classeNome);
    }
};

const validacaoInputs = () =>{
    inputs.forEach(input =>{
        if (!input.value) {
            adicionarERemoverClasse(input.nextElementSibling, 'hidden-erro', 'remover');
            adicionarERemoverClasse(input, 'invalido', 'adicionar')
        }
    });
};

const inputsPadrao = () => {
    inputs.forEach(input => {
        if (!input.value) {
            adicionarERemoverClasse(input.nextElementSibling, 'hidden-erro', 'adicionar');
            adicionarERemoverClasse(input, 'invalido', 'remover');
            adicionarERemoverClasse(input, 'placeholder', 'adicionar');
            adicionarERemoverClasse(input, 'valido', 'remover');
        }
    });
};

const inputsValidado = (input) => {
    adicionarERemoverClasse(input.nextElementSibling, 'hidden-erro', 'adicionar');
    adicionarERemoverClasse(input, 'invalido', 'remover');
    adicionarERemoverClasse(input, 'placeholder', 'remover');
    adicionarERemoverClasse(input, 'valido', 'adicionar');
    inputsPadrao();
};

inputs.forEach(input => {
    input.addEventListener('change', () => inputsValidado(input));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validacaoInputs();
});