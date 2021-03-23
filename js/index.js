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

  let jsProjects = [
    {
      title: "Food Recipes",
      imgUrl: "./img/projects/food-recipes.png",
      tech: `<li>React JS</li>
               <li>CSS - Materialize CSS</li>
               <li>React - Router</li>
               <li>API - MealDB API</li>`,
    },
    {
      title: "WW Meals",
      imgUrl: "./img/projects/cuisine.png",
      tech: `<li>Vue JS</li>
              <li>CSS - Bootstrap-Vue</li>
              <li>Vue - Router</li>
              <li>API - MealDB API</li>`,
    },
    {
      title: "Contacts App",
      imgUrl: "./img/projects/contact-book.png",
      tech: `<li>Java - Spring Boot</li>
              <li>Thymeleaf - Server-side Template Enginet</li>
               <li>Postman - Testing Controllers</li>
               <li>Database - MongoDB Atlas</li>`,
    },
  ];

  let jsGames = [
    {
      title: "Pacman",
      imgUrl: "./img/projects/pacman.png",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>`,
    },
    {
      title: "1942",
      imgUrl: "./img/projects/1942.png",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>`,
    },
    {
      title: "Plants vs Zombies",
      imgUrl: "./img/projects/pvz.png",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>`,
    },
    {
      title: "Flappy Bird",
      imgUrl: "./img/projects/flappybird.png",
      tech: `<li>HTML</li>
              <li>CSS</li>
              <li>Vanilla JS</li>`,
    },
  ];

  const showProjects = (arr, elementId) => {
    let html = "";
    for (var i = 0; i < arr.length; i++) {
      let { title, imgUrl, tech } = arr[i];
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
              <a href="#">demo</a>
            </div>
          </div>
          <div class="card-reveal">
            <span class="card-title red-text text-darken-4"
              >Technologies<i class="material-icons right">close</i></span
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
  showProjects(jsGames, "js-games");
});
