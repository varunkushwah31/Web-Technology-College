/* =========================================================== 
WEB TECHNOLOGY – CS208 
UNIT–1 STRUCTURED PRACTICE ASSIGNMENT 2.0
Total Questions: 15 
Each Question = 1 Mark 
=========================================================== 
INSTRUCTIONS: 
- DO NOT change function names 
- DO NOT modify driver function 
- Implement logic only inside marked section 
- Follow ES6 standards 
=========================================================== 
*/ 

let quoteData = { author: "Bhagat Singh", text: "They may kill me, but they cannot kill my ideas.", year: 1929 }; 
let systemLogs = [200, 404, 500, 200, 201]; 
let leetcodeStats = [{ solved: true, id: 1 }, { solved: false, id: 2 }, { solved: true, id: 3 }];

/* ======================================================= 
1 
Purpose: 
Extract author and text from quote object using destructuring. 
Parameters: - obj (object) 
Constraints: - Must use object destructuring. - Return a formatted string. 
Test Case: 
getQuoteString(quoteData) → "Bhagat Singh: They may kill me..." 
======================================================= */ 
function getQuoteString(obj) { 
// STUDENT CODE STARTS 
    const {author,text} = obj;
    return `${author} : ${text}`;

// STUDENT CODE ENDS 
} 

/* ======================================================= 
2 
Purpose: 
Filter out only the successful HTTP status codes (200 or 201) from logs.
Parameters: - logs (array) 
Constraints: - Must use filter(). 
Test Case: 
getSuccessLogs([200, 404, 201]) → [200, 201] 
======================================================= */ 
function getSuccessLogs(logs) { 
// STUDENT CODE STARTS 
    let arr = logs.filter((x) => x >= 200 && x < 300);
    return arr;

// STUDENT CODE ENDS 
} 

/* ======================================================= 
3 
Purpose: 
Count only the solved problems from an array of objects.
Parameters: - problems (array of objects) 
Constraints: - Must use filter() and length. 
Test Case: 
countSolved(leetcodeStats) → 2 
======================================================= */ 
function countSolved(problems) { 
// STUDENT CODE STARTS 

  const arr = problems.filter((x) => x.solved).length;
  return arr;


// STUDENT CODE ENDS 
} 

/* ======================================================= 
4 
Purpose: 
Merge frontend and backend configuration objects safely.
Parameters: - front (object) - back (object) 
Constraints: - Must use spread operator. - back properties should override front if they share keys.
Test Case: 
mergeConfigs({port: 3000}, {port: 8080, db: 'mongo'}) → {port: 8080, db: 'mongo'} 
======================================================= */ 
function mergeConfigs(front, back) { 
// STUDENT CODE STARTS 
  return {...front,...back};

// STUDENT CODE ENDS 
} 

/* ======================================================= 
5 
Purpose: 
Implicitly return a new WebRTC user object using an arrow function. 
Parameters: - streamId (string) - role (string)
Constraints: - Must use an arrow function. - NO 'return' keyword allowed (use implicit return). - Use Object property shorthand.
Test Case: 
createUser("xyz123", "host") → { streamId: "xyz123", role: "host" } 
======================================================= */ 
const createUser = (streamId, role) => ({streamId,role});
// STUDENT CODE STARTS 


// STUDENT CODE ENDS 

/* ======================================================= 
6 
Purpose: 
Append a new task to an existing array WITHOUT modifying the original.
Parameters: - arr (array) - newTask (string)
Constraints: - Must use spread operator for arrays. - Cannot use push().
Test Case: 
addTask(["UI", "API"], "DB") → ["UI", "API", "DB"] 
======================================================= */ 
function addTask(arr, newTask) { 
// STUDENT CODE STARTS 
  return [...arr,newTask];

// STUDENT CODE ENDS 
} 

/* ======================================================= 
7 
Purpose: 
Extract the FIRST element, and put the rest into a new array.
Parameters: - arr (array) 
Constraints: - Must use array destructuring and rest operator. - Return the rest array.
Test Case: 
getRemainingTasks(["Start", "Build", "Deploy"]) → ["Build", "Deploy"] 
======================================================= */ 
function getRemainingTasks(arr) { 
// STUDENT CODE STARTS 
  return [first,...rest] = arr;
  return rest;


// STUDENT CODE ENDS 
} 

/* ======================================================= 
8 
Purpose: 
Calculate the total RAM usage from an unknown number of machine instances.
Parameters: - ...ramAllocations (multiple numbers) 
Constraints: - Must use rest parameter (...args). - Must use reduce(). 
Test Case: 
totalRAM(512, 1024, 2048) → 3584 
======================================================= */ 
function totalRAM(...ramAllocations) { 
// STUDENT CODE STARTS 


// STUDENT CODE ENDS 
} 

/* ======================================================= 
9 
Purpose: 
Check if EVERY status in the dashboard is "healthy".
Parameters: - statuses (array of strings) 
Constraints: - Must use every(). 
Test Case: 
isSystemStable(["healthy", "healthy", "error"]) → false 
======================================================= */ 
function isSystemStable(statuses) { 
// STUDENT CODE STARTS 


// STUDENT CODE ENDS 
} 

/* ======================================================= 
10 
Purpose: 
Create a Promise that REJECTS with a specific error message if memory is too low.
Parameters: - ram (number) 
Constraints: - Must return a Promise. - Reject if ram < 4096, else resolve "OK".
======================================================= */ 
function checkMemory(ram) { 
// STUDENT CODE STARTS 


// STUDENT CODE ENDS 
} 

/* ======================================================= 
COMBINATION / TRICK QUESTIONS 
======================================================= */ 

/* ======================================================= 
11 
Purpose: 
Understand Map returning undefined when there's no explicit return.
Expected Output: 
[undefined, undefined, undefined] 
======================================================= */ 
function trickyMap() { 
// STUDENT CODE STARTS 
const nums = [1, 2, 3];
return nums.map(n => { n * 2 }); 
// STUDENT CODE ENDS 
} 

/* ======================================================= 
12 
Purpose: 
Understand default parameters combined with falsy values.
Expected Output: 
0
======================================================= */ 
function trickyDefaults(a = 10, b = 20) { 
// STUDENT CODE STARTS 
return a + b; 
// STUDENT CODE ENDS 
}
// Driver call would be: trickyDefaults(0, 0);

/* ======================================================= 
13 
Purpose: 
Understand Temporal Dead Zone (TDZ) with let.
Expected Output: 
ReferenceError (or catch block message if wrapped)
======================================================= */ 
function trickyTDZ() { 
// STUDENT CODE STARTS 
try {
  console.log(myVar);
  let myVar = "App Loaded";
} catch (e) {
  return "Error";
}
// STUDENT CODE ENDS 
} 

/* ======================================================= 
14 
Purpose: 
Nested Destructuring. Extract 'cpu' from the nested object.
Expected Output: 
"i5"
======================================================= */ 
function trickyNestedDestructure() { 
// STUDENT CODE STARTS 
const machine = { specs: { cpu: "i5", ram: "16GB" } };
const { specs: { cpu } } = machine;
return cpu;
// STUDENT CODE ENDS 
} 

/* ======================================================= 
15 
Purpose: 
Promise microtask queue execution order.
Expected Output: 
"1-3-2"
======================================================= */ 
function trickyEventLoop() { 
// STUDENT CODE STARTS 
let order = "1";
Promise.resolve().then(() => order += "-2");
order += "-3";
// Note: returning order synchronously here will just return "1-3" before the promise resolves.
// Just write what the final string *would* be after full execution in comments.
// STUDENT CODE ENDS 
}