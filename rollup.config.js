import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

const
	packageConfig = require('./package.json'),
	bannerText = ` // Ramda-Fantasy v.${packageConfig.version}
	// (c) 2015-${new Date().getFullYear()} Michael Hurley, Ludwig Magnusson, Matthias Seemann
	// Ramda-Fantasy may be freely distributed under the MIT license.`;

const
	config = {
		input: "index.js",
		output: [
			{
				file: "dist/ramda-fantasy.mjs",
				format: "esm",
				banner: bannerText,
				preferConst: true
			},
			{
				file: "dist/ramda-fantasy.min.mjs",
				format: "esm",
				banner: bannerText
			},
			{
				file: "dist/ramda-fantasy.js",
				format: "umd",
				name: "RF",
				exports: 'named',
				banner: bannerText
			},
			{
				file: "dist/ramda-fantasy.min.js",
				format: "umd",
				exports: 'named',
				name: "RF",
				banner: bannerText
			}
		],
		plugins: [
			commonjs(),
			resolve({ preferBuiltins: false }),
         terser({
	        include: [/^.+\.min\.js$/]
	      })
		]
	};

export default config;
