<template>
  <div id="app">
    <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #3498db;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

main {
  margin-top: 50px;
}
</style>
