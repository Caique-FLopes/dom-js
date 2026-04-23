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

// const classList = ["ativado", "teste", "fechado"];

// classList.includes("ativado")

