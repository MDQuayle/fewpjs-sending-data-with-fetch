 
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//       })
//   }; 

// fetch('http://localhost:3000/dogs', configurationObject);
//------------------------------------------------------------------ ^ code works
// MAKING MORE GENERAL WITH EXTRA VARIABLE v

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/dogs", configurationObject); 

// This code is for handling the data that may be sent back
fetch("http://localhost:3000/dogs", configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  
// code for handling any errors that may arise from the code
// or the request itself from the website
// prevents javaScript from failing silently. 
  
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message); 
  })
// The next code is without using a configuration object as a variable. All three methods 
// work but the middle one is most easily readable.


//   fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// }); 


