<script>
import Hammer from 'hammerjs';

export default {
    name: 'Postcard',
    data() {
        return {
            turned: false,
        }
    },
    mounted() {
    const flipContainer = this.$el.querySelector('.flip-container');
    const hammer = new Hammer(flipContainer);

    hammer.on('swipeleft', () => {
      this.$el.querySelector('.flipper').style.transform = 'rotateY(-180deg)';
      this.turned = true;
    });
    

    hammer.on('swiperight', () => {
      this.$el.querySelector('.flipper').style.transform = 'rotateY(0deg)';
      this.turned = false;
    });
  },
}

</script>

<template>
    <body id="postcard-body">
        <div class="infoMessage" v-if="!this.turned"> Swipe left to turn the card</div>
        <div class="infoMessage" v-if="this.turned"> Swipe right to turn the card</div>
    <div class="flip-container">
        <div class="flipper">
        <div class="front">
            <video class="postcard-video" autoplay loop muted playsinline>
                <source src="/src/assets/videos/yt-postcard-amy.mp4">
            </video>
        </div>
        <div class="back">
        </div>
        </div>
    </div>
    <div class="signature">
        With love, from Áron
    </div>
    </body>
</template>

<style>
    #postcard-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    width: 100%;
    background-color: #598899;
    }
    .postcard-video {
        max-width: 100%;
        max-height: 100%;}

    .flip-container {
      perspective: 1500px;
      /* background-color: aqua; */
      width: fit-content;
      height: fit-content;
      margin-inline: auto;

    }
    .flip-container:hover .flipper {
      /* transform: rotateY(180deg); */
    }
    
    .flipper {
      transition: 0.6s;
      transform-style: preserve-3d;
      position: relative;
      /* height: 200px; */
      width: 90vw;
      max-width: 800px;
      aspect-ratio: 600 / 337.5;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
    }
    .front, .back{
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }

    .front, .back, .postcard-video, .flipper {
        border-radius: 30px;
    }

    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }
    .back {
      font-family: sans-serif;
      padding: 15px;
      width: 100%;
      height: 100%;
      background-image: url('../assets/videos/postcard-back2.webp');
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: #e6cdb3ff;
      border: 7px solid #5f4d4bff;
      transform: rotateY(180deg);
    }

    .infoMessage {
        padding: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(255, 255, 255, 0.8);
        font-size: 1rem;
        transition: all 0.5s ease-in-out;
    }

    .signature {
        /* display: block; */
        /* margin-inline: auto; */
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(255, 255, 255, 0.8);
        /* position: absolute; */
        bottom: 20px;
        /* right: 0; */
        padding: 1rem;
        font-size: 1rem;
    }

</style>