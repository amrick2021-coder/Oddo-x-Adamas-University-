const registerForm = document.getElementById("registerForm");
const submitBtn = registerForm.querySelector("button");

registerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const employeeId = document.getElementById("employeeId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.getElementById("role").value;

    if (!/^EMP\d{3,6}$/.test(employeeId)) {
        alert("Employee ID should be like EMP001");
        return;
    }

    if (fullName.length < 3) {
        alert("Enter a valid full name.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const employee = {
        employeeId,
        name: fullName,
        email,
        password,
        role
    };

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Creating Account...";

    try {

        /*
        const response = await fetch(API_BASE_URL + "/auth/register", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(employee)

        });

        const result = await response.json();

        if(!response.ok){
            throw new Error(result.message);
        }
        */

        console.log(employee);

        alert("Registration Successful.");

        registerForm.reset();

    } catch (error) {

        alert(error.message || "Registration Failed.");

    } finally {

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Create Account";

    }

});