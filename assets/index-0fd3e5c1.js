(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const a={template:`
  <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123460</td>
          <td>19/04/2023</td>
          <td>T8</td>
          <td>DAW2</td>
          <td>PC4</td>
          <td>Problema de acceso a archivos</td>
          <td>Pedro Gómez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123461</td>
          <td>20/04/2023</td>
          <td>T6</td>
          <td>DAW1</td>
          <td>PC1</td>
          <td>Aplicación se cierra inesperadamente</td>
          <td>Sofía Fernández</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123462</td>
          <td>21/04/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC2</td>
          <td>Problema de conexión a la red</td>
          <td>Luis Torres</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
        <tr>
          <td>123463</td>
          <td>22/04/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Archivos corruptos</td>
          <td>Carolina Ramírez</td>
          <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
          <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>

        </tr>
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>123457</td>
          <td>16/04/2023</td>
          <td>15/05/2023</td>
          <td>T7</td>
          <td>DAW2</td>
          <td>PC1</td>
          <td>Problema de conexión a Internet</td>
          <td>Maria López</td>
          
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123458</td>
          <td>17/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC2</td>
          <td>Pantalla en blanco</td>
          <td>Juan Rodríguez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
        <tr>
          <td>123459</td>
          <td>18/04/2023</td>
          <td>15/05/2023</td>
          <td>T8</td>
          <td>DAW1</td>
          <td>PC3</td>
          <td>Error de impresora</td>
          <td>Ana Martínez</td>
          <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
       
       
      </tbody>
    </table>
  `,script:()=>{console.log("panel")}},r={template:`
  <div class="pt-5">
    <h1 class="w-100 text-center">Login</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input type="text" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>
  `,script:()=>{console.log("script de login"),document.querySelector("#enviar").addEventListener("click",n=>{console.log("cargando"),document.querySelector("main").innerHTML=a.template,a.script()})}},b={template:`
  <div class="pt-5">
    <h1 class="w-100 text-center">Registro</h1>
    <form action="" class="form p-4 border shadow bordered mt-5 mx-auto" style="width: 400px;">
      <label for="email" class="mt-2 form-label">User: </label>
      <input type="text" class="form-control" placeholder="usuario@mail.com">

      <label for="pass" class="mt-2 form-label">Contraseña: </label>
      <input type="text" class="form-control">

      <input type="text" class="mt-4 w-100 btn btn-primary" value="Entrar" id="enviar">
    </form>
  </div>
  `,script:()=>{console.log("script de login"),document.querySelector("#enviar").addEventListener("click",n=>{console.log("cargando"),document.querySelector("main").innerHTML=a.template,a.script()})}},s=document.querySelector("main");function u(){s.innerHTML=a.template}function m(){s.innerHTML=r.template}function h(){s.innerHTML=b.template}document.addEventListener("click",function(n){n.target.matches(".btn-panel")?u():n.target.matches(".btn-login")?m():n.target.matches(".btn-registro")&&h()});const l={template:`
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
  `,script:()=>{console.log("header cargado")}};document.querySelector("header").innerHTML=l.template;l.script();document.querySelector("main").innerHTML=r.template;
