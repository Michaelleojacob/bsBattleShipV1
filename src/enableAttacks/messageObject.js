export default function messages() {
  const hit = [
    'landed a hit!',
    'nice shooting ace!',
    'what a shot!',
    'nailed it!',
    `go get 'em tiger`,
    'you got them on the ropes!',
    'direct hit!',
    `it's super effective!`,
    'you are an absolute beast',
    'keep it up captain!',
    'its like you know where they are!',
  ];

  const miss = [
    `nope`,
    `attack missed`,
    `try harder`,
    `git gud`,
    `lol`,
    `better luck next shot`,
    `stop trying to hit me`,
    `get rekt`,
    `green = bad, red = good`,
    `get more reds captain`,
    `missed`,
    `nah`,
    `are you a pacifist`,
    `not even close`,
  ];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const msgForHit = () => getRandom(hit);
  const msgForMiss = () => getRandom(miss);

  return {
    msgForHit,
    msgForMiss,
  };
}
