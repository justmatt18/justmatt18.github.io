document.addEventListener("DOMContentLoaded", function () {
  //sidenav
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {
    preventScrolling: true,
  });

  const scrollspy = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(scrollspy, {
    scrollOffset: 60,
  });

  const jsProjects = [
    {
      title: "Food Recipes",
      imgUrl: "./img/projects/food-recipes.png",
      demo: "https://mattyrecipes.netlify.app/",
      tech: `<li>React JS</li>
               <li>CSS - Materialize CSS</li>
               <li>React - Router</li>
               <li>Youtube - React Player</li>
               <li>API - MealDB API</li>
               <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/food-recipe"
                  target="_blank"
                >
                  Github repo
                </a>
               </li>`,
    },
    {
      title: "WW Meals",
      imgUrl: "./img/projects/cuisine.png",
      demo: "https://world-wide-meals.netlify.app/",
      tech: `<li>Vue JS</li>
              <li>CSS - Bootstrap-Vue</li>
              <li>Vue - Router</li>
              <li>Youtube - Vue-Youtube-Embed</li>
              <li>API - MealDB API</li>
              <li>
                <a class="red-text text-darken-4"
                href="https://github.com/justmatt18/world-wide-meals"
                target="_blank"
                >
                  Github repo
                </a>
               </li>`,
    },
    {
      title: "Contacts API",
      imgUrl: "./img/projects/contact-book.png",
      demo: "https://spring-contacts.herokuapp.com/",
      tech: `<li>Java - Spring Boot</li>
              <li>Thymeleaf - Server-side Template Engine</li>
               <li>Postman - Testing Controllers</li>
               <li>Database - MongoDB Atlas</li>
               <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/springboot-mongodb-thymeleaf"
                  target="_blank"
                  >
                  Github repo
                </a>
                w/ public API
               </li>`,
    },
  ];

  const jsGames = [
    {
      title: "Pacman",
      imgUrl: "./img/projects/pacman.png",
      demo: "https://simplepacman.netlify.app/",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/pacman-game"
                  target="_blank"
                  >
                  Github repo
                </a>
               </li>`,
    },
    {
      title: "1942",
      imgUrl: "./img/projects/1942.png",
      demo: "https://1942game.netlify.app/",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/1942-game"
                  target="_blank"
                  >
                  Github repo
                </a>
               </li>`,
    },
    {
      title: "Plants vs Zombies",
      imgUrl: "./img/projects/pvz.png",
      demo: "https://plantsvszombies.netlify.app/",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/plants-vs-zombies"
                  target="_blank"
                  >
                  Github repo
                </a>
               </li>`,
    },
    {
      title: "Flappy Bird",
      imgUrl: "./img/projects/flappybird.png",
      demo: "https://flappy-birdu.on.fleek.co/",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>
                <a class="red-text text-darken-4"
                  href="https://github.com/justmatt18/flappy-bird"
                  target="_blank"
                  >
                  Github repo
                </a>
               </li>`,
    },
  ];

  const randomProjects = [
    {
      title: "SML Burgers",
      imgUrl: "./img/projects/smlburgers.png",
      demo: "https://smlburgers.netlify.app/",
      tech: `<li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>
        <a class="red-text text-darken-4"
          href="https://github.com/justmatt18/flappy-bird"
          target="_blank"
          >
          Github repo
        </a>
       </li>`,
    },
    {
      title: "Vuentory",
      imgUrl: "./img/projects/vuentory.png",
      demo: "https://cloud-inventory.netlify.app",
      tech: `<li>HTML</li>
      <li>CSS - Vuetify</li>
      <li>Vue JS</li>
      <li>
        <a class="red-text text-darken-4"
          href="https://github.com/justmatt18/flappy-bird"
          target="_blank"
          >
          Github repo
        </a>
       </li>`,
    },
    {
      title: "Travel | GrandTour",
      imgUrl: "./img/projects/travel-agency.png",
      demo: "https://justmatt18.github.io/travel-agency-theme-materialize/",
      tech: `<li>HTML</li>
      <li>CSS - Materialize CSS</li>
      <li>Javascript</li>
      <li>
        <a class="red-text text-darken-4"
          href="https://github.com/justmatt18/travel-agency-theme-materialize"
          target="_blank"
          >
          Github repo
        </a>
       </li>`,
    },
    {
      title: "Charts",
      imgUrl: "./img/projects/chart.png",
      demo: "https://mat-chartjs.netlify.app/",
      tech: `<li>HTML</li>
      <li>CSS</li>
      <li>Svelte JS</li>
      <li>Chart JS</li>
      <li>
        <a class="red-text text-darken-4"
          href="https://github.com/justmatt18/flappy-bird"
          target="_blank"
          >
          Github repo
        </a>
       </li>`,
    },
  ];

  const showProjects = (arr, elementId) => {
    let html = "";
    for (var i = 0; i < arr.length; i++) {
      let { title, imgUrl, tech, demo } = arr[i];
      html += `
      <div class="col s12 m4">
        <div class="card small hoverable">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${imgUrl}" />
          </div>
          <div class="card-content project-title">
            <span class="card-title activator"
              >${title}<i class="material-icons right"
                >more_vert</i
              >
            </span>
            <div class="card-action">
              <a href="${demo}" target="_blank">demo</a>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title my-main"
              >Technologies<i class="material-icons right red-text">close</i></span
            >
            <ul class="tech">
            ${tech}
            </ul>
          </div>
        </div>
    </div>`;
    }
    console.log(html);
    document.getElementById(`${elementId}`).innerHTML = html;
  };

  showProjects(jsProjects, "core-projects");
  showProjects(randomProjects, "random-projects");
  showProjects(jsGames, "js-games");
});
