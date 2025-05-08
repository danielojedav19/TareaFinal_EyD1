import { torneo } from './torneo.js';

// Función que procesa la cadena de entrada y resuelve el torneo
function resolverTorneo(cadenaTorneo) {
    // Dividir la cadena en partes
    const partes = cadenaTorneo.trim().split("\n");

    // Obtener nombre del torneo
    const nombreTorneo = partes[0].trim();

    // Obtener número de equipos
    const numeroEquipos = parseInt(partes[1].trim());

    // Obtener lista de equipos
    const listaEquipos = [];
    for (let i = 2; i < 2 + numeroEquipos; i++) {
        listaEquipos.push(partes[i].trim());
    }

    // Crear una nueva instancia del torneo con el nombre
    const torneo1 = new torneo(nombreTorneo);

    // Agregar los equipos al torneo
    listaEquipos.forEach(equipo => torneo1.agregarEquipo(equipo));

    // Obtener número de partidos
    const numeroPartidos = parseInt(partes[2 + numeroEquipos].trim());

    // Registrar los partidos
    for (let i = 3 + numeroEquipos; i < 3 + numeroEquipos + numeroPartidos; i++) {
        const resultado = partes[i].trim();

        // Desglosar usando el formato: equipo1#goles1@goles2#equipo2 que nos dieron en el contexto
        const [equipo1YGoles1, goles2YEquipo2] = resultado.split('@');
        const [equipo1, goles1] = equipo1YGoles1.split('#');
        const [goles2, equipo2] = goles2YEquipo2.split('#');

        const golesAnotados1 = parseInt(goles1);
        const golesAnotados2 = parseInt(goles2);

        torneo1.registrarPartido(equipo1.trim(), golesAnotados1, equipo2.trim(), golesAnotados2);
    }

    // Obtener la clasificación final
    const clasificacion = torneo1.obtenerClasificacion();

    // Crear la salida del torneo en el formato adecuado
    let resultadoFinal = nombreTorneo + "\n";
    clasificacion.forEach((equipo, index) => {
        resultadoFinal += `${index + 1}) ${equipo.nombre} ${equipo.puntos} puntos, ${equipo.ganados} ganados, ${equipo.golesAFavor} goles a favor, ${equipo.golesEnContra} goles en contra\n`;
    });

    return resultadoFinal.trim();  // Devuelve el resultado formateado
}

export { resolverTorneo }; // este lo hice conayuda de gpeto
