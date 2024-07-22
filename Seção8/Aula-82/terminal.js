// XMLHttpsRequest (GET) + Promises

//xml = XMLHttpsRequest 
//request = função que vai buscar algumas páginas


const request  = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            //Verficação
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    });
   
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

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };

    const response = await request(objConfig);
    carregaResultado(response)
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// Fetch API (GET)

fetch('pagina1.html', {})
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('Erro 404 nosso')
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));