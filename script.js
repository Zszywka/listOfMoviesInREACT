var movies = [
  {
    id: 1,
    title: 'Groundhog Day',
    desc: 'movie about time',
    img: 'pictures/groundhog-day-films-photo-u13.webp',
    video: 'https://www.youtube.com/watch?v=tSVeDx9fk60'
  },
  {
    id: 2,
    title: 'The Lion King',
    desc: 'movie about lions',
    img: 'pictures/the-lion-king-films-photo-u15.webp',
    video: 'https://www.youtube.com/watch?v=4sj1MT05lAA'
  },
  {
    id: 3,
    title: 'The Shawshank Redemption',
    desc: 'movie about prison',
    img: 'pictures/the-shawshank-redemption-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: 4,
    title: 'The Sixth Sense',
    desc: 'movie about spirits',
    img: 'pictures/the-sixth-sense-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=VG9AGf66tXM'
  }
];

var movieElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, // dlaczego return? // dlaczego taki zapis movie.id?
    React.createElement('img', {src: movie.img}),
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('a', {href: movie.video}, 'triler' )
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'list of movies'),
    React.createElement('ul', {}, movieElements)
);

ReactDOM.render(element, document.getElementById('app'));
