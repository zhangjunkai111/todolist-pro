
import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore',{
    state:() =>({
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }),

    actions: {
        addTask(title){
            this.tasks.push({
                id: Date.now(),
                title,
                completed: false
            })
            this.saveTasks()
        },
        removeTask(id){
            this.tasks = this.tasks.filter((task) => task.id!==id)
            this.savaTasks()
        },
        toggleTask(id){
            const task = this.tasks.find(t => t.id === id)
            if(task) task.completed = !task.completed
            this.saveTasks()
        },
        saveTasks(){
            localStorage.setItem('tasks',JSON.stringify(this.tasks))//将tasks数组以字符串的方式存储
        }
    }
})