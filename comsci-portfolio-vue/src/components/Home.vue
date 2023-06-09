<!-- The home page -->

<script>
import Banner from '@/components/Banner.vue';
import Projects_boxes from '@/components/Projects_boxes.vue';

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