<template>
  <div class="container">
    <Header title="Task Tracker" buttonTitle="Add Task" />
  </div>
</template>

<script>
import Header from "./components/Header";
import "./app-style.css";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
