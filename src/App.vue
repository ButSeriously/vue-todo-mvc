<template>
  <div>
    <ul v-for="todo in $data.todos.filter(shouldShowTodo)">
      <li v-bind:class="{complete: todo.done}">
        {{ todo.text }}
        <input type="checkbox" v-model="todo.done">
      </li>
    </ul>
    <form v-on:submit="handleAddTodo($event)">
      <input type="text" v-model="input">
    </form>
    <label class="show-completed">
      Show Completed Items?
      <input type="checkbox" v-model="showDone">
    </label>
  </div>  
</template>
<script>
  export default {
    methods: {
      handleAddTodo(e) {
        e.preventDefault();
        this.$data.todos.push({text:this.input});
        this.input = "";
      },
      shouldShowTodo(todo) {
        if (this.$data.showDone) {
          return true;
        }
        return !todo.done;
      }
    },
    data(){
      return this.$props.state;
    },
    props: ['state']
  }
</script>
<style>
  .complete {
    color: gainsboro;
    text-decoration: line-through;
    font-style: italic;
  }
</style>

