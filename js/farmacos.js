let miFarmaco=`
<div class="contenedor">
`

for(let elemento of data){
    //itero y muestro los farmacos 1 a 1
    miFarmaco = miFarmaco + `
        <div class="=farmacos">
            <table>
                <tr>
                    <td>${elemento.codigo_barras}</td>
                    <td>${elemento.nombre}</td>
                    <td>${elemento.presentacion}</td>
                    <td>${elemento.laboratorio}</td>
                    <td>${elemento.concentracion}</td>
                    <td>${elemento.lote}</td>
                    <td>${elemento.stock}</td>
                    <td>${elemento.fecha_vencimiento}</td>
                </tr>
            </table>
        </div>
    `

}

document.querySelector("main").innerHTML=miFarmaco


function abrirModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Función para cerrar el modal de carga de fármacos
  function cerrarModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Función para agregar un nuevo fármaco
  function agregarFarmaco() {
    const codigo_barras = document.getElementById("codigo_barras").value;
    const nombre = document.getElementById("nombre").value;
    const presentacion = document.getElementById("presentacion").value;
    const laboratorio = document.getElementById("laboratorio").value;
    const concentracion = document.getElementById("concentracion").value;
    const lote = document.getElementById("lote").value;
    const stock = document.getElementById("stock").value;
    const fecha_vencimiento = document.getElementById("fecha_vencimiento").value;
  
    const nuevodata = {
      codigo_barras: codigo_barras,
      nombre: nombre,
      presentacion: presentacion,
      laboratorio: laboratorio,
      concentracion: concentracion,
      lote: lote,
      stock: stock,
      fecha_vencimiento: fecha_vencimiento
    };
  
    data.push(nuevodata);
    actualizarTabla();
  
    document.getElementById("formulario").reset();
    cerrarModal();
  }
  
  // Función para resaltar la fecha de vencimiento en la tabla
  function resaltarFechas() {
    const fechaActual = new Date();
  
    farmacos.forEach(data => {
      const fecha_vencimiento = new Date(data.fecha_vencimiento);
      const diferenciaMeses = (fecha_vencimiento - fechaActual) / (1000 * 60 * 60 * 24 * 30);
  
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
    const tablaFarmacos = document.getElementById("data");
  
    // Limpiar la tabla antes de actualizarla
    while (tablaFarmacos.rows.length > 1) {
      tablaFarmacos.deleteRow(1);
    }
  
    // Agregar fármacos a la tabla
    data.forEach(data => {
      const fila = data.insertRow();
      fila.id = data.codigo_barras;
  
      const codigo_barras = fila.insertCell();
      codigo_barras.innerHTML = data.codigo_barras;
  
      const nombre = fila.insertCell();
      nombre.innerHTML = data.nombre;
  
      const presentaccion = fila.insertCell();
      presentacion.innerHTML = data.presentacion;

      const laboratorio = fila.insertCell();
      laboratorio.innerHTML = data.laboratorio;
  
      const concentracion = fila.insertCell();
      concentracion.innerHTML = data.concentracion;
  
      const lote = fila.insertCell();
    lote.innerHTML = data.lote;
  
      const stock = fila.insertCell();
      stock.innerHTML = data.stock;
  
      const fecha_vencimiento = fila.insertCell();
      fecha_vencimiento.innerHTML = data.fecha_vencimiento;
  
      resaltarFechas();
    });
  }
  
  // Event listener para el formulario de carga de fármacos
  document.getElementById