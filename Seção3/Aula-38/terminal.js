try {
    // É executada quando não há erros
    console.log(a) 
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch(e) {
    // É executada quando  
    console.log('Tratando o erro');
} finally {
    // É executado sempre
    console.log('FINALLY: Eu sempre sou excecutado');
}






function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digite',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date ('01-01-1970 ')
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia!')
}
