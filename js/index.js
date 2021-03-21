document.addEventListener("DOMContentLoaded", function () {
  //sidenav
  const sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav, {
    preventScrolling: true,
  });

  var elems = document.querySelectorAll(".scrollspy");
  M.ScrollSpy.init(elems, {
    activeClass: "active",
    scrollOffset: 50,
  });
});
