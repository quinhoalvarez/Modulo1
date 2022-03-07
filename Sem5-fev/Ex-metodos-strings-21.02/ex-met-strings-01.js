// Sistema de filtro de comentários

// Forma 1
const comentario = "Esse COVID é muito perigoso!";

if (comentario.toLowerCase().includes("covid") || comentario.toLowerCase().includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário Autorizado")
}

