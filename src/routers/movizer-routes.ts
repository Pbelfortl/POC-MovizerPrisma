import { Router } from "express";
import { postMovie, getMovies, updateMovie, deleteMovie} from "../controllers/movizer-controller.js";

const movizerRoutes = Router()

movizerRoutes.post("/post-movie", postMovie)
movizerRoutes.get("/get-movies", getMovies)
movizerRoutes.put("/update-movie", updateMovie)
movizerRoutes.delete("/movie/:movieId", deleteMovie)

export default movizerRoutes