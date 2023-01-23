import { Router } from "express";
import { postMovie, getMovies, updateMovie, deleteMovie} from "../controllers/movizer-controller.js";

const movizerRoutes = Router()

movizerRoutes.post("/post-movie", postMovie)
movizerRoutes.get("/get-movies?platform?gender", getMovies)
movizerRoutes.put("udape-movie", updateMovie)
movizerRoutes.delete("/movie/:movieId", deleteMovie)

export default movizerRoutes