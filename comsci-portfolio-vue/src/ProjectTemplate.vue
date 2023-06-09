<!-- vue blog page -->

<script>

export default {
    name: 'ProjectTemplate',
    data() {
        return {
            title: "tile",
            projectData: {},
        }
    },
    async created() {
        const fileName = this.$route.params.slug;
        const importedProject = await import(`@/projects/${fileName}.json`);
        this.projectData = importedProject.default;
    }


}
</script>


<template>
<div class="blog-template">
    <h1>Project Template Title</h1>
    <div>This is the page that opens on <i>{{ projectData.projectName }}</i> route</div>
</div>
</template>