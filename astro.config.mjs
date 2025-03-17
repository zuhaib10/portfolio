import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    site: 'https://zuhaib10.github.io',
    base: 'portfolio',
    integrations: [
        tailwind(),
        mdx(),
        astroIcon({
            include: {
                mdi: ["*"],
                ri: ['*'],
                'simple-icons': ['*'],
            },
        }),
        playformCompress({
            CSS: false,
            Image: false,
            Action: {
                Passed: async () => true,   // https://github.com/PlayForm/Compress/issues/376
            },
        })
    ],
});
