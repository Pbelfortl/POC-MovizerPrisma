import { Request, Response } from "express";
import { connection } from "../app.js";

export async function postMovie(req: Request, res: Response) {

    const { name, platform, gender } = req.body

    try {

        await connection.query(`INSERT INTO movie (name, platform, gender) VALUES ($1, $2, $3)`, [name, platform, gender])
        res.sendStatus(201)

    } catch (err) {

        console.log(err)
        res.sendStatus(500)
    }
}

export async function getMovies(req: Request, res: Response) {

    const platform = req.query.platform
    const gender = req.query.gender

    try {

        if (platform && gender) {
            const movies = (await connection.query(`SELECT 
                movie.id, movie.name as name, platforms.name as platform, genders.name as gender, movie.status, movie.note
                FROM movie
                JOIN platforms ON movie.platform = platforms.id
                JOIN genders ON genders.id = movie.gender
                WHERE platform = $1 AND gender = $2`, [platform, gender])).rows
            return res.status(200).send(movies)
        }

        if (platform) {
            const movies = (await connection.query(`SELECT 
                movie.id, movie.name as name, platforms.name as platform, genders.name as gender, movie.status, movie.note
                FROM movie
                JOIN platforms ON movie.platform = platforms.id
                JOIN genders ON genders.id = movie.gender
                WHERE platform = $1`, [platform])).rows
            return res.status(200).send(movies)
        }

        if (gender) {

            const movies = (await connection.query(`SELECT 
            movie.id, movie.name as name, platforms.name as platform, genders.name as gender, movie.status, movie.note
            FROM movie
            JOIN platforms ON movie.platform = platforms.id
            JOIN genders ON genders.id = movie.gender
            WHERE gender = $1`, [gender])).rows
            return res.status(200).send(movies)
        }

        const movies = (await connection.query(`SELECT  
            movie.id, movie.name as name, platforms.name as platform, genders.name as gender, movie.status, movie.note
            FROM movie
            JOIN platforms ON platforms.id = movie.platform
            JOIN genders ON genders.id = movie.gender`)).rows

        res.status(200).send(movies)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function updateMovie(req: Request, res: Response) {

    const { id, note } = req.body

    try {

        await connection.query(`UPDATE movie SET status = true, note = $2 WHERE id = $1`, [id, note])
        res.sendStatus(200)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function deleteMovie(req: Request, res: Response) {

    const movieId = Number(req.body.params.movieId)

    try {

        await connection.query(`DELETE FROM movie WHERE id = $1`, [movieId])


    } catch (err) {

        console.log(err)
        res.sendStatus(500)
    }
}