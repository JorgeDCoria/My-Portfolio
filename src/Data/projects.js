import landingFood from "../assets/projects/food/landing1.PNG";
import addrecipe from "../assets/projects/food/addrecipe.PNG";
import form from "../assets/projects/food/form.PNG";
import homeFood from "../assets/projects/food/home.png";
import food from "../assets/projects/food/landing.PNG";

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
];

export default projects;
