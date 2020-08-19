<template>
    <div class="chat container">
        <h2 class="light-blue-text text-darken-1">Vue Chat</h2>
        <div class="card grey darken-3" v-chat-scroll>
            <div class="card-content" v-for="message in messages" :key="message.id">
                <span class="red-text text-accent-2">{{message.name}}</span>
                <span class="message white-text">{{message.content}}</span>
                <span class="time grey-text text-darken-2">{{message.date}}</span>
            </div>
            <div class="card-action">
                <!-- <input type="text" class="grey-text text-lighten-2"> -->
                <NewMessage :usrName="usrName" />
            </div>
        </div>
    </div>
</template>

<script>

import NewMessage from "@/components/NewMessage"
import db from "@/firebase/init"
import moment from "moment"

export default {
    name: "Chat",
    props: ["usrName"],
    components: {
        NewMessage:NewMessage
    },
    data () {
        return {
            messages: []
        }
    },
    methods: {

    },
    created(){
        let ref = db.collection("messages").orderBy("date")

        ref.onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change => {
                if(change.type == "added"){
                    let doc = change.doc
                    this.messages.push({
                        id:doc.id,
                        name:doc.data().name,
                        content:doc.data().content,
                        date:moment(doc.data().date).format("lll")
                    })
                }
            })
        })

    }
}
</script>

<style>

.chat h2{
    font-size: 3.5em;
    text-align: center;
}

.card {
    max-width:700px;
    display: grid;
    margin: auto;
    max-height: 700px;
    overflow: auto;
}

.card .card-content span.time {
    font-size: 0.8em;
    display: block;
}

.card .card-content span{
    font-size: 1.4em;
}

.card .card-content .message{
    display: grid;
}

.card::-webkit-scrollbar {
    width: 3px;
}

.card::-webkit-scrollbar-track {
    background: #ddd;
}

.card::-webkit-scrollbar-thumb {
    background: #aaa;
}

</style>