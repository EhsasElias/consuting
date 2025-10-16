<template>
    <section class="py-16 realtive md:py-24" id="services">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-6 text-center">
                <h3 class="mb-4 text-2xl font-semibold leading-normal">A Performance-driven Marketing Agency</h3>

                <p class="max-w-xl mx-auto text-slate-400">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-12">
                <div class="lg:col-span-4 md:col-span-5">
                    <div class="sticky top-20">
                        <ul class="p-6 bg-white rounded-md shadow flex-column dark:bg-slate-900 dark:shadow-gray-700" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li role="presentation">
                                <button class="w-full px-4 py-2 text-base font-medium duration-500 rounded-md text-start" :class="activeindex === '1' ? 'text-white bg-teal-500' : 'hover:text-teal-500 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'" @click="tabChange('1')">
                                    <span class="block">Step 1</span>
                                    <span class="block mt-2 text-lg">SEO Audit</span>
                                    <span class="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                </button>
                            </li>
                            <li role="presentation">
                                <button class="w-full px-4 py-2 mt-6 text-base font-medium duration-500 rounded-md text-start" :class="activeindex === '2' ? 'text-white bg-teal-500' : 'hover:text-teal-500 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'" @click="tabChange('2')">
                                    <span class="block">Step 2</span>
                                    <span class="block mt-2 text-lg">Project Execution</span>
                                    <span class="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                </button>
                            </li>
                            <li role="presentation">
                                <button class="w-full px-4 py-2 mt-6 text-base font-medium duration-500 rounded-md text-start" :class="activeindex === '3' ? 'text-white bg-teal-500' : 'hover:text-teal-500 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'" @click="tabChange('3')">
                                    <span class="block">Step 3</span>
                                    <span class="block mt-2 text-lg">Results & Reporting</span>
                                    <span class="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="lg:col-span-8 md:col-span-7">
                    <div id="myTabContent" class="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-700">

                        <div :class="activeindex !== '1' ? 'hidden' : '' " role="tabpanel" aria-labelledby="profile-tab" >
                            <img src="../assets/images/blog/01.jpg" class="rounded-md shadow dark:shadow-gray-700" alt="">

                            <div class="mt-6">
                                <h5 class="text-lg font-medium">SEO Audit</h5>
                                <p class="mt-4 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                <div class="mt-4">
                                    <a href="" class="text-teal-500">Read More <i class="align-middle mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div :class="activeindex !== '2' ? 'hidden' : '' " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <img src="../assets/images/blog/02.jpg" class="rounded-md shadow dark:shadow-gray-700" alt="">

                            <div class="mt-6">
                                <h5 class="text-lg font-medium">Project Execution</h5>
                                <p class="mt-4 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                <div class="mt-4">
                                    <a href="" class="text-teal-500">Read More <i class="align-middle mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div :class="activeindex !== '3' ? 'hidden' : '' " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <img src="../assets/images/blog/03.jpg" class="rounded-md shadow dark:shadow-gray-700" alt="">

                            <div class="mt-6">
                                <h5 class="text-lg font-medium">Results & Reporting</h5>
                                <p class="mt-4 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                <div class="mt-4">
                                    <a href="" class="text-teal-500">Read More <i class="align-middle mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section>
</template>


<script>
export default {
    data(){
        return{
            activeindex:"1",
        }
    },

    methods:{
        tabChange(index) {
            this.activeindex = index
        },
    }
}
    

</script>