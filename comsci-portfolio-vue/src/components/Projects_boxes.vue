<script>
// console.log(project_abstracts)
// console.log(project_abstracts['projects'][0])


function getImageUrl(url) {
  return new URL(`/src/assets/images/project_images/${url}`, import.meta.url).href;
}

export default {
    name: 'Projects_boxes',
    data(){
        return{
            importedProjects: {},

        }
    },
    methods: {
        getImageUrl,
    },
    async created(){
    const files = await import.meta.globEager('@/projects/*');

    const importedProjects = {}
    for (const projectFilePath in files){
        const importedProject = files[projectFilePath].default;
        importedProjects[importedProject.id] = importedProject;
    }
    this.importedProjects = importedProjects
    }
}

</script>
<template>
    <div class="Projects_boxes" id="projects">
        <div class="Projects_boxes_content">
            <a v-for="box in Object.values(importedProjects)" :key="box.id" class="Project_box" :href="`/project-${box.projectURL}`">
                <img :src="getImageUrl(box.heroImgName)" alt="" class="Project_box_image"/>
                <h2 class="Project_box_title">{{box.projectName}}</h2>
                <div class="Project_box_description">{{ box['summary'].slice(0, 100) }}...</div>
                <div class="Project_box_date">{{box.endTime}}</div>
            </a>
        </div>
    </div>
</template>

<style>

.Projects_boxes{
    margin-bottom: 10px;
}

.Projects_boxes_content{
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Creates as many columns as possible with a minimum width of xx and a maximum of 1fr */
    justify-content: space-around;
    align-content: start;
    min-height: 1200px;
    width: 75vw;
    margin: 0 auto;
    /* border: 1px solid black; */

}

.Project_box{
    position: relative;
    margin: 0 auto;
    max-width: 400px;
    min-height: 500px;
    padding-bottom: 2rem;
    border: 1px solid black;
    background-color: var(--c-white);
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
    transition: box-shadow .3s ease-in-out;
}

a.Project_box{
    text-decoration: none;
    color: var(--c-dark);
}

.Project_box_image{
    width: 100%;
    height: 250px;
    background-color: var(--c-dark);
    object-fit: cover;
    /* object-fit: contain; */
    filter: grayscale(100%);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    /* border-radius: 5px 5px 0 0; */
}

.Project_box:hover {
    box-shadow: 0 0 0 2px var(--c-dark);
}

.Project_box:hover .Project_box_image{
    filter: grayscale(10%);

}

.Project_box_title{
    padding: 1rem;
    text-wrap: balance;
    text-align: center;
}

.Project_box_description{
    padding: 0 1rem;
}

.Project_box_date{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.5rem;
    font-style: italic;
    text-align: right;
}

/* small laptop */
@media (max-width: 1024px) {
    .Projects_boxes_content{
        width: 90vw;
    }
}

/* phone */
@media (max-width: 600px) {
    .Projects_boxes_content{
        width: 95vw;
    }
}

</style>