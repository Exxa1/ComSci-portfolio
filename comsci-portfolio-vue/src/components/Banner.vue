<!-- basic vue setup -->
<script>
export default {
  name: 'Banner',
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
}
</script>
<template>
  <div class="banner">
    <div class="banner_content">
      <h1 class="banner_title">Portfolio</h1>
      <p class="banner_name">Áron Kuna</p>
      <div class="banner_image"></div>
    </div>
  </div>
</template>

<style>
.banner {
    /* background-image: url('../assets/banner.jpg'); */
    background-color: var(--c-white);
    width: 100%;
    min-height: 80vh;
    margin-bottom: 14vh;
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
}

.banner_content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 0rem;
  padding: 2rem;
  padding-top: 40vh;	
}

.banner_title {
  /* position: relative; */
  grid-area: 1 / 1 / 2 / 2;
  justify-self: end;
  padding-right: 1rem;
  font-size: 4rem;
  font-family: var(--f-monospace);
}

.banner_name {
  grid-area: 2 / 1 / 3 / 2;
  justify-self: end;
  font-size: 1.5rem;
}

.banner_image {
  grid-area: 1 / 2 / 3 / 3;
  width: 50%;
  aspect-ratio: 1 / 1;
  background-image: url('../assets/images/banner_image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
}

/* for phones */
@media (max-width: 600px) {
  .banner_content {
    height: 65vh;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    padding: 20vh 2rem 2rem;
  }
  .banner_title {
    grid-area: 2 / 1 / 3 / 2;
    padding: 2rem 0 0;
    justify-self: inherit;
    align-self: center;
  }
  .banner_name {
    grid-area: 3 / 1 / 4 / 2;
    justify-self: inherit;
    align-self: start;    
  }
  .banner_image {
    grid-area: 1 / 1 / 2 / 2;
  }
}

/* small phones */
@media (max-width: 400px) {
  .banner_title {
    font-size: 3rem;
  }
}

</style>