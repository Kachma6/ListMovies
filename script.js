import { getMovies , postMovie} from "./firebase/config.js";
const ctnMovies = document.getElementById("ctn-movies")
const registerMovie = document.getElementById("register-movie")

const listMovies = async () => {
    ctnMovies.innerHTML = "Cargando Datos........"
    let movies = await getMovies()
    console.log(movies)
    movies.forEach(item => {
        const listItem = document.createElement("div");
        listItem.textContent = `Nombre: ${item.name}`;
        ctnMovies.appendChild(listItem);
      });
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