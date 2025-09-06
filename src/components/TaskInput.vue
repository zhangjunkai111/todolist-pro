<template>
    <div class="task-input">
        <input
            v-model="title"
            @keyup.enter="add"
            placeholder="请输入任务..."
        />
        <button @click="add">添加</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useTaskStore} from '../stores/taskStore'

const taskStore = useTaskStore()
const title = ref('')

function add(){
    if(title.value.trim() !== ''){
        taskStore.addTask(title.value)
        title.value = ''
    }
}
</script>

<style>
    .task-input{
        display: flex;
        gap:10px;
        margin-bottom:20px;
    }
    .task-input input{
        flex:1;
        padding:8px;
    }
</style>