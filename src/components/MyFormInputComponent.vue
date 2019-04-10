<template>
    <div id='my-form-input-component'>
        <input type="text" placeholder="Let us greet ..." v-model="greeting.name"/><button @click="submit()">Save</button>
    </div>
</template>

<script>
export default {
    name: 'MyFormInputComponent',
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
        }
    }
}
</script>

<style>

</style>
