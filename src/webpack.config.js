import { resolve, join } from 'path';

export const entry = './src/App.js';
export const output = {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'), // Output directory
};
export const devServer = {
    contentBase: join(__dirname, 'dist'), // Serve from the 'dist' directory
    compress: true,
    port: 3000,
};
