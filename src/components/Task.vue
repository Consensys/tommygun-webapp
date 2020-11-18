<template>
  <div class="ml-4 mr-4 mt-4">
    <b-table
        :fields="fields"
        :items="tasks"
        :tbody-tr-class="rowClass"
        head-variant="dark"
        striped>
    </b-table>
  </div>
</template>

<script>

export default {
  name: "Task",
  data() {
    return {
      fields: ['identifier', 'name', 'status', 'start', 'end', 'duration'],
      tasks: [],
    }
  },
  async mounted() {
    const tasks = await this.$store.state.services.task.getAll();
    tasks.forEach(task => {
      this.tasks.push({
        identifier: task.id,
        name: task.name,
        status: task.status,
        start: task.startedAt,
        end: task.endedAt,
        errorMessage: task.errorMessage,
        duration: task.durationMillis,
      });
    });
  },
  methods: {
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