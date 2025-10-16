
<template>
   <div>
     <section class="relative py-16 pt-0 md:py-24 md:pt-0" id="services">
            <div class="container relative">
                <div class="grid justify-center grid-cols-1">
                    <div class="relative z-1">
                        <div class="grid justify-center grid-cols-1 text-center md:text-start">
                            <div class="relative">
                                <img src="../assets/images/home.png" alt="">
                                <div class="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                                    <a href="#!" @click="toggle"
                                        class="inline-flex items-center justify-center text-teal-500 bg-white rounded-full shadow-lg lightbox size-20 dark:shadow-gray-700 dark:bg-slate-900 dark:text-white">
                                        <i class="inline-flex items-center justify-center text-2xl mdi mdi-play"></i>
                                    </a>
                                </div>
                              
                            </div>
                        </div>
                        <div class="content md:mt-8">
                            <div class="grid justify-center grid-cols-1 text-center lg:grid-cols-12 md:text-start">
                                <div class="lg:col-start-2 lg:col-span-10">
                                    <div class="grid items-center grid-cols-1 md:grid-cols-2">
                                        <div class="mt-8">
                                            <div class="section-title text-md-start">
                                                <h6 class="text-sm font-semibold uppercase text-white/70">Get Free Trial</h6>
                                                <h3 class="mt-2 text-2xl font-semibold leading-normal text-white">Get An Easy Start <br> With Upcover Now</h3>
                                            </div>
                                        </div>

                                        <div class="mt-8">
                                            <div class="section-title text-md-start">
                                                <p class="max-w-xl mx-auto mb-2 text-white/70">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                                <a href="" class="text-white">Read More <i class="align-middle mdi mdi-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end row -->
            </div><!--end container-->
            <div class="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-teal-400 to-teal-500"></div>
        </section>
          <div :class="isActive ? 'fixed' : 'hidden' " class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                <div class="h-[100%] flex items-center justify-center">
                    <div class="relative inline-block">
                        <iframe src="https://www.youtube.com/embed/S_CGed6E610" width="700" height="500" frameborder="0"></iframe>
                        <a class="absolute text-xl text-white mdi mdi-close top-1 right-1" @click="toggle"></a>
                    </div>
                </div>
          </div>
   </div>
</template>


<script>
export default {
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