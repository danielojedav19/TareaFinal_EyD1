import { torneo } from './torneo.js';

function resolverTorneo(cadenaTorneo) {
    // Dividir la cadena en 3 partes usando "--"
    const [nombreTorneo, equiposStr, partidosStr] = cadenaTorneo.trim().split("--");

    // Lista de equipos
    const listaEquipos = equiposStr.split(",").map(e => e.trim());

    // Crear instancia del torneo
    const torneo1 = new torneo(nombreTorneo.trim());

    // Agregar equipos
    listaEquipos.forEach(equipo => torneo1.agregarEquipo(equipo));

    // Lista de partidos (separados por coma)
    const partidos = partidosStr.split(",").map(p => p.trim());

    // Procesar partidos
    partidos.forEach(partido => {
        // Formato: equipo1#goles1#goles2#equipo2
        const [equipo1, goles1, goles2, equipo2] = partido.split("#");
        torneo1.registrarPartido(equipo1.trim(), parseInt(goles1), equipo2.trim(), parseInt(goles2));
    });

    // Obtener clasificación xd
    const clasificacion = torneo1.obtenerClasificacion();

    // Crear la salida
    let resultadoFinal = nombreTorneo.trim() + "\n";
    clasificacion.forEach((equipo, index) => {
        resultadoFinal += `${index + 1}) ${equipo.nombre} ${equipo.puntos} puntos, ${equipo.ganados} ganados, ${equipo.golesAFavor} goles a favor, ${equipo.golesEnContra} goles en contra\n`;
    });

    return resultadoFinal.trim();
}

export { resolverTorneo };
