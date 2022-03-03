// Fila de atendimento

function filaDeAtendimento(listaPacientes, operacao, nomePaciente) {

    if (operacao === "agendar") {
        listaPacientes.push(nomePaciente)
        const resultado = listaPacientes.join(" - ")
        return resultado
    }
    if (operacao === "atender") {
        listaPacientes.shift()
        listaPacientes.join(" - ")
        const resultado = listaPacientes.join(" - ")
        return resultado
    }


}


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log(filaDeAtendimento(pacientes, "agendar", "Marco"));
console.log(filaDeAtendimento(pacientes, "atender", "Olivia"));