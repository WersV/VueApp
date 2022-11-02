<template>
  <div class="wrapper">
    <div class="search">
      <ClaimMain />
      <SearchInput />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import ClaimMain from '@/components/ClaimMain.vue';
import SearchInput from '@/components/SerachInput.vue';

const API = 'https://images-api.nasa.gov';

export default {
  name: 'SearchView',
  components: {
    ClaimMain,
    SearchInput,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then((resp) => {
          this.results = resp.data.collection.items;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500),
  },
};
</script>
<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 30px;
    width: 100%;
    height: 100vh;
    background-image: url('@/assets/heroimage.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0%;
  }
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 200px
  }
</style>
