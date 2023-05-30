// Array para almacenar los fármacos
let farmacos = [];

//la idea es obteniendo la autorización de ANMAT importar
// la BdD de fármacos y cargar el stock escaneando el Código
// de Barras e ingresando la cantidad manualmente
//http://anmatvademecum.servicios.pami.org.ar/index.html

// Función para abrir el modal de carga de fármacos
function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

// Función para cerrar el modal de carga de fármacos
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Función para agregar un nuevo fármaco
function agregarFarmaco() {
  const codigoBarras = document.getElementById("codigoBarras").value;
  const nombre = document.getElementById("nombre").value;
  const presentacion = document.getElementById("presentacion").value;
  const concentracion = document.getElementById("concentracion").value;
  const lote = document.getElementById("lote").value;
  const stock = document.getElementById("stock").value;
  const fechaVencimiento = document.getElementById("fechaVencimiento").value;

  const nuevoFarmaco = {
    codigoBarras: codigoBarras,
    nombre: nombre,
    presentacion: presentacion,
    concentracion: concentracion,
    lote: lote,
    stock: stock,
    fechaVencimiento: fechaVencimiento
  };

  farmacos.push(nuevoFarmaco);
  actualizarTabla();

  document.getElementById("formulario").reset();
  cerrarModal();
}

// Función para resaltar la fecha de vencimiento en la tabla
function resaltarFechas() {
  const fechaActual = new Date();

  farmacos.forEach(farmaco => {
    const fechaVencimiento = new Date(farmaco.fechaVencimiento);
    const diferenciaMeses = (fechaVencimiento - fechaActual) / (1000 * 60 * 60 * 24 * 30);

    const fila = document.getElementById(farmaco.codigoBarras);

    if (diferenciaMeses <= 2) {
      fila.classList.add("red");
    } else if (diferenciaMeses <= 6) {
      fila.classList.add("yellow");
    } else {
      fila.classList.add("green");
    }
  });
}

// Función para actualizar la tabla de fármacos
function actualizarTabla() {
  const tablaFarmacos = document.getElementById("tablaFarmacos");

  // Limpiar la tabla antes de actualizarla
  while (tablaFarmacos.rows.length > 1) {
    tablaFarmacos.deleteRow(1);
  }

  // Agregar los fármacos a la tabla
  farmacos.forEach(farmaco => {
    const fila = tablaFarmacos.insertRow();
    fila.id = farmaco.codigoBarras;

    const celdaCodigoBarras = fila.insertCell();
    celdaCodigoBarras.innerHTML = farmaco.codigoBarras;

    const celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = farmaco.nombre;

    const celdaPresentacion = fila.insertCell();
    celdaPresentacion.innerHTML = farmaco.presentacion;

    const celdaConcentracion = fila.insertCell();
    celdaConcentracion.innerHTML = farmaco.concentracion;

    const celdaLote = fila.insertCell();
    celdaLote.innerHTML = farmaco.lote;

    const celdaStock = fila.insertCell();
    celdaStock.innerHTML = farmaco.stock;

    const celdaFechaVencimiento = fila.insertCell();
    celdaFechaVencimiento.innerHTML = farmaco.fechaVencimiento;

    resaltarFechas();
  });
}

// Event listener para el formulario de carga de fármacos
document.getElementById
