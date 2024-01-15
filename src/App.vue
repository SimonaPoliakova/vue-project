<template>
  <div id="app">
    <header>
      <div class="logo">Shoe eShop</div>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/collections" class="nav-link">Collections</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
      </nav>
    </header>

    <main style="margin-top: 30px;">
      <RouterView />
    </main>

    <footer>
      <p>&copy; 2024 Simona Poliakova</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #0050a0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  color: #ecf0f1;
  font-weight: bold;
}

nav {
  display: flex;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
}

.nav-link:hover {
  background-color: #0d72d8;
}

main {
  flex-grow: 1;
  margin-top: 70px;
}

footer {
  background-color: #34495e;
  padding: 10px;
  color: #ecf0f1;
  font-size: 14px;
  margin-top: auto;
}

body {
  margin: 0;
}
</style>
