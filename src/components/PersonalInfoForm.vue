<template>
  <div>
    <h2>Personal Information</h2>
    <div>
      <label for="fullName">* Full Name:</label>
      <div>
        <input type="text" id="fullName" />
      </div>
    </div>
    <div>
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" />
    </div>
    <div>
      <label for="gender">Gender:</label>
      <select id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
</template>
