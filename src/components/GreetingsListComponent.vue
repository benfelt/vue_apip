<template>
    <div id="greetings-list-component">
        <b-table 
            striped 
            hover 
            :items="greetings"
            :fields="fields"
        >
            <template slot="actions" slot-scope="row">
                <b-button variant="danger" @click="del(row.item.id)">Delete</b-button>
            </template>

        </b-table>
    </div>
</template>

<script>

import EventBus from '@/helpers/EventBus'
import HttpClient from '@/helpers/HttpClient'

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
                { key: 'name', label: 'Name', class: 'text-left'},
                { key: 'actions', label: 'Action'}
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
                EventBus.$emit('GreetingsListComponent::load')
            })
            .catch(function() {
                console.error("In GreetingsListComponent.vue : error while loading data from API")
            })
        },
        del(id) {
            console.log("Delete Greeting")

            let http = new HttpClient('greetings')

            http.delete(id)
            .then(response => {
                EventBus.$emit('GreetingsListComponent::del')
            })
            .catch(function() {
                console.error("In GreetingsListComponent.vue : error while deleting data from API")
            })
        }
    },
    created() {
        EventBus.$on('GreetingsInputComponent::submit',this.load)
        EventBus.$on('GreetingsListComponent::del',this.load)
    },
    mounted()  {
        this.load()
    }
}
</script>

<style>

</style>
