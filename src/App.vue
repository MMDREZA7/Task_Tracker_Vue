<template>
  <div class="container">
    <Header title="Task Tracker" buttonTitle="Add Task" />
    <Tasks @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header";
import "./app-style.css";
import Tasks from "./components/Tasks";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    deleteTask(id) {
      if (confirm("Are You sure to delete ?")) {
        this.tasks = this.tasks.filter((task) => task.id != id);
      }
    },
  },

  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30am",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "March 3rd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "March 3rd at 11:00am",
        reminder: false,
      },
    ];
  },
};
</script>

<style></style>
TasksTasks
