import express from "express"
import cors from "cors"
import pg from 'pg'
import movizerRoutes from "./routers/movizer-routes.js"


const {Pool} = pg
export const connection =  new Pool({
    connectionString : 'postgres://iqyfzhxq:EjhEh_GT2Xo9j6wadbeNa-cal5zOILpj@tuffi.db.elephantsql.com/iqyfzhxq',
    ssl:false
})

const app = express()

app.use(express.json())
app.use(cors())
app.use(movizerRoutes)

app.listen(5000, () => console.log("Rodando na 5000"))
