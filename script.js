// Your CSV Dataset
let csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Part 1 and 2: Dynamic Column Count and Two-Dimensional Array
const rows = csvString.split("\n");
const headings = rows.shift().split(",");
const data = [headings];
rows.forEach((row) => {
  const columns = row.split(",");
  data.push(columns);
});
const twoDimensionalArray = data;
console.log("Parent Array:");
console.log(twoDimensionalArray);

// Part 3: Transforming Data into Objects
const transformedData = [];
for (let i = 1; i < twoDimensionalArray.length; i++) {
  const row = twoDimensionalArray[i];
  const obj = {};
  for (let j = 0; j < row.length; j++) {
    obj[twoDimensionalArray[0][j].toLowerCase()] = row[j];
  }
  transformedData.push(obj);
}

// Log the transformed data
console.log("Transformed data:");
console.log(transformedData);

// Part 4: Sorting and Manipulating Data
transformedData.pop(); // Remove last element
const insertedObject = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
};
transformedData.splice(1, 0, insertedObject); // Insert at index 1
const addedObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
transformedData.push(addedObject); // Add to end

console.log("Sorted data:");
console.log(transformedData);

// Calculate average age
let totalAge = 0;
for (const person of transformedData) {
  totalAge += parseInt(person.age);
}
const averageAge = totalAge / transformedData.length;
// Log the average age
console.log("Average Age:", averageAge);

// Part 5: Transforming Data back to CSV
let csvOutput = twoDimensionalArray[0].join(",") + "\n"; // Add headings to CSV
for (const person of transformedData) {
  const values = Object.values(person);
  csvOutput += values.join(",") + "\n"; // Add each row to CSV
}

// Log the final CSV output
console.log("Final CSV Output:");
console.log(csvOutput);
