import express from "express"
import cors from "cors"
import movizerRoutes from "./routers/movizer-routes.js"


const app = express()

app.use(express.json())
app.use(cors())
app.use(movizerRoutes)

app.listen(5000, () => console.log("Rodando na 5000"))
