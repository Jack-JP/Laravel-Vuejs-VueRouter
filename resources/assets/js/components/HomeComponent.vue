<template>
  <div class="row">
      <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
              <div class="panel-heading">Home Component</div>

              <div class="panel-body">
                  <p>Hello  <small>{{ name }}</small> </p>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name: 'JP',
    }
  },
  methods: {}


}
</script>
<style lang="scss" scoped>
</style>
