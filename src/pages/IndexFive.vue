<template>
    <div>
        <NavLight/>
        <section class="relative flex items-center w-full bg-gray-900 bg-center bg-no-repeat bg-cover py-36 lg:h-screen dark:bg-slate-800" :style="{'background-image' : 'url('+ require('../assets/images/bg/bg2.png') +')'}">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-[30px]">
                    <div class="lg:col-span-7">
                        <span class="bg-teal-500 text-white text-[12px] font-medium px-2.5 py-0.5 rounded h-5 mb-4">Business</span>
                        <h4 class="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white capitalize lg:leading-normal lg:text-5xl">Welcome To Upcover</h4>
                
                        <p class="max-w-xl text-lg text-white/70">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    
                        <div class="relative mt-6">
                            <a href="" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">Get Started</a>
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="relative z-10 p-6 bg-white shadow dark:bg-slate-900 rounded-xl dark:shadow-gray-800 md:p-8 lg:ms-10">
                            <h4 class="mb-5 text-2xl font-semibold">We are offering 14 <br> days free trial</h4>

                            <form>
                                <div class="grid grid-cols-1 gap-4">
                                    <div class="">
                                        <label class="font-medium form-label">Your Name :</label>
                                        <input type="text" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Name" name="name" required>
                                    </div>

                                    <div class="">
                                        <label class="font-medium form-label">Your Email :</label>
                                        <input type="email" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Email" name="email" required>
                                    </div>

                                    <div class="">
                                        <label class="font-medium form-label">Phone No. :</label>
                                        <input name="number" id="phNumber" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="+12 12458 854" required>
                                    </div>
                                    
                                    <div>
                                        <a href="" class="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">Free Trial</a>
                                    </div>
                                </div><!--end grid-->
                            </form>
                            <!-- end form -->
                        </div>
                    </div>
                </div>
            </div><!--end container-->
        </section>
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
import Pricing from '@/components/Pricing.vue'
import Blogs from '@/components/Blogs.vue'
import GetInTouch from '@/components/GetInTouch.vue'

export default {
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
    }
}


</script>