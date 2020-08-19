<template>
    <div class="NewMessage">
        <form @submit.prevent="addMessage">
            <label for="message">Add a message (press enter to send):</label>
            <input type="text" id="message" class="grey-text text-lighten-2" v-model="newMessage">
            <p class="red-text" v-if="this.feedback">{{feedback}}</p>
        </form>
    </div>
</template>

<script>
import db from "@/firebase/init"
export default {
    name:"NewMessage",
    props:["usrName"],
    data (){
        return {
            newMessage:null,
            feedback:null
        }
    },
    methods:{
        addMessage(){
            if(this.newMessage){
                db.collection("messages").add({
                    name:this.usrName,
                    content:this.newMessage,
                    date:Date.now()
                }).catch( err => {
                    console.log(err);
                })
                this.feedback = null
                this.newMessage = null
            }else{
                this.feedback="Enter a message!"
            }
        }
    }
    
}
</script>