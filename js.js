const numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genre:[],
    private: false
};

const a = prompt(`Последний просмотренный фильм?`, ``),
      b = prompt(`На сколько оцените его?`, ``),
      c = prompt(`Последний просмотренный фильм?`, ``),
      d = prompt(`На сколько оцените его?`, ``);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
