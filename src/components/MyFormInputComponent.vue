<template>
    <div id='my-form-input-component'>
        <b-input-group prepend="Let us greet ..." class="mt-3">
            <b-form-input v-model="greeting.name"></b-form-input>
            <b-input-group-append>
                <b-button variant="info" @click="submit">Save</b-button>
            </b-input-group-append>
        </b-input-group>
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
