import React from 'react'

import '../styles/layoutstyle/setting.css'

function Setting() {
  return (
    <div class="settings-container">
    <h1>Account Settings</h1>

    <section class="settings-grid">
      {/* <!-- Account Info --> */}
      <div class="settings-card" onclick="navigateTo('profile-info.html')">
        <h3>Profile Info</h3>
        <p>Update your personal information like name, email, etc.</p>
      </div>

      {/* <!-- Profile Picture --> */}
      <div class="settings-card" onclick="navigateTo('profile-picture.html')">
        <h3>Profile Picture</h3>
        <p>Change or upload a new profile image.</p>
      </div>

      {/* <!-- Password --> */}
      <div class="settings-card" onclick="navigateTo('change-password.html')">
        <h3>Security</h3>
        <p>Update your password and secure your account.</p>
      </div>

      {/* <!-- Preferences --> */}
      <div class="settings-card" onclick="navigateTo('preferences.html')">
        <h3>Preferences</h3>
        <p>Theme, notification and display settings.</p>
      </div>

      {/* <!-- Danger Zone --> */}
      <div class="settings-card danger" onclick="navigateTo('danger-zone.html')">
        <h3>Danger Zone</h3>
        <p>Deactivate or permanently delete your account.</p>
      </div>
    </section>
  </div>
  )
}

export default Setting