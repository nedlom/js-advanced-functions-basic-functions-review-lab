// Your code here

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

mondayWork = function(task = "go to the office") {
  return `This Monday, I will ${task}.`;
}

function wrapAdjective(flair = "*") { 
  return function(param = "special") {  
    return `You are ${flair}${param}${flair}!`;
  }
};

function actionApplyer(int, fns) {

  if(fns.length === 0) {
    return int;
  }

  for(let i = 0; i < fns.length; i++) {
    int = fns[i](int)
  };

  return int;
};

console.log(wrapAdjective()("nice"))