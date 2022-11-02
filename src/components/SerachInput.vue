<template>
  <div class="search-wrapper">
    <input
    id="search"
    name="search"
    v-model="searchValue"
    @input="handleInput"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
};
</script>
<style lang="scss" scoped>

  input {
    height: 30px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
    background: none;
  }
</style>
