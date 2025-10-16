<template>
    <div>
        <Navbar/>

        <section class="relative flex items-center bg-center bg-no-repeat bg-cover md:h-screen py-36" :style="{'background-image' : 'url('+ require('../assets/images/bg/2.png') +')'}" >
            <div class="container relative">
                <div class="relative grid items-center grid-cols-1 gap-6 mt-6 lg:grid-cols-12 md:grid-cols-2">
                    <div class="lg:col-span-7 md:me-6">
                        <h4 class="mb-5 text-4xl font-semibold leading-normal tracking-wide lg:leading-normal lg:text-5xl">Revolutionizing Your <span class="font-bold text-teal-500">Business</span> with Upcover</h4>
                        <p class="max-w-xl text-lg text-slate-400">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    
                        <div class="relative mt-6 space-x-1">
                            <a href="" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">Get Started</a>
                            <a href="#!" @click="toggle" class="inline-flex items-center justify-center text-base tracking-wide text-center text-white align-middle duration-500 bg-teal-500 rounded-full size-9 lightbox"><i class="text-xl align-middle mdi mdi-play"></i></a><small class="text-sm font-medium uppercase align-middle ms-2">Watch Now</small>
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="relative">
                            <img src="../assets/images/about2.jpg" class="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]" alt="">
    
                            <div class="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-teal-500/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                        
                            <div class="absolute flex items-center justify-between p-4 m-3 bg-white rounded-lg shadow-md bottom-16 md:-start-10 -start-5 dark:shadow-gray-800 dark:bg-slate-900 w-60">
                                <div class="flex items-center">
                                    <div class="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
                                        <i data-feather="monitor" class="w-6 h-6"></i>
                                    </div>
                                   <Counter/>
                                </div>
    
                                <span class="text-red-600"><i class="mdi mdi-trending-down"></i> 0.5%</span>
                            </div>
    
                            <div class="absolute w-48 p-4 m-3 bg-white rounded-lg shadow-md top-16 md:-end-10 -end-5 dark:shadow-gray-800 dark:bg-slate-900">
                                <h5 class="mb-3 text-lg font-semibold">Manage Software</h5>
                                <div class="flex justify-between mt-3 mb-2">
                                    <span class="text-slate-400">Progress</span>
                                    <span class="text-slate-400">84%</span>
                                </div>
                                <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div class="bg-teal-500 h-[6px] rounded-full" style="width: 84%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section>
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
import feather from 'feather-icons'
import Navbar from '@/components/Navbar.vue'
import Counter from '@/components/Counter.vue'
import About from '@/components/About.vue'
import Features from '@/components/Features.vue'
import AgencyTab from '@/components/AgencyTab.vue'
import Cta from '@/components/Cta.vue'
import Client from '@/components/Client.vue'
import Pricing from '@/components/Pricing.vue'
import Blogs from '@/components/Blogs.vue'
import GetInTouch from '@/components/GetInTouch.vue'

export default {
    components:{
        Navbar,
        Counter,
        About,
        Features,
        AgencyTab,
        Cta,
        Client,
        Pricing,
        Blogs,
        GetInTouch,
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
    mounted() {
        feather.replace();
    }
    
}
</script>