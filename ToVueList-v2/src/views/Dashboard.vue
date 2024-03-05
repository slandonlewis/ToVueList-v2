<script setup>
import t from "../data/tasks.json"
import { ref, watch } from 'vue'
import TaskCard from '../components/TaskCard.vue'

const tasks = ref(t)
const search = ref('')

watch(search, () => {
    tasks.value = t.filter(task => task.name.toLowerCase().includes(search.value.toLowerCase()))
})
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
    .search-section {
        display: flex;
        background-color: rgb(98, 129, 150);
        justify-content: center;
        align-items: center;
        color: rgb(200, 228, 253);
    }

    .search-section input {
        height: 30px;
        width: 70%;
        margin: 5px;
    }
</style>