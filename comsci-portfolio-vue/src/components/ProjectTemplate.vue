<!-- vue blog page -->

<script>

function getImageUrl(url) {
  return new URL(`/src/assets/images/project_images/${url}`, import.meta.url).href;
}


export default {
    name: 'ProjectTemplate',
    data() {
        return {
            proj: {},
        }
    },
    methods: {
        getImageUrl,
    },
    async created() {
        const fileName = this.$route.params.slug;
        const importedProject = await import(`@/projects/${fileName}.json`);
        this.proj = importedProject.default;
    }
}

</script>


<template>
 <body v-if="Object.keys(proj).length" class="project-page">
    <div class="content-max-width">
    <!-- <div class="bottomnav">
      <div class="topnav">
        <div>Go back</div>
      </div>
    </div> -->
    <a href="/" class="project-goback">Go back</a>
    <h1 class="project-title">{{proj.projectName.split(' ').slice(0, -2).join(' ')}} <span class="title-highlight"> {{proj.projectName.split(' ').slice(-2).join(' ')}} </span></h1>

    <div class="project-resources">
      <div class="rq" v-if="proj.researchQuestion" >Research Question: <span class="info">{{ proj.researchQuestion }}</span></div>
      <div class="Time: ">timeframe: <span class="info">from {{proj.startTime}} to {{ proj.endTime }}</span></div>
      <div class="participants">participants: <span class="info" v-if="proj.participants.length > 0">{{ proj.participants.length+1 }}</span> <span class="info" v-else>solo project</span></div>
      <div class="file" v-if="proj.notes.links.researchPaperURL">Research paper: <span class="info">{{proj.notes.links.researchPaperURL}}</span></div>
      <div class="file" v-if="proj.notes.links.githubPage">GitHub page: <span class="info"><a :href="proj.notes.links.githubPage" target="_blank">{{proj.notes.links.githubPage}}</a></span></div>
      <div>Topics: <span class="info">{{ proj.keywords.join(', ') }}</span></div>
      <div>Programming languages: <span class="info">{{ proj.languages.join(', ') }}</span></div>
    </div>

    <div class="description">
        <h2>Summary</h2>
        <p>{{ proj.summary }}</p>
    </div>
    <div v-html="proj.content"></div>
 
    <div class="img-intext">
    <img :src="getImageUrl(proj.heroImgName)">
    <!-- <div class="caption">Caption</div> -->
    </div>

  </div>
  </body>
  <!-- <body v-else>
    <div class="content-max-width">
      <h1>Project not found</h1>
      <a href="/" style="text-decoration: underline;">Go back home</a>
    </div>
</body> -->
</template>


<style>

.project-page h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.project-goback {
    color: white;
    background-color: var(--c-dark);
    position: fixed;
    right: 1rem;
    top: 0.5rem;
    /* inset: 1rem 1rem auto auto; */
    padding: 0.5rem 1rem;
    border: 1px solid var(--c-dark);
    border-radius: 2rem;
    transition: 0.2s ease;
}

a.project-goback, a.project-goback:visited {
    /* all: unset; */
    color: white;
    /* background-color: inherit; */
    text-decoration: none;
}

a.project-goback:hover {
    color: var(--c-dark);
    background-color: var(--c-light);
}

.project-title {
    max-width: 40rem;
    font-size: 3rem;
    text-align: center;
    margin: 20vh auto;
    /* padding-right: 40%; */
}

.project-title .title-highlight {
    /* display: inline-block; */
    background-color: var(--c-dark);
    color: var(--c-light);
    padding: 0.5rem;
    /* mix-blend-mode: difference; */
}

.project-resources {
    margin: 2rem 0;
}

.project-resources .info {
    font-style: italic;
}

.img-intext {
    max-width: inherit;
    text-align: center;
    margin: 2rem auto;
}

.img-intext img{
    display: block;
    width: 40rem;
    max-width: inherit;
    max-height: 98vh;
    margin: 0.6rem auto;
}

.img-midtext .caption {
    font-style: italic;
}

.content-max-width{
    max-width: 100%;
    padding: 0 8px;
    margin:auto;
}
</style>