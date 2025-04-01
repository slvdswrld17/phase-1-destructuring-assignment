// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Assign variables based on the sounds animals make
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log(moo, neigh, baa, oink, cluck); // cow horse sheep pig chicken

// 2. Assign four animals, skipping the horse
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little); // cow sheep pig chicken

// 3. Assign three animals with color-related names, skipping horse and chicken
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');
console.log(blackAndWhite, black, pink); // cow sheep pig

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Assign color variables
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(red, orange, yellow, green, blue, indigo, violet);

// 5. Assign colors using first letters, skipping indigo
const [r, o, y, g, b, , v] = colors;
console.log(r, o, y, g, b, v);

// 6. Assign indigo only
const [, , , , , indg] = colors;
console.log(indg);

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Destructure all variables from muppet
const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Destructure songs 2 and 4, and Kermit's job and partner
const { 
  album: { theMuppetMovie: { song2, song4 } }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

console.log(song2, song4, nestedJob, nestedPartner);