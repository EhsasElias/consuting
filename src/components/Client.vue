<template>
      <section class="relative py-16 md:py-24" id="review">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h3 class="mb-4 text-2xl font-semibold leading-normal">What Our Users Say</h3>

                    <p class="max-w-xl mx-auto text-slate-400">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-6">
                    <div class="tiny-three-item">
                        <div v-for="item in clientData" :key="item.index" class="text-center tiny-slide">
                            <div class="cursor-e-resize">
                                <div class="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                    <i class="text-teal-500 mdi mdi-format-quote-open mdi-48px"></i>
                                    <p class="text-slate-400">{{item.desc}}</p>
                                    <ul class="mt-3 mb-0 list-none text-amber-400">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                                
                                <div class="mt-5 text-center">
                                    <img :src="item.image" class="mx-auto rounded-full shadow-md size-14 dark:shadow-gray-700" alt="">
                                    <h6 class="mt-2 font-semibold">{{item.name}}</h6>
                                    <span class="text-sm text-slate-400">{{item.title}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section>
</template>

<script>
import { onMounted,} from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

export default {
    data(){
        return{
            clientData : [
                {
                    id:1,
                    image:require('../assets/images/team/01.jpg'),
                    desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
                    name:'Calvin Carlo',
                    title:'Manager'
                },
                {
                    id:2,
                    image:require('../assets/images/team/02.jpg'),
                    desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "',
                    name:'Christa Smith',
                    title:'Manager'
                },
                {
                    id:3,
                    image:require('../assets/images/team/03.jpg'),
                    desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
                    name:'Jemina CLone',
                    title:'Manager'
                },
                {
                    id:4,
                    image:require('../assets/images/team/04.jpg'),
                    desc:'"Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts"',
                    name:'Smith Vodka',
                    title:'Manager'
                },
                {
                    id:5,
                    image:require('../assets/images/team/05.jpg'),
                    desc:'"There is now an abundance of readable dummy texts. These are usually used when a text is required."',
                    name:'Cristino Murfi',
                    title:'Manager'
                },
                {
                    id:6,
                    image:require('../assets/images/team/06.jpg'),
                    desc:'"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero."',
                    name:'Calvin Carlo',
                    title:'Manager'
                },
            ]
        }
    },
    setup() {
        onMounted(() => {
            tns({
         container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
            });
        });
    },
}
</script>