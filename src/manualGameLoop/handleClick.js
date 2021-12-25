export default function getVertOrHoizArrBasedOnSize(cell, rotateInstance, length) {
  const isVert = rotateInstance.getVert;
  const shipSize = parseInt(length, 10);
  const [startLetter, stringNum] = cell.split('');
  const parsedStartingNum = parseInt(stringNum, 10);

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const getVerticalCoords = () => {
    const startingNumber = parsedStartingNum;
    let endPoint = startingNumber + shipSize;
    if (endPoint > 10) endPoint = 10;

    const arr = [];
    for (let i = startingNumber; i < endPoint; i += 1) {
      arr.push(startLetter + nums[i]);
    }
    return arr;
  };

  const getHorizonalCoords = () => {
    const indexOfStartLetter = letters.indexOf(startLetter);
    let endPoint = indexOfStartLetter + shipSize;
    if (endPoint > 10) endPoint = 10;

    const arr = [];
    for (let i = indexOfStartLetter; i < endPoint; i += 1) {
      arr.push(letters[i] + stringNum);
    }
    return arr;
  };

  let resultArr;
  switch (isVert) {
    case true:
      resultArr = getVerticalCoords();
      break;
    case false:
      resultArr = getHorizonalCoords();
      break;
    default:
      break;
  }
  return resultArr;
}
