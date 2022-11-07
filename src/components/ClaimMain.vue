<template>
  <div class="claim-wrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">
      Begin your journey through our amazing galaxy, and discover places you never even heard of.
    </p>
    <p class="subclaim">
      Type anything space-related to start.
    </p>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
  .claim-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #eee;

    @media (min-width: 768px) {
      font-size: 30px;
    }

    .claim {
      font-weight: bold;
      font-size: 45px;
      @media (min-width: 768px) {
        font-size: 80px;
      }
    }
    .subclaim {
      font-size: 17px;
      @media (min-width: 768px) {
        font-size: 30px;
        font-weight: 500;
        line-height: 130%;
      }
  }
  }
</style>
