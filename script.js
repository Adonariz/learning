'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const movie = prompt('Один из последних просмотренных фильмов?', '');
      const rating = prompt('На сколько оцените его?', '');
    
      if (movie && rating !== null && movie && rating !== '' && movie.length < 50) {
        personalMovieDB.movies[movie] = rating;
      } else {
        i--;
      }
    }  
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function() {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function() {
    for (let i = 0; i < 3; i++) {
      let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);

      while(answer == '' || answer == null) {
        console.log('Введите жанр');
        answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      }

      personalMovieDB.genres[i] = answer;
    }

    personalMovieDB.genres.forEach((item, i) => {
      let string = `Любимый жанр #${i + 1} - это ${item}`;
      console.log(string);
    });
  },

  toggleVisibleMyDB: function() {
    personalMovieDB.private = !personalMovieDB.private;
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
