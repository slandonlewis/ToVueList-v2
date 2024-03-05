<template>
    <form id='task-form'>
        <label for="name">Task Name:</label>
        <input type="text" id="name" placeholder="Enter a name">
        <label for="name">Task Description:</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Describe the task here"></textarea>
    </form>
    <button>Submit</button>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
</style>