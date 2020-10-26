function trocarTela(event) {
    event.preventDefault();

    document.getElementsByClassName('list')[0].classList.toggle('d-none');
    document.getElementsByClassName('register')[0].classList.toggle('d-none');
}

function salvar(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo');
    const texto = document.getElementById('texto');
    let valido = true;

    resetarErros(titulo, texto);

    if (titulo.value.length === 0 || titulo.value.length > 20) {
        titulo.classList.add('error');
        valido = false;
    }

    if (texto.value.length === 0) {
        texto.classList.add('error');
        valido = false;
    }

    if (valido === false) {
        document.getElementsByClassName('alert-danger')[0].classList.remove('d-none');
    } else {
        // Salvar
        resetarErros(titulo, texto);
    }
}

function resetarErros(titulo, texto) {
    titulo.classList.remove('error');
    texto.classList.remove('error');
    document.getElementsByClassName('alert-danger')[0].classList.add('d-none');
}

function editar(){
    editando.getElementsByClassName('h2')[0].innerHTML = titulo.value;
    editando.getElementsByClassName('card-text')[0].innerHTML = titulo.value;

    editando = null;
}

function pesquisar(event){
    //event.target.value
    let cards = documento.getElementsByClassName('card');

    for(card of cards){
        
        if(!card.getElementsByClassName('h2')[0].innertText.toUpperCase()
        .includes(event.target.value.toUpperCase())){;
        card.parentnode.classList.add('d-none');
    }else{
        card.parentnode.classList.remove('d-none');
    }
    if(!card.getElementsByClassName('card-text')[0].innertText.toUpperCase()
    .includes(event.target.value.toUpperCase())){;
    card.parentnode.classList.add('d-none');
}else{
    card.parentnode.classList.remove('d-none');
}
}
}
