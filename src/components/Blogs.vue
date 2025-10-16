<template>
    <section class="relative py-16 md:py-24" id="blog">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h3 class="mb-4 text-2xl font-semibold leading-normal">Blog or News</h3>

                    <p class="max-w-xl mx-auto text-slate-400">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3 md:grid-cols-2">
                    <div v-for="item in blogData" :key="item.index" class="relative overflow-hidden group">
                        <div class="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <img :src="item.image" class="duration-500 group-hover:scale-110" alt="">
                        </div>

                        <div class="mt-6">
                            <div class="flex mb-4">
                                <span class="flex items-center text-sm text-slate-400"><i data-feather="calendar" class="size-4 text-slate-900 dark:text-white me-1.5"></i>{{item.date}}</span>
                                <span class="flex items-center text-sm text-slate-400 ms-3"><i data-feather="clock" class="size-4 text-slate-900 dark:text-white me-1.5"></i>5 min read</span>
                            </div>

                            <a href="" class="text-lg font-semibold duration-500 ease-in-out title hover:text-teal-500">{{item.title}}</a>
                            <p class="mt-2 text-slate-400">{{item.decs}}</p>

                            <div class="mt-3">
                                <a href="" class="text-teal-500">Read More <i class="align-middle mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section>
</template>

<script>
 import feather from 'feather-icons'
export default {
    data(){
        return{
            blogData:[
                {
                    image:require('../assets/images/blog/01.jpg'),
                    title:'Design your apps in your own way',
                    decs:'This is required when, for example, the final text is not yet available.',
                    date:'13th March 2023'
                },
                {
                    image:require('../assets/images/blog/02.jpg'),
                    title:'How apps is changing the IT world',
                    decs:'This is required when, for example, the final text is not yet available.',
                    date:'5th May 2023'
                },
                {
                    image:require('../assets/images/blog/03.jpg'),
                    title:'Smartest Applications for Business',
                    decs:'This is required when, for example, the final text is not yet available.',
                    date:'19th June 2023'
                },
            ]
        }
    },
    mounted() {
        feather.replace();
        }
}
</script>