<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="homePage"
      @btn-click="this.$emit('btn-click')"
      :text="showAddTask ? 'CLOSE' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: { Button },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
}
</style>
