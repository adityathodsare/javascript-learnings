// successfully done
let JSONstr = `{
  "name": "Jane Doe",
  "age": 22,
  "skills": ["HTML", "CSS", "JavaScript"]
}
`;

const obj = JSON.parse(JSONstr);
console.log(obj);

// handling error

try {
  let JSONstr1 = `{
  "name": "Jane Doe",
  "age": 22,
  "skills":: ["HTML", "CSS", "JavaScript"]
}
`;

  let obj1 = JSON.parse(JSONstr1);
  console.log(obj1); // error due to incorrect sequence
} catch (error_occured) {
  console.log("error occured ");
} finally {
  console.log(`this will be printed if error present or not`);
}
