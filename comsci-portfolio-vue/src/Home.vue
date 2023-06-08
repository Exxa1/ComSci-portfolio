<!-- The home page -->

<script>
import Banner from './Banner.vue';
import Projects_boxes from './Projects_boxes.vue';

export default {
name: 'Home',
components: {
    Banner,
    Projects_boxes
},
}
</script>

<template>
    <Banner />
    <Projects_boxes />
</template>