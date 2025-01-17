<template>
  <q-header elevated class="PageHeader">
    <q-toolbar class="row items-center">
      <div>
        <q-avatar square>
          <img src="../assets/blog-logo.png" />
        </q-avatar>
      </div>
      <div class="q-ml-auto row items-center">
        <q-btn flat round dense icon="search" />
        <q-btn flat round dense icon="menu" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.PageHeader
    background-color: #ce5d25
    margin: 30px 0 -1px 0
</style>
