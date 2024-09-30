/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    }
};


import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
