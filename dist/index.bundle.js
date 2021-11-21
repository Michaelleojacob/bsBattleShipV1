/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
function Ship(name, size) {
  const ship = Array.from(Array(size).keys()).map((i) => i + 1);

  const hit = (num) => {
    ship[ship.indexOf(num)] = 'X';
  };

  const isSunk = () => ship.every((item) => item === 'X');

  return {
    get name() {
      return name;
    },
    get size() {
      return size;
    },
    get status() {
      return [...ship];
    },
    get log() {
      return console.log(ship);
    },
    hit,
    isSunk,
  };
}

const mock = Ship('s', 4);
console.log(mock.status);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwdjEvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNoaXAobmFtZSwgc2l6ZSkge1xuICBjb25zdCBzaGlwID0gQXJyYXkuZnJvbShBcnJheShzaXplKS5rZXlzKCkpLm1hcCgoaSkgPT4gaSArIDEpO1xuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBzaGlwW3NoaXAuaW5kZXhPZihudW0pXSA9ICdYJztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwLmV2ZXJ5KChpdGVtKSA9PiBpdGVtID09PSAnWCcpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemU7XG4gICAgfSxcbiAgICBnZXQgc3RhdHVzKCkge1xuICAgICAgcmV0dXJuIFsuLi5zaGlwXTtcbiAgICB9LFxuICAgIGdldCBsb2coKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coc2hpcCk7XG4gICAgfSxcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICB9O1xufVxuXG5jb25zdCBtb2NrID0gU2hpcCgncycsIDQpO1xuY29uc29sZS5sb2cobW9jay5zdGF0dXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9