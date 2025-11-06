function mostrarCampos() {
  const tipo = document.getElementById('tipoUsuario').value;
  document.getElementById('facultadField').style.display = (tipo === 'Alumno' || tipo === 'Docente') ? 'block' : 'none';
  document.getElementById('areaField').style.display = (tipo === 'Administrativo') ? 'block' : 'none';
}

// Envío de registro a Google Apps Script
document.getElementById('registroForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombres: document.getElementById('nombres').value,
    dni: document.getElementById('dni').value,
    correo: document.getElementById('correo').value,
    celular: document.getElementById('celular').value,
    tipoUsuario: document.getElementById('tipoUsuario').value,
    facultad: document.getElementById('facultad').value || '',
    area: document.getElementById('area').value || '',
    password: document.getElementById('password').value
  };

  const response = await fetch('https://script.google.com/macros/s/AKfycbxnrlLxoALXchJ29OIi48WRlE_SMeVvTS-39oLOHA1ERr8AQFihbjdYfqstP9Ln8fVR/exec', {
    method: 'POST',
    body: JSON.stringify(data)
  });

  if (response.ok) alert('Usuario registrado correctamente');
  else alert('Error al registrar');
});

// Ticket dinámico
function actualizarCamposPorUsuario() {
  const tipo = document.getElementById('tipoUsuarioTicket').value;
  const contenedor = document.getElementById('camposDinamicos');
  contenedor.innerHTML = '';

  if (tipo === 'Alumno') {
    contenedor.innerHTML = `
      <label>Tipo de incidencia</label>
      <select><option>Campus Virtual</option><option>Correo Electrónico</option><option>Aula Virtual</option></select>
    `;
  } else if (tipo === 'Docente') {
    contenedor.innerHTML = `
      <label>Tipo de incidencia</label>
      <select>
        <option>Falla de equipo tecnológico</option>
        <option>Falla de periféricos</option>
        <option>Falla de Internet</option>
        <option>Falla de accesos</option>
        <option>Otros</option>
      </select>
    `;
  } else if (tipo === 'Administrativo') {
    contenedor.innerHTML = `
      <label>Tipo de incidencia</label>
      <select>
        <option>Falla de software</option>
        <option>Falla de equipo tecnológico</option>
        <option>Falla de Internet</option>
        <option>Falla de accesos</option>
      </select>
    `;
  }
}
