import { equipo } from './equipo.js';

class torneo {
    constructor(nombre) {
        this.nombre = nombre;
        this.equipos = {}; // Mapa de equipos, donde la clave es el nombre del equipo
    }

    agregarEquipo(nombreEquipo) {
        if (!(nombreEquipo in this.equipos)) {
            this.equipos[nombreEquipo] = new equipo(nombreEquipo);
        }
    }

    // Registrar un partido con los goles anotados xd
    registrarPartido(equipo1, goles1, equipo2, goles2) {
        // Asegurarse de que ambos equipos existan en el torneo
        if (equipo1 in this.equipos && equipo2 in this.equipos) {
            // Actualizar las estadísticas de los equipos
            this.equipos[equipo1].actualizarEstadisticas(goles1, goles2);
            this.equipos[equipo2].actualizarEstadisticas(goles2, goles1);
        }
    }

    // Obtener la clasificación de los equipos
    obtenerClasificacion() {
        // convierto el mapa de equipos en una lista de objetos
        const equiposListados = Object.values(this.equipos);

        // Ordenar los equipos según los criterios establecidos ds la listaa
        equiposListados.sort((a, b) => {
            if (b.puntos !== a.puntos) return b.puntos - a.puntos; // Ordenar por puntos
            if (b.ganados !== a.ganados) return b.ganados - a.ganados; // Ordenar por ganados
            const diferenciaGolB = b.obtenerDiferenciaGol();
            const diferenciaGolA = a.obtenerDiferenciaGol();
            if (diferenciaGolB !== diferenciaGolA) return diferenciaGolB - diferenciaGolA; // Ordenar por diferencia de gol
            if (b.golesAFavor !== a.golesAFavor) return b.golesAFavor - a.golesAFavor; // Ordenar por goles a favor
            return a.nombre.localeCompare(b.nombre); // Ordenar por nombre de forma lexicográfica
        });

        return equiposListados;
    }
}

export { torneo };
