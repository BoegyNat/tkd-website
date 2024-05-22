// register.js
document.getElementById('register-form').addEventListener('submit', registerUser);

async function registerUser(e) {
  e.preventDefault();
  const studentId = document.getElementById('student-id').value;
  const dob = document.getElementById('dob').value;
  const batch = document.getElementById('batch').value;
  const position = document.getElementById('position').value;
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const phone = document.getElementById('phone').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
  const password = document.getElementById('password').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(`${studentId}@example.com`, password);
    const user = userCredential.user;

    // Upload profile picture
    const storageRef = storage.ref();
    const profilePicRef = storageRef.child(`profile_pictures/${user.uid}`);
    await profilePicRef.put(profilePicture);

    const profilePicURL = await profilePicRef.getDownloadURL();

    // Save user info to Firestore
    await db.collection('users').doc(user.uid).set({
      studentId,
      dob,
      batch,
      position,
      firstName,
      lastName,
      phone,
      profilePicURL,
      role: 'normal',  // Default role for new users
      approved: false  // Need approval
    });

    alert('Registration successful. Waiting for approval.');
  } catch (error) {
    console.error('Error registering new user:', error);
    alert('Error: ' + error.message);
  }
}
