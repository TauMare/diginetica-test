
import gulp from 'gulp'
import gulpEsbuild from 'gulp-esbuild'
import { isProd, isDev } from './mode.mjs'

export function compileScripts() {
	return gulp.src('source/typescript/*.ts')
			.pipe(gulpEsbuild({
					bundle: true,
					target: 'es2015',
					sourcemap: isDev() && 'external',
					format: 'esm',
					minify: isProd()
			}))
			.pipe(gulp.dest('build/js'))
}
