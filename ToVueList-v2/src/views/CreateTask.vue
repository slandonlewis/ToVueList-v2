<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import t from '../data/tasks.json'
    import TaskForm from '../components/TaskForm.vue'
    const router = useRouter()
    const taskToCreate = ref({
        id: null,
        name: "",
        description: ""
    })
    const tasksUrl = '../data/tasks.json'
    const createTask = () => {
        fetch(tasksUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToCreate)
        }).then(() => {
            router.push(`/dashboard`)
        })
    }
</script>

<template>
    <div>
        <h1>Create New Task</h1>
        <TaskForm />
    </div>
</template>