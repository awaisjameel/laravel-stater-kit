<script setup lang="ts">
</script>

<template>

    <Head title="Welcome" />
    <Link rel="preconnect" href="https://rsms.me/" />
    <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

    <div
        class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <header class="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
            <nav class="flex items-center justify-end gap-4">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                    class="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]">
                Dashboard
                <Icon-mdi-home />
                </Link>
                <template v-else>
                    <Link :href="route('login')"
                        class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]">
                    Log in
                    </Link>
                </template>
            </nav>
        </header>
        <div
            class="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
            <main
                class="flex w-full max-w-[335px] flex-col-reverse overflow-hidden rounded-lg lg:max-w-4xl lg:flex-row">
                <div
                    class="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                    <h1 class="mb-1 font-medium">Application laravel-stater-kit</h1>

                    <p class="mb-2 text-[#706f6c] dark:text-[#A1A09A]">

                        The skeleton application for the Laravel framework focused on security and type safety. Its the
                        basic
                        laravel/vue stater-kit with Intertial, shadcn-ui and tailwindcss. It is using rector and phpstan
                        for
                        code analysis and cleanup. For types laravel/wayfinder, spatie/laravel-data and
                        spatie/laravel-typescript-transformer which insure single source of truth which automatically
                        increases
                        security and type safety. And configured Unimport for auto import of components and functions
                        for better
                        DX.


                    </p>

                </div>
            </main>
        </div>
        <div class="hidden h-14.5 lg:block"></div>
    </div>
</template>
