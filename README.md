# Web Dev Backend Repo

## Requirements

- PostgreSQL & Sequelize
  - 2+ models, each with 2+ fields:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/database/models/anime.js#L8-L31
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/database/models/author.js#L8-L28
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/database/models/manga.js#L8-L31
  - 2+ models associated with each other:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/database/models/index.js#L5-L8

- API (Express, Sequelize, CRUD operations)
  - Routes to add new instances to each model:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L57C1-L74
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/author.js#L66-L81
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L57-L74
  - Routes that returns all instances from each model:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L11-L14
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/author.js#L11-L14
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L11-L14
  - Routes that return individual instances from each model based on their IDs:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L16-L44
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/author.js#L16-L64
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L16-L55
  - Routes that update instances in each model:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L76-L100
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/author.js#L83-L109
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L76-L100
  - Routes that remove instances from each model, based on their IDs:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L102-L118
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/author.js#L111-L127
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L102-L118
  - Route that returns an instance from a model, and all instances associated with it in a different model:
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/anime.js#L46-L52
    - https://github.com/wy33/Web_Dev_Backend/blob/ef7ce5066c23ca31d59990a1f110968c76eeb4af/routes/manga.js#L47-L52

