var queen = document.querySelector('.queen');
var lyricSpace = document.querySelector('.lyrics');

queen.addEventListener("click", sayings);

sayings = ['I sneezed on the beat and the beat got sicker.', 'How you gonna upgrade me... Whats higher than number one?','I am the dragon breathing fire. Beautiful mane Im the lion.', 'Diva is a female version of a hustler.', 'I wake up looking this good and I wouldn’t change it if I could.', 'There’s nothing not to love about me, I’m lovely.', 'If you liked it then you shouldve put a ring on it.', 'Im so reckless when I rock my Givenchy dress.'];

function sayings() {
  var number = Math.floor(Math.random()* sayings.length);
  var lyrics = sayings[number];
  lyricSpace.innerText = lyrics;

}
