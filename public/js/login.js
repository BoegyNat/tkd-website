// login.js
document.getElementById("login-form").addEventListener("submit", loginUser);

async function loginUser(e) {
  e.preventDefault();
  const studentId = document.getElementById("student-id").value;
  const password = document.getElementById("password").value;
  //edfsgsfd
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      `${studentId}@example.com`,
      password
    );
    alert("Login successful!");
    // Redirect to profile page
    window.location.href = "profile.html";
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Error: " + error.message);
  }
}
