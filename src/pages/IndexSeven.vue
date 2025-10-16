<template>
<div>
        <NavLight/>
        <section class="relative block h-screen swiper-slider-hero">
            <div class="absolute top-0 w-full h-full swiper-container end-0">
                <swiper class="swiper-wrapper" :modules="modules" :autoplay="true">
                    <swiper-slide class="flex items-center overflow-hidden swiper-slide">
                        <div class="absolute top-0 flex items-center w-full h-full bg-center slide-inner end-0 slide-bg-image" :style="{'background-image' : 'url('+ require('../assets/images/bg/1.jpg') +')'}">
                            <div class="absolute inset-0 bg-black/70"></div>
                            <div class="container relative">
                                <div class="grid grid-cols-1">
                                    <div class="text-start">
                                        <h1 class="mb-5 text-4xl font-bold leading-normal tracking-wide text-white capitalize lg:leading-normal lg:text-5xl">Connect with <br> customers smartly</h1>
                                        <p class="max-w-xl text-lg text-white/70">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        
                                        <div class="mt-6">
                                            <a href="" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">See More</a>
                                        </div>
                                    </div>
                                </div><!--end grid-->
                            </div><!--end container-->
                        </div><!-- end slide-inner --> 
                    </swiper-slide> <!-- end swiper-slide -->

                    <swiper-slide class="flex items-center overflow-hidden swiper-slide">
                        <div class="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" :style="{'background-image' : 'url('+ require('../assets/images/bg/2.jpg') +')'}">
                            <div class="absolute inset-0 bg-black/70"></div>
                            <div class="container relative">
                                <div class="grid grid-cols-1">
                                    <div class="text-start">
                                        <h1 class="mb-5 text-4xl font-bold leading-normal tracking-wide text-white capitalize lg:leading-normal lg:text-5xl">Get all the <br> inspirations for your business</h1>
                                        <p class="max-w-xl text-lg text-white/70">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        
                                        <div class="mt-6">
                                            <a href="" class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white bg-teal-500 rounded-md">See More</a>
                                        </div>
                                    </div>
                                </div><!--end grid-->
                            </div><!--end container-->
                        </div><!-- end slide-inner --> 
                    </swiper-slide> <!-- end swiper-slide -->
                </swiper>
                <!-- end swiper-wrapper -->

              
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

 import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation , Autoplay} from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';

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
        GetInTouch,
         Swiper,
      SwiperSlide,
        },
        setup() {
      return {
        modules: [Navigation, Autoplay],
      };
    },

};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
