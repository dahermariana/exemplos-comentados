function bibliotecas(biblioteca: string[]) {
    // Inverte a ordem do array
    const bibliotecaInvertida = biblioteca.reverse();

    // Inicializa uma string para armazenar o resultado
    let resultado: string = '';

    // Itera sobre cada livro na biblioteca invertida
    for(const livro of bibliotecaInvertida) {
        resultado += livro + '\n'; // Adiciona o livro ao resultado com uma nova linha
    }

    // Imprime o resultado
    console.log(resultado);
}

// Chama a função com um array de livros
bibliotecas(["Harry Potter", "O Senhor dos Anéis", "Crepúsculo", "Percy Jackson"]);