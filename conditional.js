
/*

if (condition is true) {
  statement is executed
}

*/


  // Example

  function trueOrFalse(wasThatTrue) {
  
    // Only change code below this line
    if (wasThatTrue == true){
      return "Yes, that was true";
    }
     return "No, that was false";
    // Only change code above this line
  }
  
trueOrFalse(true); // Yes, that was true
trueOrFalse(false); // No, that was false


// Range condition

//will return Yes only if num is between 5 and 10 (5 and 10 included). 
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

// CASE
// Example
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case val = "a":
        answer = "apple";
        break;
      case val = "b":
        answer = "bird";
        break;
      case val = "c":
        answer = "cat";
        break;
      default: // Default is like ELSE. 
        answer = "stuff";
    }
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

// Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }

 // Better way

 function isEqual(a, b) {
    return a === b;
  }
