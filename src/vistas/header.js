import { login } from "./login";

// Obtén la referencia al elemento <main>
const main = document.querySelector('main');

// Funciones para cargar las diferentes vistas en <main>
function loadPanel() {
  main.innerHTML = '<h1>Vista del Panel</h1>';
}

function loadLogin() {
  main.innerHTML = login.template;
}

function loadRegistro() {
  main.innerHTML = '<h1>Vista del Registro</h1>';
}

// Añade un evento 'click' a los botones del encabezado
document.addEventListener('click', function(event) {
  if (event.target.matches('.btn-panel')) {
    loadPanel();
  } else if (event.target.matches('.btn-login')) {
    loadLogin();
  } else if (event.target.matches('.btn-registro')) {
    loadRegistro();
  }
});

// Define la lógica del encabezado
export const header = {
  template: `
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
          <div>
            <button class="btn btn-secondary ms-2 btn-panel">PANEL</button>
            <button class="btn btn-secondary ms-2 btn-login">LOGIN</button>
            <button class="btn btn-secondary ms-2 btn-registro">REGISTRO</button>
          </div>
          <div>
            <span>administrador@fpllefia.com</span>
          </div>
        </div>
      </nav>
    </header>
  `,
  script: () => {
    console.log('header cargado');
  }
};
