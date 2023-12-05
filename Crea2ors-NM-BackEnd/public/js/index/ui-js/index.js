const jsonObject = {
    "apple": 3,
    "banana": 1,
    "cherry": 5,
    "date": 2,
    "fig": 4
  };
  
  // Step 1: Convert JSON object to an array of key-value pairs
  const jsonArray = Object.entries(jsonObject);
  console.log(jsonArray)
  // Step 2: Sort the array by values in descending order
  jsonArray.sort((a, b) => b[1] - a[1]);
  
  // Step 3: Convert the sorted array back to a JSON object
  const sortedJsonObject = Object.fromEntries(jsonArray);
  
  console.log(sortedJsonObject);