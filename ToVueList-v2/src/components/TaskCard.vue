<script setup>
    import { defineProps } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const {task} = defineProps(['task'])
    const viewTask = () => {
        router.push(`/task/${task.id}`)
    }
</script>

<template>
    <div class="card">
        <h2>{{ task.name }}</h2>
        <div class="card-buttons">
            <button @click="viewTask">View</button>
            <button class="delete">🗑️</button>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background-color: rgb(127, 208, 255);
        color: rgb(17, 17, 124);
        margin: 10px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
    }

    .card-buttons {
        display: flex;
    }

    .delete {
        background-color: red;
    }
</style>