import { queryParams, type QueryParams } from './../wayfinder';
/**
 * @see routes/web.php:9
 * @route '/'
 */
export const home = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: home.url(options),
    method: 'get',
});

home.definition = {
    methods: ['get', 'head'],
    url: '/',
};

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return home.definition.url + queryParams(options);
};

/**
 * @see routes/web.php:9
 * @route '/'
 */
home.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: home.url(options),
    method: 'get',
});
/**
 * @see routes/web.php:9
 * @route '/'
 */
home.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: home.url(options),
    method: 'head',
});

/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
export const dashboard = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: dashboard.url(options),
    method: 'get',
});

dashboard.definition = {
    methods: ['get', 'head'],
    url: '/dashboard',
};

/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return dashboard.definition.url + queryParams(options);
};

/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: dashboard.url(options),
    method: 'get',
});
/**
 * @see routes/web.php:11
 * @route '/dashboard'
 */
dashboard.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: dashboard.url(options),
    method: 'head',
});

/**
 * @see routes/settings.php:20
 * @route '/settings/appearance'
 */
export const appearance = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: appearance.url(options),
    method: 'get',
});

appearance.definition = {
    methods: ['get', 'head'],
    url: '/settings/appearance',
};

/**
 * @see routes/settings.php:20
 * @route '/settings/appearance'
 */
appearance.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return appearance.definition.url + queryParams(options);
};

/**
 * @see routes/settings.php:20
 * @route '/settings/appearance'
 */
appearance.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: appearance.url(options),
    method: 'get',
});
/**
 * @see routes/settings.php:20
 * @route '/settings/appearance'
 */
appearance.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: appearance.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
 * @route '/login'
 */
export const login = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: login.url(options),
    method: 'get',
});

login.definition = {
    methods: ['get', 'head'],
    url: '/login',
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
 * @route '/login'
 */
login.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
 * @route '/login'
 */
login.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: login.url(options),
    method: 'get',
});
/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:21
 * @route '/login'
 */
login.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: login.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:44
 * @route '/logout'
 */
export const logout = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'post';
} => ({
    url: logout.url(options),
    method: 'post',
});

logout.definition = {
    methods: ['post'],
    url: '/logout',
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:44
 * @route '/logout'
 */
logout.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:44
 * @route '/logout'
 */
logout.post = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'post';
} => ({
    url: logout.url(options),
    method: 'post',
});
