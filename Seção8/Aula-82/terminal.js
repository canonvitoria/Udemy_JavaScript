// XMLHttpsRequest (GET) + Promises

//xml = XMLHttpsRequest
//request = função que vai buscar algumas páginas


const request  = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        //Verficação
        if (xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    })
   
    //Se fosse metodo POST, recebendo de um formulário
    //xhr.send('dados do formulario')
}

//Capturar os eventos dos cliques
document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    //Checkar se a tag seria um <a>
    if(tag === 'a') {
        //Previne o evento
        e.preventDefault();
        carregaPagina(element);
    }
})

function carregaPagina(element) {
    const href = element.getAttribute('href');

    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}