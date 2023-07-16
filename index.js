// code your solution here
function superbowlWin(array) {
    const winObject = array.find(obj => obj.result === "W");
    return winObject ? winObject.year : undefined;
  }

  const reords= [
    { year: 2016, result: "L" },
    { year: 2015, result: "W" },
    { year: 2014, result: "L" },
  ];
  
  console.log(superbowlWin(records)); 