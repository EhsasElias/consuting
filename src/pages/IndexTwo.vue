<template>
    <div>
        <NavLight/>

         <section class="relative table w-full overflow-hidden py-36 lg:py-64" >
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover" :style="{'background-image': 'url(' + require('../assets/images/bg/1.jpg') + ')'}"></div>
            </div>
            <div class="absolute inset-0 bg-black/70"></div>

            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <div class="text-center">
                        <a href="#!" @click="toggle" class="inline-flex items-center justify-center text-teal-500 bg-white rounded-full shadow-lg lightbox size-20 dark:shadow-gray-700 dark:bg-slate-900 dark:text-white">
                            <i class="inline-flex items-center justify-center text-2xl mdi mdi-play"></i>
                        </a>
                    </div>

                    <h4 class="my-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:leading-normal lg:text-5xl">We Collaboration Easy & Fast</h4>
                
                    <p class="max-w-xl mx-auto text-lg text-white/70">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                
                    <div class="relative mt-8">
                        <a href="" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">Get Started</a>
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <div class="relative">
            <div class="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <a href="#about"><i class="absolute top-0 inline-flex items-center justify-center w-12 h-12 mx-auto text-center bg-white rounded-full shadow-md mdi mdi-arrow-down start-0 end-0 dark:bg-slate-900 dark:shadow-gray-800"></i></a>
            </div>

            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <div :class="isActive ? 'fixed' : 'hidden' " class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <div class="relative inline-block">
                    <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0"></iframe>
                    <a class="absolute text-xl text-white mdi mdi-close top-1 right-1" @click="toggle"></a>
                </div>
            </div>
        </div>

        <About/>
        <Features/>
        <AgencyTab/>
        <Cta/>
        <Client/>
        <Pricing/>
        <Blogs/>
        <GetInTouch/>

    </div>
</template>

<script>
import NavLight from '@/components/NavLight.vue'
import About from '@/components/About.vue'
import Features from '@/components/Features.vue'
import AgencyTab from '@/components/AgencyTab.vue'
import Cta from '@/components/Cta.vue'
import Client from '@/components/Client.vue'
import Pricing from '@/components/Pricing'
import Blogs from '@/components/Blogs.vue'
import GetInTouch from '@/components/GetInTouch.vue'

export default {
    name:"index-two",

    components:{
        NavLight,
        About,
        Features,
        AgencyTab,
        Cta,
        Client,
        Pricing,
        Blogs,
        GetInTouch
    },

    data(){
        return{
             isActive: false
        }
        
    },

     methods: {
        toggle() {
        if (!this.isActive) {
            this.isActive = true;
        } else {
            this.isActive = false;
        }
        },
   },
}
</script>