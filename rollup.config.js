import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  // JavaScript/TypeScript Build
  {
    input: 'src/index.ts', // Entry point for your library
    output: [
      {
        file: 'dist/index.cjs.js', // CommonJS output
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js', // ESM output
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(), // Resolves node_modules
      commonjs(), // Converts CommonJS to ES Modules
      typescript({ tsconfig: './tsconfig.json' }), // Integrates TypeScript
    ],
    external: ['react', 'react-dom'], // Mark external dependencies (e.g., React)
  },
  // Type Declaration Build
  {
    input: 'src/index.ts', // Entry point
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()], // Generate .d.ts files
  },
];
