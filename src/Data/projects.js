import landingFood from "../assets/projects/food/landing1.PNG";
import addrecipe from "../assets/projects/food/addrecipe.PNG";
import form from "../assets/projects/food/form.PNG";
import homeFood from "../assets/projects/food/home.png";
import food from "../assets/projects/food/landing.PNG";
import {
  login,
  registrarse,
  actualizar,
  recuperar,
} from "../assets/projects/Login";

import {
  gamesHome,
  gamesHome2,
  gamesIpad,
  gamesMobile,
} from "../assets/projects/games";

import {
  mecanuHome,
  mecanuNotificacion,
  mecanuResumen,
  mecanuServicios,
} from "../assets/projects/mecanu";
import {
  petagramFiltros,
  petagramHome,
  petagramPanel,
  petagramMascotas,
} from "../assets/projects/petagram";

// {
//   title: "",
//   image: "",
//   description: "",
//   data: [{ description: "", image: "" }],
// }
const projects = [
  {
    title: "Food",
    image: food,
    url: "https://foodfront-production.up.railway.app/",
    description:
      "Desarrollo de una SPA utilizando React para el Front End y Redux como state management. Estilos con CSS sin uso de librerias externas. La SPA consume datos de una API a través de un Back End desarrollado en NodeJs utilizando Express",
    data: [
      {
        description:
          "Landing Page, modulo inicial que el usuario visualizara al ingresar al sitio, se busca llamar la atencion del mismo y brinda una breve descripcion",
        image: landingFood,
      },
      {
        description:
          "El Usuario podra ver las recetas disponibles, realizar busquedas, realizar filtros, ordenamientos, ver detalles y navegar mediante paginado",
        image: homeFood,
      },
      {
        description:
          "El sistema permite realizar registros des nuevas recetas, cuenta con un formulario con validaciones para cada campo",
        image: form,
      },
      {
        description:
          "El usuario puede realizar en una misma transaccion el registro de varias recetas.",
        image: addrecipe,
      },
    ],
  },
  {
    title: "Mecanu",
    image: mecanuHome,
    description:
      "Mecanu es una empresa que brinda servicios automotriz. El trabajo consistio en replantear el flujo de cotizacion de servicios lo que llevo a hacer un analisis de requirimientos, diseño del sistema (figma) y codificacion del mismo. Tecnologias: Nextjs, Tailwind, Node Js, Express, Sequelize",
    data: [
      {
        description:
          "Home Page, El sistema muestra un panorama general del funcionamentos del sitio. Autenticacion mediante FireBase",
        image: mecanuHome,
      },
      {
        description:
          "Se implemento un nuevo diseño para mostrar los servicios primarios y secundario. Implementando una interfaz clara y amigable para el Usuario. Los servicios que requieren respuestos son mostrados mediante modales.",
        image: mecanuServicios,
      },
      {
        description:
          "El sistema cuenta con validaciones en cada operacion, por ej, en caso que el usuario pretenda continuar con la operacion sin antes seleccionar un servicio el sistema notifica lo siguiente",
        image: mecanuNotificacion,
      },
      {
        description:
          "Una vez obenido el tipo de servicio, datos del vehiculo como marca, modelo, kilometraje. El sistema muestra al usuario un resumen por los servicios requeridos, permitiendo la modificacion de los mismos con un presupuesto actualizado al instante",
        image: mecanuResumen,
      },
    ],
  },
  {
    title: "Petagram",
    image: petagramHome,
    description:
      "Petagram es SPA, en proceso, realizado con Ract, Redux Toolki, Tailwind, Nodejs, Express y Auth0. Es un sistema con tematica de red social orientado a mascotas, con el fin de publicar contenido con fines de socializar, buscar parejas y notificar por mascotas sin hogar ",
    data: [
      {
        description:
          "Home Page. El sistema muestra un una visualizacion previa, para continuar el usuario debe iniciar sesion, el cual es gestionado con Aut0",
        image: petagramHome,
      },
      {
        description:
          "Al iniciar sesion el usuario podra gestionar mas de un perfil de sus mascotas, el sistema permite la seleccion del perfil deseado, una vez seleccionado las publicaciones tendran como autor a la mascota actual",
        image: petagramMascotas,
      },
      {
        description:
          "El usuario podra visualizar las publicaciones de otros usuarios, ademas se permite la interaccion a traves de reacciones",
        image: petagramPanel,
      },
      {
        description:
          "Filtros: el usuario podra buscar mascotas que buscan parejas, perdidos, en adopcion, paseadores de mascotas permitiendo realizar filtros mas especificos segun la ubicacion y especie.",
        image: petagramFiltros,
      },
    ],
  },
  {
    title: "Vide Games",
    image: gamesHome,
    description:
      "Desarrollo de proyecto con tematica de video Juegos. El fin del proyecto fue familiarizarse con el CSS framework Tailwind (El proyecto es totalmente responsive). Tecnologias: React, Tailwind, react-router-dom, react-icons",
    data: [
      {
        description:
          "Home Page, se renderizan componentes como un sidebar que contiene items de navegacion, una seccion de busqueda, panel de navegacion e imagen principal",
        image: gamesHome,
      },
      {
        description:
          "En la parte inferior se observa un renderizado de componentes de tipo cards, cada una de ellas representa un juego y algunos con descuentos.",
        image: gamesHome2,
      },
      {
        description:
          "El sistema es totalmente responsive en tablets y sus variaciones de resolucion",
        image: gamesIpad,
      },
      {
        description:
          "Responsive en dispositivos mobiles. La barra de menu se oculta y se activa haciendo click en el boton ubicado en la parte inferior derecha.",
        image: gamesMobile,
      },
    ],
  },
  {
    title: "Login",
    image: login,
    description:
      "Mini proyecto SPA Login, Tecnologias usadas: Ract, Tailwind, react-router-dom, toast. Se raliza un sistema que emula las diferentes interfaces de un sistema de Login",
    data: [
      {
        description:
          "Interfaz de Inicio de Sesion, el sistema notifica al usuario en case de detectar un campo vacio.",
        image: login,
      },
      {
        description:
          "Interfaz de registro de Usuario, el sistema solicita una serie de datos relevantes para el registro",
        image: registrarse,
      },
      { description: "Interfaz Recuperar contraseña", image: recuperar },
      {
        description: "Interfaz que simula la operacion recuperar contraseña",
        image: actualizar,
      },
    ],
  },
];

export default projects;
