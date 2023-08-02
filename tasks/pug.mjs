import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import plumber from "gulp-plumber";
import notify from "gulp-notify";

import { isDev } from "./mode.mjs";
import { Path } from "./_constants.mjs";
import { getPugData } from "./data.mjs";

export function compilePug() {
	const pugOptions = {
		pretty: isDev(),
		plugins: [pugBEM],
		data: getPugData(),
	};

	return gulp
		.src(Path.PUG.src)
		.pipe(plumber())
		.pipe(pug(pugOptions))
		.pipe(gulp.dest(Path.BUILD));
}
