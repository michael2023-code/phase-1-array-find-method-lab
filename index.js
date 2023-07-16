// code your solution here
function superbowlWin(array) {
    const winObject = array.find(obj => obj.result === "W");
    return winObject ? winObject.year : undefined;
  }

  const reords= [
    { year: 2015, result: "L" },
    { year: 2014, result: "W" },
    { year: 2013, result: "L" },
  ];
  
  console.log(superbowlWin(records)); 