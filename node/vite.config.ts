import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    fs: {
      strict: false,
    },
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: "express",

      // tell the plugin where is your project entry
      appPath: "./app.js",
      // appPath: "./app.ts",

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      // exportName: "viteNodeApp",

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
      tsCompiler: "esbuild",

      // Optional, default: {
      // jsc: {
      //   target: 'es2019',
      //   parser: {
      //     syntax: 'typescript',
      //     decorators: true
      //   },
      //  transform: {
      //     legacyDecorator: true,
      //     decoratorMetadata: true
      //   }
      // }
      // }
      // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
      swcOptions: {},
    }),
  ],
});
