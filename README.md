# Laravel Secure and Type Safe Starter-kit

The skeleton application for the Laravel framework focused on security and type safety. Its the basic laravel/vue starter-kit with Inertia, shadcn-ui and tailwindcss. It is using rector and phpstan for code analysis and cleanup. For types laravel/wayfinder, spatie/laravel-data and spatie/laravel-typescript-transformer which insure single source of truth which automatically increases security and type safety. And configured Unimport for auto import of components and functions for better DX.

# Tech Stack

Laravel 12, Vue3, ShadcnVue, TailwindCSS, Inertiajs/Vue3, unplugin-auto-import, unplugin-icons, vite-plugin-wayfinder

# Requirements

- PHP 8.4 or higher
- Node 24 or higher
- NPM 11 or higher
- SQLite

# Setup instructions

- Clone the repository open project directory
- Set your `.env` file according to your local machine (check `.env.example`), values like `database`, `queue`, `mail`, etc.
- Run `composer install && npm install`
- Run `php artisan key:generate && php artisan migrate --seed`
- Now all the dependencies are installed, run below commands, each command in its own terminal to start the application
- Run `php artisan serve` or `composer dev` -> (if you are using linux)
- Run `npm run dev` (skip if you ran `composer dev`)
- Now you can access the application
- Navigate to `http://localhost:8000`

# Development instructions

- Backend instructions
    - Always use best practices for laravel12 (like use resource routes for requests, form request for validation, use enums for constants, etc)
    - Use web.php routing with resources
    - Use php artisan make:model --all, this will create migration, model, resource controller, form request. (Must use each, According to its appropriate usage)
    - Use enums for constants for backend defined in app/Enums/
    - Always run `composer generate` after creating or changing any model, form request, enum, etc.

- Frontend instructions
    - Always use best practices for V3 (like use setup script in components, use composables, use states, etc)
    - Do not manually import an file manually in `<script setup>` (`computed,ref,watch,onMounted,link, usePage, etc`) or any component defined in components dir, project is setup to automatically import most of the installed things.
    - Define Layouts for each type of page, or use existing if already exists any, see (/resources/js/layouts)
    - Use /resources/js/pages for route pages
    - Use /resources/js/components for components used Anywhere in pages
    - Use js interface for frontend defined in resources/js/types/
    - Use ShadcnVue for basic common components like buttons, inputs, dropdowns, etc
    - Use Already https://icon-sets.iconify.design/ for icons search and use use it as `<Icon-mdi-home />` in component

- Git instructions (preferably for teams)
    - Always create a new branch for development from `main branch`
    - Always create a `pull request` to merge changes to `main branch` and set me as `reviewer`
    - Always run `composer cleanup` before making any merge request
    - Always `review` your code yourself before making any merge request (look for no test code, no debug code, no unwanted code and code is working as expected, etc)

- General instructions (preferably for teams)
    - Always discuss with team members before making any new feature or changing some code feature
    - We have by default seeded 2 users admin and user please see `seedUsers@/database\migrations\0001_01_01_000000_create_users_table.php`
