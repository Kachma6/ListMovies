import { getMovies , postMovie} from "./firebase/config.js";

const registerMovie = document.getElementById("register-movie")

const listMovies = async () => {
    removeList()
    let movies = await getMovies()
    console.log(movies)
    const ctnMovies = document.getElementById("ctn-movies")
    movies.forEach(item => {
        const listItem = document.createElement("div");
        listItem.textContent = `Nombre: ${item.name}`;
        ctnMovies.appendChild(listItem);
      });
}
const removeList = () =>{
    const ctnMovies = document.getElementById("ctn-movies")
    ctnMovies.remove()
    const newCtn = document.createElement("div");
    newCtn.setAttribute("id" , "ctn-movies")
    const body = document.querySelector("body");
    body.appendChild(newCtn)
}

const saveMovie = async (movie) => {
  let movieRegister = await postMovie(movie)
}
registerMovie.addEventListener("submit", (e)=>{
  e.preventDefault()
  const name = document.getElementById("movie-name")
  saveMovie({name: name.value})
  name.value = "";
  listMovies()
})
listMovies()


// ------------------------------------------------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js")
          .then((registration) => {
              console.log("Service Worker registrado con éxito:", registration);
          })
          .catch((error) => {
              console.error("Error al registrar el Service Worker:", error);
          });
  });
}