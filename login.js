const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if(email === "" || password === ""){

        alert("Please fill all fields.");

        return;

    }

    const loginData = {

        email: email,

        password: password

    };

    console.log(loginData);

    /*
    Backend Connection (Spring Boot)

    const response = await fetch(API_BASE_URL + "/auth/login",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(loginData)

    });

    */

    alert("Frontend is ready. Backend will be connected later.");

});