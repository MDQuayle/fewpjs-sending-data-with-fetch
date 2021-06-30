// Add your code here
const htmlBody = document.querySelector('body');

function submitData(name,email){
    const inputData = {
        name: `${name}`,
        email: `${email}`,
      };
      const configObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(inputData),
    }
    
    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body)
        htmlBody.textContent = body.id;
      })
      .catch(function(error) {
        alert("ERROR ERROR EROR ERR E");
        htmlBody.textContent = error.message; 
      });
}