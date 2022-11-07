<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div :style="style" class="photo">
      </div>
      <div class="description">
        <h2 class="title">{{title}}</h2>
        <p>
          {{description}}
        </p>
      </div>
    </div>
    <div class="close" @click="$emit('closeModal')" @keypress="$emit('closeModal')">&#10005;</div>
  </div>
</template>
<script>
export default {
  name: 'ModalContent',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: null,
      title: null,
      description: null,
    };
  },
  mounted() {
    this.photo = this.item.links[0].href;
    this.title = this.item.data[0].title;
    this.description = this.item.data[0].description.substring(0, 200);
  },
  computed: {
    style() {
      return `background-image: url('${this.photo}')`;
    },
  },
};
</script>
<style lang="scss" scoped>
  .outerWrapper {
    width: 70vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 10px gray;

    .close {
      position: absolute;
      right: 30px;
      top: 30px;
      cursor: pointer;
      font-size: 30px;
      text-align: center;
    }

    .innerWrapper {
      display: flex;
      height: 400px;
      padding: 30px;
      justify-content: center;
      align-items: center;
      .photo {
        flex-basis: 40%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
      }
      .description {
        flex-basis: 60%;
        padding-left: 40px;
        h2 {
          color: rgb(81, 0, 255);
          font-size: 25px;
        }
        h2::after {
          content: '';
          display: block;
          width: 60%;
          border-bottom: 2px solid #999;
          padding-bottom: 10px;
        }
        p {
          font-size: 15px;
          margin: 0;
          color: #666;
        }
      }
    }
  }

  @media(max-width: 758px) {
    .outerWrapper {
      width: 90vw;
      .innerWrapper {
        flex-grow: 1;
        flex-direction: column;
        padding: 10px;
        .photo {
          width: 100%;
        }

        .description {
          width: 100%;
          padding: 0;
        }
      }
    }
  }

</style>
