<template>
  <div class="myform">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="10"><GreetingsInputComponent /></b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col cols="10"><GreetingsListComponent title="dear" /></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import GreetingsInputComponent from '@/components/GreetingsInputComponent'
import GreetingsListComponent from '@/components/GreetingsListComponent'

export default {
  name: 'MyFormView',
  components: {
    GreetingsInputComponent,
    GreetingsListComponent
  }
}
</script>
