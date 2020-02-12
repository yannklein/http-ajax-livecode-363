const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select 6 elements (input, button, name, email, bio, place)
const input = document.querySelector("#clearbitEmail");
const submit = document.querySelector("#clearbitSubmit");
const name = document.querySelector("#userName");
const email = document.querySelector("#userEmail");
const bio = document.querySelector("#userBio");
const location = document.querySelector("#userLocation");

const fetchAPI = (email) => {
  fetch(`https://person.clearbit.com/v2/combined/find?email=${email}`, {
    headers: {
      'Authorization': authorization
    }
  })
   .then(response => response.json())
   .then((data) => {
    console.log(data);
    // 4. Insert that data into the html
    displayInfo(data);
   });
}

const displayInfo = (data) => {
  name.innerText = data.person.name.fullName;
  email.innerText = data.person.email;
  bio.innerText = data.person.bio;
  location.innerText = data.person.location;
};

// 2. Listen to "click" event (don't forget event.preventDefault)
submit.addEventListener('click', (event) => {
  event.preventDefault();
// 3. Fetch API and see what data you get back
  fetchAPI(input.value);
  input.value = "";
});

