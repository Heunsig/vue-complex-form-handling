<template>
  <div>
    <h1>Personal Info Form</h1>
    <div>
      <label for="first_name">First Name:</label>
      <input type="text" id="first_name" />
    </div>
    <div>
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" />
    </div>
    <div>
      <!-- Date of birth -->
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" />
    </div>
    <div>
      <!-- Gender selector -->
      <label for="gender">Gender</label>
      <select>
        <option>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
</template>
