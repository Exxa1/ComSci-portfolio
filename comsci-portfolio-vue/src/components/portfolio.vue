<script>
import Banner from '@/components/Banner.vue';

export default {
name: 'Portfolio',
components: {
    Banner,
},
}
</script>

<template>
    <Banner />
    <div>
        <div class="video-portfolio-container">


            <div class="video-portfolio-box">
                <div class="video-portfolio-video">
                    <iframe src="https://www.youtube.com/embed/gLHZVfgwszg" width="640" height="480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
                <div class="video-portfolio-text">
                    <h3>The message</h3>
                    <p>The Message is a project film inspired by the quirky and whimsical style of Wes Anderson. The whole production was done by me with essential help from Panna Kovács-Panna and my friends who took part in the film as actors.</p>
                    <p class="video-portfolio-dates">2023.05.04</p>
                </div>
            </div>

            <div class="video-portfolio-box">
                <div class="video-portfolio-text">
                    <h3>Garabolyos product showcase</h3>
                    <p>Discover Garabolyos Shop through my lens. I've crafted both the video and photographs, showcasing their unique products. My work has been featured in successful ad campaigns, and I'm honored to be part of their success.</p>
                    <p class="video-portfolio-dates">2020.05.20</p>
                </div>
                <div class="video-portfolio-video">
                    <iframe src="https://drive.google.com/file/d/1ywbqu5frQJB6i7WdcFlLYJPOPygD6IIn/preview" width="640" height="480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
            </div>

            <div class="video-portfolio-box">
                <div class="video-portfolio-video">
                    <iframe src="https://drive.google.com/file/d/1Ov3fxBGJDhkr2sQe5SMv7uT5lwORv9wB/preview" width="640" height="480" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
                <div class="video-portfolio-text">
                    <h3>Ghostnet busters</h3>
                    <p>This video played a part in securing first place at a hackathon where various teams competed to make a difference for marine life. Explore the winning entry that helped us earn this honor. </p>
                    <p class="video-portfolio-dates">2022.09.24</p>
                </div>
            </div>

            <div class="video-portfolio-box">
                <div class="video-portfolio-text">
                    <h3>Nicolas</h3>
                    <p>A light-hearted mockumentary-style short film created for a class assignment.</p>
                    <p class="video-portfolio-dates">2023.05.04</p>
                </div>
                <div class="video-portfolio-video">
                    <iframe src="https://www.youtube.com/embed/4673G6X64EY" width="640" height="480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
            </div>

            <div class="video-portfolio-box">
                <div class="video-portfolio-video">
                    <video controls>
                        <source src="/src/assets/videos/yt-postcard-amy.mp4">
                    </video>
                </div>
                <div class="video-portfolio-text">
                    <h3>Video postcard</h3>
                    <p>Reviving the nostalgia of traditional postcards in the digital era. The goal is to share heartfelt video messages, bringing the warmth of a personal touch to loved ones in the modern world. Have a look at an example at <a href="https://aronkuna.com/amy-birthday">https://aronkuna.com/amy-birthday</a></p>
                    <p class="video-portfolio-dates">2023.06.20</p>
                </div>
            </div>

            <div class="video-portfolio-box">
                <div class="video-portfolio-text">
                    <h3>Bridge Opening</h3>
                    <p>A cinematic tribute to the renowned Hungarian writer Arany János. Our short film, crafted for a competition in Hungary, brings to life the essence of his poetic masterpiece. </p>
                    <p class="video-portfolio-dates">2020.05.01</p>
                </div>
                <div class="video-portfolio-video">
                    <iframe src="https://www.youtube.com/embed/wTZQ45F_Bj8" width="640" height="480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
            </div>


        </div>
    </div>
</template>

<style>
.video-portfolio-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1rem;
    /* height: 100vh; */
    padding: 5px;
    /* background-color: #598899; */
    align-items: stretch;
    }

.video-portfolio-box {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--c-dark);
}

.video-portfolio-video {
    display: flex;
    align-items: center;
    height: 15rem;
    flex-basis: 30%;
}

.video-portfolio-video video {
    /* height: 100%; */
    max-width: 100%;
    max-height: 98%;
}

.video-portfolio-video iframe {
    /* height: 100%; */
    max-width: 100%;
    max-height: 98%;
}

.video-portfolio-text {
    display: flex;
    flex-basis: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 3rem;
}

.video-portfolio-text h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

.video-portfolio-dates {
    margin-top: 1rem;
}


@media (min-width: 1024px) {
    .video-portfolio-container{
        max-width: 80%;
    }
}


</style>