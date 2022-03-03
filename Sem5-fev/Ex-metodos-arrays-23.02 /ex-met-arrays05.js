// Fila de atendimento 2.0


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


function agendarPaciente(listaPacientes, pacientesAserAgendado) {
    listaPacientes.push(pacientesAserAgendado)
    console.log(listaPacientes.join(", "))
    //console.log(listaPacientes)
}

function atenderPaciente(listaPacientes) {
    listaPacientes.shift();
    console.log(listaPacientes.join(", "))
}

function cancelamentoAtendimento(listaPacientes, pacienteAserCancelados) {
    const cancelamento = listaPacientes.indexOf(pacienteAserCancelados)
    const resultado = listaPacientes.splice(cancelamento, 1,)
    // conseguimos juntar as 02 linhas acima
    console.log(listaPacientes.join(", "))
}


agendarPaciente(pacientes, "Marco")
atenderPaciente(pacientes, "Flavio")
cancelamentoAtendimento(pacientes, "Ana")
