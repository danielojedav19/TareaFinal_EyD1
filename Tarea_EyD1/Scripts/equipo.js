
class equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
        this.ganados = 0;
        this.golesAFavor = 0;
        this.golesEnContra = 0;
        this.partidosJugados = 0;
    }

    // Actualiza las estadísticas según el resultado de un partido
    actualizarEstadisticas(golesAnotados, golesRecibidos) {
        this.partidosJugados += 1;
        this.golesAFavor += golesAnotados;
        this.golesEnContra += golesRecibidos;

        if (golesAnotados > golesRecibidos) {
            this.puntos += 3;
            this.ganados += 1;
        } else if (golesAnotados === golesRecibidos) {
            this.puntos += 1;
        }
        // No se suman puntos en caso de derrota
        // creo que era asi muchachos, que si no se pone un els que sume puntos significa que si el equipo pierde, no gana puntos. si no es asi toca poner el else
    }

    // Retorna la diferencia de gol
    obtenerDiferenciaGol() {
        return this.golesAFavor - this.golesEnContra;
    }
}

export { equipo };
