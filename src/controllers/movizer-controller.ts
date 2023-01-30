import { Request, Response } from "express";
import prisma from "../database.js";

export async function postMovie(req: Request, res: Response) {

    const { name, platform, gender } = req.body

    try {

        await prisma.movie.create({
            data: {
                name,
                platform,
                gender
            }
        })
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
            const movies = await prisma.movie.findMany({
                where:{
                    platform: Number(platform),
                    gender: Number(gender)
                },
                include: {
                    genders: true,
                    platforms: true
                }
            })
            return res.status(200).send(movies)
        }

        if (platform) {
            const movies = await prisma.movie.findMany({
                where: {
                    platform: Number(platform)
                },
                include: {
                    genders: true,
                    platforms: true
                }
            })
            return res.status(200).send(movies)
        }

        if (gender) {

            const movies = await prisma.movie.findMany({
                where: {
                    gender: Number(gender)
                },
                include: {
                    genders: true,
                    platforms: true
                }
            })
            return res.status(200).send(movies)
        }

        const movies = (await prisma.movie.findMany({
            include: {
                genders: true,
                platforms: true
            }
        }) )

        res.status(200).send(movies)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function updateMovie(req: Request, res: Response) {

    const { id, note } = req.body

    try {

        await prisma.movie.update({
            where: {
                id: id
            },
            data: {
                note: note
            }
        })

        res.sendStatus(200)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function deleteMovie(req: Request, res: Response) {

    const movieId = Number(req.body.params.movieId)

    try {

        await prisma.movie.delete({
            where:{
                id: movieId
            }
        })

    } catch (err) {

        console.log(err)
        res.sendStatus(500)
    }
}