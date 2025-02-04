const livros = ["Harry Potter", "O Senhor dos Anéis", "Crepúsculo", "Percy Jackson"];
const nomeDoLivro = "Crepúsculo";

const indiceDoLivro = livros.indexOf(nomeDoLivro); 

if (indiceDoLivro !== -1) {
    console.log(`O livro está na posição ${indiceDoLivro}`);
} else {
    console.log("O livro não foi encontrado.");
}
