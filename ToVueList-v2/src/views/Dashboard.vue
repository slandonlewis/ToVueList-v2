<script setup>
import t from "../data/tasks.json"
import { ref, watch } from 'vue'
import TaskCard from '../components/TaskCard.vue'

const tasks = ref(t)
const search = ref('')
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <div class="search-section">
            <h3>Search Task: </h3>
            <input type="text" v-model.trim="search" placeholder="Looking for a specific task?">
        </div>
        <div class="tasks-container">
            <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
        </div>
    </div>
</template>

<style scoped>

</style>