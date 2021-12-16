function handleMModalClick(cell, rotateInstance) {
  console.log(cell);
  console.log(rotateInstance.getVert);
  const isVert = rotateInstance.getVert;

  const [startingLetter, startingNum] = cell.split('');
  console.log(startingLetter, startingNum);

  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const getHorizonalCoords = () => {
    const arr = [];
    const commonValue = parseInt(startingNum, 10);
    return arr;
  };
  const getVerticalCoords = () => {
    const arr = [];
    const commonValue = startingLetter;
    const startNum = parseInt(startingNum, 10);

    return arr;
  };

  // switch (isVert) {
  //   case true:
  //     break;
  //   case false:
  //     break;
  //   default:
  //     break;
  // }
}

export default handleMModalClick;
