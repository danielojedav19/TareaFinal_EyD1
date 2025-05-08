import { torneo } from './torneo.js';

function ejecutarTorneo() {
    // Crear una instancia del torneo con el nombre, puse el ejmplo que habia en el profe
    const torneo1 = new torneo("World Cup 1998 - Group A");

    // Agregar equipos al torneo
    torneo1.agregarEquipo("Brazil");
    torneo1.agregarEquipo("Norway");
    torneo1.agregarEquipo("Morocco");
    torneo1.agregarEquipo("Scotland");

    // Registrar los partidos con los goles anotados
    torneo1.registrarPartido("Brazil", 2, "Scotland", 1);
    torneo1.registrarPartido("Norway", 2, "Morocco", 1);
    torneo1.registrarPartido("Brazil", 3, "Morocco", 0);
    torneo1.registrarPartido("Scotland", 1, "Norway", 1);
    torneo1.registrarPartido("Brazil", 1, "Norway", 2);
    torneo1.registrarPartido("Morocco", 3, "Scotland", 0);

    // Obtenemos la clasificación de los equipos
    const clasificacion = torneo1.obtenerClasificacion();

    // se muestra enn lsa  consola
    console.log("Clasificación del Torneo:");
    clasificacion.forEach((equipo, index) => {
        console.log(`${index + 1}) ${equipo.nombre} ${equipo.puntos} puntos, ${equipo.ganados} ganados, ${equipo.golesAFavor} goles a favor, ${equipo.golesEnContra} goles en contra`);
    });
}

// ejecutamos el torneo
ejecutarTorneo();
