<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logique pour se connecter, peut-être appeler une API ici
        console.log("Email:", this.email, "Password:", this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Style pour la page de connexion */
  form {
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  