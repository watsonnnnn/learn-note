import AppLayout from './AppLayout';
export default {
    path: '/',
    component: AppLayout,
    childRoutes: (r => {
        return r.keys().map(key => r(key).default);
    })(require.context('./', true, /^\.js$/))
};
const c = require.context('./', true, /\.js$/);

console.log(c, c.keys());