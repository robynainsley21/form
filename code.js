const allPeople = [];

function submitForm() {
  let firstInput = document.getElementById("fname").value;
  let lastInput = document.getElementById("lname").value;
  //   let firstName = document.getElementById("firstName");
  //   let lastName = document.getElementById("lastName");
  let parent = document.getElementById("parentContainer");

  const person = {
    first: firstInput,
    last: lastInput,
  };

  allPeople.push(person);

  //   for (let bio of allPeople) {
  //     let nameParagraph = document.createElement("p");
  //     let surnameParagraph = document.createElement("p");

  //     // firstName
  //     nameParagraph.textContent = `First name: ${bio.first}`;
  //     parent.appendChild(nameParagraph);

  //     // lastName
  //     surnameParagraph.textContent = `Last name: ${bio.last}`;
  //     parent.appendChild(surnameParagraph);

  //     // console.log(`Last name: ${bio.last}`)
  //   }
  console.log(allPeople);
}
// submit()
