const gulp = require('gulp');
const pkg = require('./package.json');

const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const argv = require('yargs');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const fileInclude = require('gulp-file-include');

const DEBUG_ENABLED = argv.debug !== undefined;

const swallowError = () => {
};

gulp.task('scripts', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulpif(!DEBUG_ENABLED, concat(pkg.name + '.js').on('error', swallowError)))
        .pipe(gulpif(!DEBUG_ENABLED, uglify().on('error', swallowError)))
        .pipe(gulp.dest('dist'))
});

gulp.task('styles', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulpif(!DEBUG_ENABLED, cleanCSS()))
        .pipe(concat(pkg.name + '.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/template-base.xhtml')
        .pipe(fileInclude({
            prefix: '@html',
            basepath: 'src'
        }))
        .pipe(concat(`${pkg.name}.xml`))
        .pipe(gulp.dest(`dist`));
});


gulp.task('embed', () => {
    return gulp.src(`dist/${pkg.name}.xml`)
        .pipe(fileInclude({
            prefix: '@dist',
            context: {
                css: `\'${pkg.name}.css\'`,
                js: `\'${pkg.name}.js\'`
            }
        }))
        .pipe(fileInclude())
        .pipe(concat(`${pkg.name}.xml`))
        .pipe(gulp.dest(`./`));
});

gulp.task('watch', () => gulp.watch('src/**/*.*', ['build']));

gulp.task('build', (callback) => runSequence(['styles', 'scripts', 'html'], 'embed', callback));

gulp.task('default', ['build']);