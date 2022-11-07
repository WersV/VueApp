<template>
  <div :style="style" class="item"></div>
</template>
<script>
export default {
  name: 'ResultItems',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title,
    };
  },
  computed: {
    style() {
      return `background-image: url('${this.photo}')`;
    },
  },
};
</script>
<style lang="scss" scoped>
  .item {
    width: 100%;
    height: 35vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;

    @media(min-width: 768px) {
      width: 100%;
      height: 25vw;
    }
  }
</style>
