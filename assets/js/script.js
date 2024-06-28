function handleVideoSwitch() {
  var videoDesktop = document.getElementById("video-desktop");
  var videoMedium = document.getElementById("video-medium");
  var videoMobile = document.getElementById("video-mobile");

  if (window.innerWidth <= 600) {
    videoDesktop.style.display = "none";
    videoMedium.style.display = "none";
    videoMobile.style.display = "block";
  } else if (window.innerWidth >= 601 && window.innerWidth <= 1024) {
    videoDesktop.style.display = "none";
    videoMedium.style.display = "block";
    videoMobile.style.display = "none";
  } else {
    videoDesktop.style.display = "block";
    videoMedium.style.display = "none";
    videoMobile.style.display = "none";
  }
}

window.addEventListener("load", handleVideoSwitch);
window.addEventListener("resize", handleVideoSwitch);

 // JavaScript
        $(document).ready(function () {
            var data = {
              gallery: [
                {
                  title: "Rompecabezas",
                  img: "./assets/img/rompecabezas.png",
                  alt: "lorem",
                  texto: "",
                  modalTitle: "Proyecto Rompecabezas",
                  modalHeader: "Rompecabezas",
                  modalDescription:
                    "es una APP educativa para niños que permite armar puzzle de energías renovables. Con una variedad de rompecabezas temáticos, los niños pueden explorar y aprender sobre fuentes de energía limpia como solar, eólica.",
                  modalDetails:
                    "Desarrollado en JavaScript, permite a los niños aprender mientras juegan, fomentando el uso de energías renovables a través de una actividad lúdica.",
                  modalTech: "Html, Css, JavaScript (LocalStorage)",
                  modalLink: "https://delmonicocl.github.io/LaiaBCN/",
                  modalLinkText: "Laia, Salvad al Mundo",
                },

                {
                  title: "FoodHero",
                  img: "./assets/img/foodhero.png",
                  alt: "lorem",
                  texto: "",
                  modalTitle: "Proyecto FOOD HERO",
                  modalHeader: "Food Hero",
                  modalDescription:
                    "es una aplicación innovadora que combina tecnología con solidaridad. Con el lema 'Salva comida, alimenta corazones', nuestra APP conecta repartidores y proveedores de alimentos voluntarios para distribuir comida a personas necesitadas. Mediante la geolocalización, se registran los procesos de creación y entrega de alimentos.",
                  modalDetails:
                    "Características: Creación de Manual de identidad, Marca y propuesta. Integración de tecnologías Laravel y Vue.js para una experiencia de usuario fluida y eficiente. Uso de APIs como MapBox para proporcionar funciones de geolocalización precisas.",
                  modalTech: "Laravel, Vue, MapBox, Apis",
                  modalLink: "https://delmonicocl.github.io/FoodHero/",
                  modalLinkText: "Food Hero",
                },

                {
                  title: "KanPom",
                  img: "./assets/img/kanpom.png",
                  alt: "Kanpom es una APP que te permite organizar tu tiempo y tus tareas, de manera efectiva. Utilizando las técnicas de trabajo Kanban y Pomodoro, Kanpom genera un tablero donde puedes crear y gestionar tus tareas, así como controlar su estado. Además, cuenta con un temporizador Pomodoro para ayudarte a mantener un enfoque productivo, alternando entre períodos de trabajo y descanso.",
                  texto: "",
                  modalTitle: "Proyecto Kanpom",
                  modalHeader: "Kanpom",
                  modalDescription:
                    "Kanpom es una app que organiza tu tiempo y tareas utilizando técnicas Kanban y Pomodoro. Ofrece un tablero para crear y gestionar tareas y un temporizador Pomodoro para mantener un enfoque productivo con períodos de trabajo y descanso. ",
                  modalDetails: "",

                  modalTech: "HTML, CSS, JavaScript (LocalStorage)",
                  modalLink: "https://delmonicocl.github.io/KenPom/",
                  modalLinkText: "Organizador Tareas",
                },

                {
                  title: "Buscapalabras",
                  img: "./assets/img/buscapalabras.png",
                  alt: "lorem",
                  texto: "",
                  modalTitle: "Proyecto Buscapalabras",
                  modalHeader: "Buscapalabras",
                  modalDescription:
                    "es un juego educativo interactivo diseñado para niños que desafía su capacidad de encontrar palabras ocultas mientras disfrutan de una experiencia divertida y educativa.",
                  modalDetails:
                    "Desarrollado en JavaScript, permite a los niños aprender mientras juegan, contabiliza la cantidad de errores y sus vidas.",
                  modalTech: "Html, Css, JavaScript (LocalStorage)",
                  modalLink: "https://delmonicocl.github.io/JuegoBuscaPalabra/",
                  modalLinkText: "Juego, Buscapalabras",
                },
                {
                  title: "Manual Identidad",
                  img: "./assets/img/manualidentidad.png",
                  alt: "Manual de Identidad: Creacion de presentacion Manual de identidad proyecto FoodHero. El manual de identidad es una poderosa herramienta, inicial en cualquier proyecto. Define las bases del color, diseño, características del usuario, Mision y Vision, entre otros. Te invito a descargar la presentacion via PDF o ver el video en el siguiente video interactivo",
                  texto: "",
                  modalTitle: "Manual Identidad",
                  modalHeader: "",
                  modalDescription:
                    "Manual de Identidad: Creacion de presentacion Manual de identidad proyecto FoodHero. El manual de identidad es una poderosa herramienta, inicial en cualquier proyecto. Define las bases del color, diseño, características del usuario, Mision y Vision, entre otros. Te invito a descargar la presentacion via PDF o ver el video en el siguiente video interactivo",
                  modalDetails:
                    "",
                  modalTech: "HTML, CSS, UX",
                  modalLink: "./assets/img/ManualIdentidadFoodHero.pdf",
                  modalLinkText: "Descargar Manual",
                },

                {
                  title: "Quintana Diseños",
                  img: "./assets/img/quintanadisenos.png",
                  alt: "Autoevaluacion es una aplicación que facilita a profesores y alumnos completar una autoevaluación en relación a los módulos (cursos) en los que el alumno está registrado. Desarrollada en Laravel y Vue, esta aplicación permite a los usuarios interactuar de manera efectiva según su rol, proporcionando una experiencia personalizada y eficiente. Desarrollado en: Laravel, VUE, Html, Css y BD",
                  texto: "",
                  modalTitle: "Proyecto Quintana Diseños",
                  modalHeader: "",
                  modalDescription:
                    "Quintana Diseños: Es un proyecto del diseñador Cristobal Quintana que ofrece servicios de remodelacion y espacios en Santiago, Chile.",
                  modalDetails:
                    "El proyecto incluye el desarrollo de una LandingPage para presentar la propuesta de Quintana Diseños, portafolio de proyectos, propuesta de valor y formulario de contacto",

                  modalTech: "Wordpress, HTML, CSS",
                  modalLink: "https://tinyurl.com/quintanadiseno",
                  modalLinkText: "Quintana Diseños",
                },

                {
                  title: "Espacio Tierra",
                  img: "./assets/img/sanpedro.png",
                  alt: "Espacio Tierra: Es un proyecto de la emprendedora Javiera Escobar que ofrece un refugio turístico único en el Desierto de Atacama, Chile. El proyecto incluye el desarrollo de una LandingPage para presentar la propuesta turística de Espacio Tierra, así como la creación de una marca y un sitio web que reflejen la belleza y la serenidad del entorno.",
                  texto: "",
                  modalTitle: "Proyecto Espacio Tierra",
                  modalHeader: "",
                  modalDescription:
                    "Espacio Tierra: Es un proyecto de la emprendedora Javiera Escobar que ofrece un refugio turístico único en el Desierto de Atacama, Chile.",
                  modalDetails:
                    "El proyecto incluye el desarrollo de una LandingPage para presentar la propuesta turística de Espacio Tierra, así como la creación de una marca y un sitio web que reflejen la belleza y la serenidad del entorno.",
                  modalTech: "Wordpress, HTML, CSS, AirBnb",
                  modalLink: "https://espaciotierra.cl/",
                  modalLinkText: "Espacio Tierra",
                },

                {
                  title: "Riffo Eventos",
                  img: "./assets/img/eventosriffo.png",
                  alt: "Riffo Eventos: Es un proyecto del chef chileno Matías Riffo, que ofrece una propuesta gastronómica única. El proyecto incluye el desarrollo de una LandingPage para presentar su propuesta culinaria, así como la creación de una marca, logotipo y sitio web que reflejen la esencia y el estilo de Matías Riffo.",
                  texto: "",
                  modalTitle: "Proyecto Eventos Riffo",
                  modalHeader: "",
                  modalDescription:
                    "Riffo Eventos: Es un proyecto del chef chileno Matías Riffo, que ofrece una propuesta gastronómica única.",
                  modalDetails:
                    "El proyecto incluye el desarrollo de una LandingPage para presentar su propuesta culinaria, así como la creación de una marca, logotipo y sitio web que reflejen la esencia y el estilo de Matías Riffo.",
                  modalTech: "Wordpress, HTML, CSS",
                  modalLink: "https://eventosriffo.cl/",
                  modalLinkText: "Eventos Riffo",
                },
              ],
            };

            var source = $('#template').html();
            var template = Handlebars.compile(source);
            $('#content').html(template(data));
        });

        $(window).on('load', function () {
            var $items = $('.item');
            $items.on({
                mousemove: function (e) {
                    var $that = $(this);
                    $that.find('.overflow > img').velocity({
                        translateZ: 0,
                        translateX: Math.floor((e.pageX - $that.offset().left) - ($that.width() / 2)),
                        translateY: Math.floor((e.pageY - $that.offset().top) - ($that.height() / 2)),
                        scale: '2'
                    }, {
                        duration: 400,
                        easing: 'linear',
                        queue: false
                    });
                },
                mouseleave: function () {
                    $(this).find('.overflow > img').velocity({
                        translateZ: 0,
                        translateX: 0,
                        translateY: 0,
                        scale: '1'
                    }, {
                        duration: 1000,
                        easing: 'easeOutSine',
                        queue: false
                    });
                }
            });
        });