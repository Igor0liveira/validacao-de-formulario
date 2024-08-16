/* Olá mentores, esse foi o primeiro código de Js desse desafio que fiz, encontrei dificuldades em solucionar as quests solicitadas, mas depois de muita revisão nos resumos e um google eu consegui resolver, em pequenos passos mas consegui. Minha primeira meta era conseguir fazer funcionar, quando consegui, fiquei muito feliz, mas vi que dava para melhorar esse código pois tinha muita repetição, e isso é muito ruim para dar manutenção,  sabia que precisava usar algum laço, porém não estava conseguindo obter resultados, mas alguns dias estudando e revisando eu consegui refatorar o máximo possível, e esse código está no arquivo "validacao.js". Espero que gostem do resultado, VALEEU */



//primeiro código

const form = document.querySelector('.form')
const inputName = document.querySelector("input[name='nome']") 
const inputEmail = document.querySelector("input[name='email']") 
const inputTelefone = document.querySelector("input[name='telefone']") 
const inputMensagem = document.querySelector("textarea") 

const validacaoInputs = () =>{
    if(!inputName.value){
        inputName.nextElementSibling.classList.remove('hidden-erro')
        inputName.classList.add('invalido')
    }

    if(!inputEmail.value){
        inputEmail.nextElementSibling.classList.remove('hidden-erro')
        inputEmail.classList.add('invalido')
    }

    if(!inputTelefone.value){
        inputTelefone.nextElementSibling.classList.remove('hidden-erro')
        inputTelefone.classList.add('invalido')
    }

    if(!inputMensagem.value){
        inputMensagem.nextElementSibling.classList.remove('hidden-erro')
        inputMensagem.classList.add('invalido')
    }
}

const padrao = () =>{
    if(!inputName.value){
        inputName.nextElementSibling.classList.add('hidden-erro')
        inputName.classList.remove('invalido')
        inputName.classList.add('placeholder')
        inputName.classList.remove('valido')
    }

    if(!inputEmail.value){
        inputEmail.nextElementSibling.classList.add('hidden-erro')
        inputEmail.classList.remove('invalido')
        inputEmail.classList.add('placeholder')
        inputEmail.classList.remove('valido')
    }

    if(!inputTelefone.value){
        inputTelefone.nextElementSibling.classList.add('hidden-erro')
        inputTelefone.classList.remove('invalido')
        inputTelefone.classList.add('placeholder')
        inputTelefone.classList.remove('valido')
    }

    if(!inputMensagem.value){
        inputMensagem.nextElementSibling.classList.add('hidden-erro')
        inputMensagem.classList.remove('invalido')
        inputMensagem.classList.add('placeholder')
        inputMensagem.classList.remove('valido')
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validacaoInputs()
})

inputName.addEventListener('change', ()=>{
    inputName.nextElementSibling.classList.add('hidden-erro')
    inputName.classList.remove('invalido')
    inputName.classList.remove('placeholder')
    inputName.classList.add('valido')
    padrao()
})

inputEmail.addEventListener('change', ()=>{
    inputEmail.nextElementSibling.classList.add('hidden-erro')
    inputEmail.classList.remove('invalido')
    inputEmail.classList.remove('placeholder')
    inputEmail.classList.add('valido')
    padrao()
})

inputTelefone.addEventListener('change', ()=>{
    inputTelefone.nextElementSibling.classList.add('hidden-erro')
    inputTelefone.classList.remove('invalido')
    inputTelefone.classList.remove('placeholder')
    inputTelefone.classList.add('valido')
    padrao()
})

inputMensagem.addEventListener('change', ()=>{
    inputMensagem.nextElementSibling.classList.add('hidden-erro')
    inputMensagem.classList.remove('invalido')
    inputMensagem.classList.remove('placeholder')
    inputMensagem.classList.add('valido')
    padrao()
})
