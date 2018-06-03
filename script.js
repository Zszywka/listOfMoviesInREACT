var movies = [
  {
    id: 1,
    title: 'Groundhog Day',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/groundhog-day-films-photo-u13.webp',
    video: 'https://www.youtube.com/watch?v=tSVeDx9fk60'
  },
  {
    id: 2,
    title: 'The Lion King',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-lion-king-films-photo-u15.webp',
    video: 'https://www.youtube.com/watch?v=4sj1MT05lAA'
  },
  {
    id: 3,
    title: 'The Shawshank Redemption',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-shawshank-redemption-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
  },
  {
    id: 4,
    title: 'The Sixth Sense',
    desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: 'pictures/the-sixth-sense-films-photo-u1.webp',
    video: 'https://www.youtube.com/watch?v=VG9AGf66tXM'
  }
];

var movieElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, // dlaczego return? // dlaczego taki zapis movie.id?
    React.createElement('img', {src: movie.img}), // why scr inside {}?
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('a', {href: movie.video}, 'Triler' )
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'The best of movies:'),
    React.createElement('ul', {}, movieElements)
);

ReactDOM.render(element, document.getElementById('app'));
