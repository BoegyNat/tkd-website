// profile.js
auth.onAuthStateChanged(async user => {
    if (user) {
      try {
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          document.getElementById('profile-info').innerHTML = `
            <img src="${userData.profilePicURL}" alt="Profile Picture" width="100">
            <p>ชื่อ: ${userData.firstName} ${userData.lastName}</p>
            <p>รหัสนักศึกษา: ${userData.studentId}</p>
            <p>วันเดือนปีเกิด: ${userData.dob}</p>
            <p>รุ่น: ${userData.batch}</p>
            <p>ตำแหน่ง: ${userData.position}</p>
            <p>เบอร์โทร: ${userData.phone}</p>
          `;
        } else {
          console.error('No user data found!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } else {
      window.location.href = 'login.html';
    }
  });
  