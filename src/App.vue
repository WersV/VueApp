<template>
  <div :class="[{flexStart: step === 1}, 'wrapper']">
    <transition name="slide">
      <img src="@/assets/logo.svg" alt="logo" class="logo" v-if="step === 1">
    </transition>
    <div :class="[{flexStart: step === 1}, 'search']">
      <ModalContent v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false"/>
      <transition name="fade">
        <HeroImage v-if="step === 0" />
      </transition>
      <ClaimMain v-if="step === 0" />
      <SearchInput @customChange="handleInput" :dark="step === 1"/>
      <div class="results" v-if="results && !loading && step === 1">
        <ResultItems v-for="
        item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click="handleModalOpen(item)"/>
      </div>
      <div v-if="results.length === 0 && step === 1">
        <p>No such image</p>
      </div>
    </div>
    <div v-if="loading && step === 1" class="lds-ring">
      <div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import ClaimMain from '@/components/ClaimMain.vue';
import SearchInput from '@/components/SerachInput.vue';
import HeroImage from '@/components/HeroImage.vue';
import ResultItems from '@/components/ResultItems.vue';
import ModalContent from '@/components/ModalContent.vue';

const API = 'https://images-api.nasa.gov';

export default {
  name: 'SearchView',
  components: {
    ClaimMain,
    SearchInput,
    HeroImage,
    ResultItems,
    ModalContent,
  },
  data() {
    return {
      loading: false,
      step: 0,
      modalOpen: false,
      modalItem: null,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },
    handleInput: debounce(function (n) {
      this.loading = true;
      this.searchValue = n;
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then((resp) => {
          this.results = resp.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500),
  },
};
</script>
<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: arial;
  }
  .wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 30px;
    width: 100%;
    height: 100vh;
    &.flexStart {
      justify-content: flex-start;
    }
    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      width: 70vw;
      font-size: 18px;
      line-height: 130%;
      margin-top: 50px;
      &.flexStart {
        margin-top: 70px;
        width: 90vw;
      }
      .results {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        width: 80vw;

        @media(min-width: 768px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: opacity .5s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
      opacity: 0;
    }

    .logo {
      position: absolute;
      top: 40px;
      left: 40px;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #333;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #333 transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
  }
</style>
