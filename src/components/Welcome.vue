<template>
  <div class="welcome container">
    <div class="card">
      <h2 class="light-blue darken-3 white-text">Welcome</h2>
      <form @submit.prevent="submitName">
        <div class="input-field">
          <label for="username">Enter your name</label>
          <input placeholder="Name" id="username" v-model="usrName" type="text">
        </div>
        <div v-if="feedback" class="feedback">
          <p class="red-text text-accent-2">{{feedback}}</p>
        </div>
        <div class="card-action">
        <button class="waves-effect waves-light btn red lighten-2">Start chatting!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      usrName : null,
      feedback: null
    }
  },
  methods: {
    submitName(){
      if(this.usrName){
        this.$router.push({name: "Chat", params: {usrName: this.usrName}})
        this.feedback = null
      }else {
        this.feedback = "Please enter a name!"
      }
      
    }
  }
}
</script>


<style>
.welcome {
  max-width: 700px;
  margin-top: 10em;
}
.welcome .card h2{
    text-align: center;
}

.welcome .input-field label{
  padding-left: 15px;
}
 .welcome .input-field input{
    margin-top: 50px;
    margin-left: 15px;
    width: 60%
 }

 .feedback {
   margin-left: 15px;
 }

 .welcome button{
   display: grid;
    margin: auto;
 }
</style>
