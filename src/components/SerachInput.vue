<template>
    <input
    id="search"
    name="search"
    :class="{dark}"
    @change="handleChange"
    />
</template>
<script>
export default {
  name: 'SearchInput',
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('customChange', e.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>

  input {
    width: 70%;
    max-width: 400px;
    border: 0;
    border-bottom: 1px solid white;
    background: none;
    color: white;
    text-align: center;
    transition: box-shadow .2s;
    font-size: 25px;
    margin-bottom: 40px;
    @media (min-width: 768px) {
      font-size: 50px;
    }
  }
  input:focus {
      outline: none;
      box-shadow: 0 17px 12px -12px rgba(255,255,255,.6);
  }
  .dark {
    color: #1e3d4a;
    border-bottom-color: #1e3d4a;
  }

  .dark:focus {
      outline: none;
      box-shadow: 0 17px 12px -12px rgba(#1e3d4a,.4);
  }

</style>
