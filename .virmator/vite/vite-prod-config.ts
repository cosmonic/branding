import {UserConfig} from 'vite';
import devConfig from './vite-dev-config';

const viteConfig: UserConfig = {
    ...devConfig,
    base: '/branding/',
};

export default viteConfig;
