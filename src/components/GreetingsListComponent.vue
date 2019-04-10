<template>
    <div id="greetings-list-component">
    </div>
</template>

<script>

import EventBus from '@/helpers/EventBus'

export default {
    name: 'GreetingsListComponent',
    methods: {
        load() {
            console.log("Loading Greetings")
        }
    },
    created() {
        EventBus.$on('GreetingsInputComponent::submit',this.load)
    }
}
</script>

<style>

</style>
