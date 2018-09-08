<template>
  <div class="content">
    Test Registration
  </div>
</template>

<script>
  import styled from 'vue-styled-components';

  const StyleRegistrationBlock = styled('div')`display: grid; width:300px; grid-template-rows: 1fr 2fr 1fr; border:1px dotted black`;

  export default {
    name: 'Registration',

    comments:{
      StyleRegistrationBlock
    },

    data(){
      return{
        authorize: false,

        formData:{
          login: '',
          password: ''
        }
      };
    }
  }
</script>

<style scoped>
  .content{

  }
</style>

