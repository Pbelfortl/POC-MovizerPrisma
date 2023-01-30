import prisma from "../src/database.js"

async function main() {
    
    await prisma.movie.createMany({
        data: [
            {
                "name": "Kill Bill",
                "platform":2,
                "gender":1
            },
            {
                "name": "Monster Inc.",
                "platform":3,
                "gender":1
            }
        ]
        
    })
}

main ()
    .then( () => console.log("Registro feito com sucesso!"))
    .catch( (e) => {
        console.log(e)
        process.exit(1)
    })
    .finally( async () => {
        await prisma.$disconnect()
    })