const btnMenu = document.querySelector('#header nav button');

btnMenu.addEventListener('click', function (){
    const menuExpansivo = document.querySelector('#header nav ul');
    
    // //transforma o DOMTokenList em um Array
    // const classes = Array.from(menuExpansivo.classList);

    // //se existir o valor "ativado" dentro do array de classes
    // if(classes.includes("ativado")){
    //     //remove a classe da lista
    //     menuExpansivo.classList.remove("ativado");
    // }else {
    //     //adiciona a classe da lista
    //     menuExpansivo.classList.add("ativado");
    // }

    menuExpansivo.classList.toggle("ativado");
});

const btnEnviar = document.querySelector("#enviarForm");
const btnLimpar = document.querySelector("#limparForm");
const formContato = document.querySelector("#formContato");

const inputCpf = document.querySelector('#cpf');
const inputEmail = document.querySelector('#email');
const inputTel = document.querySelector('#tel');

//arrow function () => {}
//função anonima = só existe naquele escopo
btnLimpar.addEventListener('click', (event) => {
    event.preventDefault();
    limparForm();
});

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    enviarForm();
})

function limparForm(){
    formContato.reset();
}

function enviarForm(){
    if(inputCpf.value == ""){
        document.querySelector(".messageError.cpf").innerText = "Preencha o CPF";
        inputCpf.classList.add("inputError");
    };

    if(inputEmail.value == ""){
        document.querySelector(".messageError.email").innerText = "Preencha o Email";
        inputEmail.classList.add("inputError");
    };

    if(inputTel.value == ""){
        document.querySelector(".messageError.tel").innerText = "Preencha o Telefone";
        inputTel.classList.add("inputError");
    };   
};

inputCpf.addEventListener('keyup', (event) => {
    if(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(event.target.value)){
        event.target.classList.remove("inputError")
        event.target.classList.add("inputSucess")
        document.querySelector(".messageError.cpf").innerText = "";
    }
});