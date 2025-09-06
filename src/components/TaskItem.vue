
<template>
    <li class="task-item">
        <input
            type="checkbox"
            v-model="task.completed"
            @change="toggle"
        />
        <span :class="{done: task.completed}">{{ task.title }}</span>
        <button @click="remove">❌</button>
    </li>

</template>

<script setup>
import {useTaskStore} from '../stores/taskStore'

const props = defineProps({
    task:Object
})

const taskStore = useTaskStore()

function toggle(){
    taskStore.toggleTask(props.task.id)
}

function remove(){
    taskStore.removeTask(props.task.id)
}

</script>

<style>
.task-item{
    display:flex;
    align-items:center;
    gap:10px;
    padding:6px 0;
}

.task-item span.done{
    text-decoration: line-through;
    color:gray;
}

.task-item button{
    margin-left:auto;
    background:none;
    border:none;
    cursor:pointer;
}
</style>