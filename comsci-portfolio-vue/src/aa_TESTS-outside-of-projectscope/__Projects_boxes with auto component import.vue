<script>
const importAll = import.meta.glob('/src/projects/*.vue')

const components = {}

let importPromises = []


export default {
  name: 'Projects_boxes',
  components,
  data() {
    return {
      componentsLoaded: false
    };
  },
  created() {
    for (const path in importAll) {
      importPromises.push(
        importAll[path]().then((mod) => {
          // Remove the "./" from the beginning
          const componentName = path.split('/').pop().split('.')[0]
          console.log(componentName)
          console.log(mod.default)
          this.$options.components[componentName] = mod.default
        })
      )
    }
    Promise.all(importPromises).then(() => {
      this.componentsLoaded = true;
    })
  }
}

</script>
<template>
    <div class="Projects_boxes">
        <div class="Projects_boxes_content">
            <div class="Project_box">
                <div class="Project_box_image"></div>
                <h2 class="Project_box_title">Project 1</h2>
                <div class="Project_box_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
            </div>
            <Project2 v-if="componentsLoaded" />
            <Project1 v-if="componentsLoaded"/>
        </div>
    </div>
</template>

<style>

.Projects_boxes{
    margin-bottom: 10px;
}

.Projects_boxes_content{
    min-height: 600px;
    width: 75vw;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;

}

.Project_box{
    width: 30%;
    height: 400px;
    border: 1px solid black;
    background-color: var(--c-white);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.Project_box_image{
    width: 100%;
    height: 200px;
    background-color: var(--c-dark);
    /* border-radius: 5px 5px 0 0; */
}

.Project_box_title{
    padding: 1rem;
}

.Project_box_description{
    padding: 0 1rem;
}

/* small laptop */
@media (max-width: 1024px) {
    .Projects_boxes_content{
        width: 90vw;
    }

    .Project_box{
        width: 40%;
    }
}

/* phone */
@media (max-width: 600px) {
    .Projects_boxes_content{
        width: 95vw;
    }

    .Project_box{
        width: 100%;
    }
}

</style>