<template>
  <div class="app">
    <h1>TodoList Pro版</h1>
    <TaskInput />
    <TaskList />
  </div>
</template>

<script setup>
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
</script>

<style>
  .app{
    max-width:600px;
    margin:40px auto;
    padding:20px;
    font-family: sans-serif;
  }
</style>