<script setup>
    import { useRoute, RouterView, useRouter } from 'vue-router'
    import tasks from '../data/tasks.json'
    const route = useRoute()
    const router = useRouter()
    const taskId = parseInt(route.params.id)
    const task = tasks.find(t => t.id === taskId)
</script>
<template>
    <h1>View Task</h1>
    <div v-if="task" class="task-view">
        <h1>{{ task.name }}</h1>
        <h3>Task Description:</h3>
        <p>{{ task.description }}</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    <div v-else>
        <h1>Task Not Found...</h1>
    </div>
</template>

<style scoped>
    .task-view {
        background-color: rgb(56, 152, 231);
        padding: 10px;
        padding-left: 30px;
        padding-right: 30px;
        margin: 10px;
    }

    .task-view h1 {
        color: aliceblue;
        background-color: rgb(36, 36, 102);
        padding: 10px;
    }

    .task-view h3 {
        color: rgb(20, 20, 92);
    }

    .task-view p {
        padding: 10px;
        background-color: aliceblue;
    }
</style>