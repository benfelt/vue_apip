<template>
    <div id="greetings-list-component">
        <b-table 
            striped 
            hover 
            :items="greetings"
            :fields="fields"
        >
        </b-table>
    </div>
</template>

<script>

import EventBus from '@/helpers/EventBus'
import HttpClient from '@/helpers/HttpClient'
import { truncateSync } from 'fs';

export default {
    name: 'GreetingsListComponent',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            greetings: null,
            fields: [
                { key: 'id', label: 'Id', class: 'text-center' },
                { key: 'name', label: 'Name', class: 'text-left'}
            ]
        }
    },
    methods: {
        load() {
            console.log("Loading Greetings")

            let http = new HttpClient('greetings')
            
            let filters = {
                "page": 1,
                "itemsPerPage": 10,
                "name": this.title
            }

            http.read(filters)
            .then(response => {
                this.greetings = response.data['hydra:member']
                eventBus.$emit('GreetingsListComponent::load')
            })
            .catch(function() {
                console.error("In GreetingsListComponent.vue : error while loading data from API")
            })
        }
    },
    created() {
        EventBus.$on('GreetingsInputComponent::submit',this.load)
    },
    mounted()  {
        this.load()
    }
}
</script>

<style>

</style>
