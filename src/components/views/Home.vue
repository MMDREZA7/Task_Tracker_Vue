<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />

  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />

  <h3
    v-show="!tasks.length"
    style="
      font-weight: 300;
      background-color: #999;
      padding-top: 10%;
      padding-bottom: 10%;
      border-radius: 10px;
      text-align: center;
      color: black;
      margin-top: 200m;
    "
  >
    Please Add A New Task
  </h3>
</template>

<script>
import Tasks from "../Tasks";
import AddTask from "../AddTask";

export default {
  name: "Home",

  components: {
    Tasks,
    AddTask,
  },

  props: {
    showAddTask: Boolean,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    // functions
    async addTask(task) {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    async deleteTask(id) {
      if (confirm("Are You sure to delete ?")) {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id != id))
          : alert("Error Deleting Task");
      }
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },

    async fetchTasks() {
      const res = await fetch("http://localhost:5000/tasks");

      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);

      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
