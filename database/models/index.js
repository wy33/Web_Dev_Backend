const Manga = require('./manga');
const Anime = require('./anime');
const Author = require('./author');

Manga.belongsTo(Author);
Author.hasMany(Manga);
Anime.belongsTo(Author);
Author.hasMany(Anime);

module.exports = {
  Manga,
  Anime,
  Author
};