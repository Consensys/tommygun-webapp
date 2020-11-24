<template>
  <div class="ml-4 mr-4 mt-4">
    <div v-if="displayTasks()">
      <b-table
          :fields="fields"
          :items="tasks"
          :tbody-tr-class="rowClass"
          head-variant="dark"
          striped>
      </b-table>
    </div>
    <div v-else>
      <b-table
          disabled
          :fields="fields"
          head-variant="dark"
          striped>
      </b-table>
    </div>

  </div>
</template>

<script>

export default {
  name: "Task",
  data() {
    return {
      fields: [
        {key: 'identifier'},
        {key: 'name', sortable: true},
        {key: 'status', sortable: true},
        {key: 'start', sortable: true},
        {key: 'end', sortable: true},
        {key: 'duration', sortable: true}],
      tasks: [],
      lastTasks: [],
      timer: null,
    }
  },
  created() {
    this.refreshTasks();
    this.timer = setInterval(this.refreshTasks, 500)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    async displayTasks() {
      return Array.isArray(this.tasks) && this.tasks.length;
    },
    async refreshTasks() {
      const tasks = await this.$store.state.services.task.getAll();
      if (JSON.stringify(tasks) !== JSON.stringify(this.lastTasks)) {
        this.tasks = [];
        tasks.forEach(task => {
          if (task.name !== 'fire') {
            this.tasks.push({
              identifier: task.id,
              name: task.name,
              status: task.status,
              start: task.startedAt,
              end: task.endedAt,
              errorMessage: task.errorMessage,
              duration: task.durationMillis,
            });
          }
        });
        this.lastTasks = tasks;
      }
    },
    rowClass(item, type) {
      if (!item || type !== 'row') {
        return;
      }
      if (item.status === 'ERROR') {
        return 'table-danger';
      }
    }
  }
}

</script>

<style scoped>

</style>