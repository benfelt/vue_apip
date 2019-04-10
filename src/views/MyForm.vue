<template>
  <div class="myform">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="10"><MyFormInputComponent /></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import MyFormInputComponent from '@/components/MyFormInputComponent'

export default {
  name: 'MyFormView',
  components: {
    MyFormInputComponent
  }
}
</script>
