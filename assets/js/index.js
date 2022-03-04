import Cliente from "./modules/Cliente.js";
import Impuestos from "./modules/Impuestos.js";

const formId = document.getElementById("form");
const nombreClienteId = document.getElementById("nombreCliente");
const montoBrutoAnualId = document.getElementById("montoBrutoAnual");
const deduccionesId = document.getElementById("deducciones");
const theadId = document.getElementById("theadId");
const tbodyId = document.getElementById("tbodyId");
const btnEliminarId = document.getElementById("btnEliminarId");


const resetInput = () => {
  nombreClienteId.value = "";
  montoBrutoAnualId.value = "0";
  deduccionesId.value = "0";
};

formId.addEventListener("submit", (e) => {
  const data = [];
  const impuestoCliente = new Impuestos(
    montoBrutoAnualId.value,
    deduccionesId.value
  );
  const nuevoCliente = new Cliente(nombreClienteId.value, impuestoCliente);
  e.preventDefault();
  data.push(nuevoCliente);
  /*
  console.log(/^\s+$/.test(nombreClienteId.value));
  console.log(nombreClienteId.value.length);
  console.log(montoBrutoAnualId.value);
  console.log(deduccionesId.value); 
  */
  if (
    nombreClienteId.value.length > 0 &&
    /^\s+$/.test(nombreClienteId.value) == false &&
    montoBrutoAnualId.value >= 0 &&
    deduccionesId.value >= 0
  ) {
    theadId.innerHTML = `<tr>
    <th scope="col">Nombre</th>
    <th scope="col">Ingreso Bruto Anual</th>
    <th scope="col">Deducciones</th>
    <th scope="col">Impuesto a Pagar</th>
    </tr>`;

    tbodyId.innerHTML += `<tr>
    <td>${nuevoCliente.nombre}</td>
    <td>${impuestoCliente.montoBrutoAnual}</td>
    <td>${impuestoCliente.deducciones}</td>
    <td>${nuevoCliente.calcularImpuesto()}</td>
    </tr>`;

    btnEliminarId.classList.remove("d-none");
    resetInput();
  } else {
    alert("Completa los datos del formulario");
  }
});

btnEliminarId.addEventListener("click", () => {
  resetInput();
  theadId.innerHTML = "";
  tbodyId.innerHTML = "";
  btnEliminarId.classList.add("d-none");
});
