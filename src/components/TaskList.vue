
<template>
    <ul class="task-list">
        <TaskItem
            v-for="task in taskStore.tasks"
            :key="task.id"
            :task="task"
        />
    </ul>
</template>

<script setup>
import {useTaskStore} from '../stores/taskStore'
import TaskItem from './TaskItem.vue'

const taskStore = useTaskStore()
</script>

<style>
    .task-list{
        list-style: none;
        padding:0;
    }
</style>