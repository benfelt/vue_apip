<template>
    <div id='my-form-input-component'>
        <b-alert show variant="primary" v-if="errors.any()">
            <h4 class="alert-heading">Error in form</h4>
            <hr>
            {{errors.all()[0]}}
        </b-alert>
        <b-input-group prepend="Let us greet ..." class="mt-3">
            <b-form-input name="name" v-model="greeting.name" v-validate="{ required: true, min:3, max:10 }"></b-form-input>
            <b-input-group-append>
                <b-button variant="info" @click="submit">Save</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>

import HttpClient from '@/helpers/HttpClient'
import EventBus from '@/helpers/EventBus'

export default {
    name: 'GreetingsInputComponent',
    data() {
        return {
            greeting: {
                name: ''
            }
        }
    },
    methods: {
        submit() {
            console.log("Submit MyForm", this.greeting)
            let http = new HttpClient('greetings')
            http.create(this.greeting)
            .then(response => {
                EventBus.$emit('GreetingsInputComponent::submit')
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>
