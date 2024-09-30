// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("button").addEventListener("click", async () => {
//         try {
//             let res = await axios("https://api.thecatapi.com/v1/images/search");
//             document.querySelector("#result").src = res.data[0].url;
//         } catch (e) {
//             console.log(e);
//         }
//     });
// });

function myfun() {
    let buttons = document.getElementsByClassName("follow-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#222222";
    }
}
function Myfun() {
    let button = document.getElementsByClassName("message-btn")[0];
    button.addEventListener("click", function() {
        window.open("https://example.com/message", "_blank");
    });
}

// Randomly API 
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

btn.addEventListener("click", () => {
    fetch(url)
    .then(res => res.json())
    .then(data => jokeContainer.textContent = data.joke)
    .catch(() => jokeContainer.textContent = "Couldn't fetch a joke.");
});
// Show form in 
const input = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("pass");

document.getElementById("btnn").addEventListener("click", () => {
    // Get values from the input fields
    const nameValue = input.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // Display the values in the h2 element
    document.getElementById("ans").innerHTML = `
        Name: ${nameValue} <br>
        Email: ${emailValue} <br>
        Password: ${passwordValue}
    `;

    // After 5 seconds, hide the displayed values
    setTimeout(() => {
        // Clear the content
        document.getElementById("ans").innerHTML = "";

        document.getElementById("submit").innerHTML = `
            <h3>Your Form Finaly submitted </h3>
            
        `;
    }, 5000); 
});
