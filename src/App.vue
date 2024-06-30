<template>
  <div class="container">
    <Header
      @btn-click="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />

    <router-view :showAddTask="showAddTask"></router-view>

    <Footer />
  </div>
</template>

<script>
import "./app-style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },

  methods: {
    async toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style></style>
