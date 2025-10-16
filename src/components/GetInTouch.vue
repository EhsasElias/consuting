<template>
     <section class="relative py-16 lg:py-24 bg-slate-50 dark:bg-slate-800" id="contact">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h3 class="mb-4 text-2xl font-semibold leading-normal">Get in touch </h3>

                    <p class="max-w-xl mx-auto text-slate-400">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div><!--end grid-->

                <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-12">
                    <div class="lg:col-span-7 md:col-span-6">
                        <img src="../assets/images/contact.svg" alt="">
                    </div>

                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="lg:ms-5">
                            <div class="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-700">
                                <form>
                                    <div class="grid grid-cols-1 gap-3 lg:grid-cols-12">
                                        <div class="lg:col-span-6">
                                            <label for="name" class="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Name :">
                                        </div>
        
                                        <div class="lg:col-span-6">
                                            <label for="email" class="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Email :">
                                        </div>

                                        <div class="lg:col-span-12">
                                            <label for="subject" class="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" class="w-full h-10 px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Subject :">
                                        </div>
    
                                        <div class="lg:col-span-12">
                                            <label for="comments" class="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" class="w-full px-3 py-2 mt-2 bg-transparent border border-gray-100 rounded outline-none h-28 dark:bg-slate-900 dark:text-slate-200 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" class="inline-flex items-center justify-center h-10 px-6 mt-2 font-medium tracking-wide text-white bg-teal-500 rounded-md">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end container-->
        </section>
</template>