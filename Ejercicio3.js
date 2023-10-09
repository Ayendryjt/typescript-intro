class Tarea {
    constructor(descripcion, completada = false) {
      this.descripcion = descripcion;
      this.completada = completada;
    }
  
    marcarComoCompletada() {
      this.completada = true; 
    }
  
    desmarcarComoCompletada() {
      this.completada = false;
    }
  }
  
  class ListaDeTareas {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(descripcion) {
      const nuevaTarea = new Tarea(descripcion);
      this.tareas.push(nuevaTarea);
    }
  
    marcarTareaComoCompletada(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].marcarComoCompletada();
      }
    }
  
    desmarcarTareaComoCompletada(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].desmarcarComoCompletada();
      }
    }
  
    listarTareas() {
      console.log("Lista de tareas:");
      this.tareas.forEach((tarea, indice) => {
        const estado = tarea.completada ? "Completada" : "Pendiente";
        console.log(`${indice + 1}. ${tarea.descripcion} - Estado: ${estado}`);
      });
    }
  }
  
  // Ejemplo de uso
  const lista = new ListaDeTareas();
  
  lista.agregarTarea("Hacer la compra");
  lista.agregarTarea("Lavar el coche");
  lista.agregarTarea("Estudiar para el examen");
  
  lista.marcarTareaComoCompletada(0);
  lista.marcarTareaComoCompletada(2);
  
  lista.listarTareas();