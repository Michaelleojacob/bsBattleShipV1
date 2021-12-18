function getVertOrHoizArrBasedOnSize(cell, rotateInstance, length) {
  const isVert = rotateInstance.getVert;
  const size = parseInt(length, 10);
  const [startingLetter, unparsedStartNum] = cell.split('');
  const startNum = parseInt(unparsedStartNum, 10);

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const getVerticalCoords = () => {
    const startingPoint = nums[nums.indexOf(startNum)];
    const endPoint = nums[nums.indexOf(startNum) + size];
    if (endPoint === undefined) return console.log('error');
    const arr = [];
    for (let i = startingPoint; i <= endPoint; i += 1) {
      arr.push(startingLetter + i);
    }
    return arr;
  };
  const getHorizonalCoords = () => {
    const startingPoint = letters[letters.indexOf(startingLetter)];
    const endPoint = letters[letters.indexOf(startingLetter) + size];
    if (endPoint === undefined) return console.log('error');
    const arr = [];
    for (let i = letters.indexOf(startingPoint); i <= letters.indexOf(endPoint); i += 1) {
      arr.push(letters[i] + startNum);
    }
    return arr;
  };

  let resultArr;

  switch (isVert) {
    case true:
      if (nums[nums.indexOf(startNum + size)] === undefined) return console.log('error');
      resultArr = getVerticalCoords();
      break;
    case false:
      if (letters[letters.indexOf(startingLetter) + size] === undefined)
        return console.log('error');
      resultArr = getHorizonalCoords();
      break;
    default:
      break;
  }
  return resultArr;
}

export default getVertOrHoizArrBasedOnSize;
