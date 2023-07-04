const productos = [
  { nombre: 'Aqua', precio: 200 },
  { nombre: 'Emoción', precio: 180 },
  { nombre: 'Alegría', precio: 160 },
  { nombre: 'Frescura', precio: 150 }
];

//Calclar el total de cada vendedor
function calcularTotalRecaudado(vendedor) {
  const inputs = document.getElementById(vendedor.toLowerCase()).getElementsByTagName('input');
  let total = 0;

  for (let i = 0; i < productos.length; i++) {
    const cantidad = parseInt(inputs[i].value || '0', 10);

    if (isNaN(cantidad)) {
      alert('Error: Debe ingresar un valor numérico.');
      return;
    } else if (cantidad < 0){
      alert('Error: Debe ingresar un valor numérico superior a cero.');
      return;
    }

    total += cantidad * productos[i].precio;
  }
  console.log(`Total recaudado: $${total}`);
  document.getElementById(`${vendedor.toLowerCase()}-total`).textContent = `Total recaudado: $${total}`;
}

// Para determinar al empleado del mes
function determinarEmpleadoDelMes() {
  const totalJuana = parseInt(document.getElementById('juana-total').textContent.split('$')[1]);
  const totalPedro = parseInt(document.getElementById('pedro-total').textContent.split('$')[1]);

  if (totalJuana > totalPedro) {
    console.log('Empleado del mes: Juana');
    document.getElementById('empleado-mes').textContent = 'Empleado del mes: Juana';
  } else if (totalPedro > totalJuana) {
    console.log('Empleado del mes: Pedro');
    document.getElementById('empleado-mes').textContent = 'Empleado del mes: Pedro';
  } else {
    console.log('Hubo un empate. No se puede determinar un empleado del mes.');
    document.getElementById('empleado-mes').textContent = 'Hubo un empate. No se puede determinar un empleado del mes.';
  }
}