import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack: (config) => {
   config.module.rules.push({
     test: /\.svg$/,
     use: [
       {
         loader: "@svgr/webpack",
       },
     ],
   });
   return config;
 },
 images: {
   disableStaticImages: true, // importした画像の型定義設定を無効にする
 },
 turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
