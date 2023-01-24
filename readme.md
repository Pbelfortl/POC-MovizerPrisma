Movizer

API para registrar filmes, onde assistí-los e fazer comentários.


**Cadastrar um filme não assistido:**

POST: /post-movie

body:{"name": "Kill Bill", "platform":2, "gender":1}

Salvará um objeto do tipo 

{

    "id": 1,
    "name": "Kill Bill",
    "platform": "Amazon Prime Video",
    "gender": "ação",
    "status": false,
    "note": null
}

**Para Marcar um filme como assistido**

PUT: /update-movie

body: {"id":1, "note":"Filme topp!"}

**Para obter os filmes da lista ou filtrá-los por plataforma ou gênero**

GET: /get-movies?platform=2?gender=1

Receberá uma resposta no formato:

{

    "id": 1,
    "name": "Kill Bill",
    "platform": "Amazon Prime Video",
    "gender": "ação",
    "status": true,
    "note": "Filme tooop!"
}

**Para deletar um filme da lista**

DELETE: /delete-movie/:id (id do filme a ser deletado)


_ÍNDICE DAS PLATAFORMAS_



    1 Netflix
    2 Amazon Prime Video
    3 HBO max
    4 Disney+
    5 Paramount+
    6 Globoplay
    7 Apple TV+
    8 Star+



_ÌNDICE DOS GÊNEROS_

    1 ação
    2 aventura
    3 comédia
    4 documentário
    5 drama
    6 romance
    7 suspense
    8 terror
