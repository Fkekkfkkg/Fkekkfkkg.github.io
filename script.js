// Obtener referencias a los elementos del DOM
const addForm = document.getElementById('add-form');
const nameInput = document.getElementById('name-input');
const quantityInput = document.getElementById('quantity-input');
const inventoryBody = document.getElementById('inventory-body');

// Contador para generar un ID único para cada producto
let idCounter = 1;

// Función para agregar un producto al inventario
function addProduct(name, quantity) {
  // Crear una nueva fila en la tabla
  const row = inventoryBody.insertRow();

  // Agregar celdas a la fila
  const idCell = row.insertCell();
  const nameCell = row.insertCell();
  const quantityCell = row.insertCell();

  // Asignar valores a las celdas
  idCell.textContent = idCounter++;
  nameCell.textContent = name;
  quantityCell.textContent = quantity;
}

// Manejador de eventos para el formulario de agregar producto
addForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const quantity = quantityInput.value;

  if (name && quantity) {
    addProduct(name, quantity);

    // Limpiar los campos del formulario
    nameInput.value = '';
    quantityInput.value = '';
  }
});
