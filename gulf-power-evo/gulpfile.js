var gulp = require('gulp');
var debug = require('gulp-debug');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var fs = require('fs');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var bustCache = require('gulp-cache-bust');

gulp.task('browserSync', function () {
  // Run Browser-Sync
  browserSync.init([
    'app/**',
    'js/**',
    'stylesheets/**',
    'templates/**',
    'index.php'
  ], {
    proxy: 'gulfpower-poc.dev',
    injectChanges: true,
    open: false,
    browser: "Google Chrome"
  });
});

// Compile Sass and source maps
gulp.task('sass', function () {
  gulp.src(["scss/**.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("stylesheets"))
    .pipe(browserSync.stream());
});

// Watch and compile Sass
gulp.task('sass:watch', function () {
  gulp.watch(['scss/*.scss', "scss/partials/*.scss",  "scss/pages/*.scss"], ['sass']);
});

gulp.task('compress-photos', function () {
  gulp.src('images/**')
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('images'));
});

gulp.task('merge-styles', function () {
  // Delete the contents of 'app.css'
  fs.truncateSync('./app.css');

  // Concatenate all of the styles to 'app.css'
  gulp.src(['stylesheets/**.css'])
    .pipe(debug({title: 'Merge Stylesheet:'}))
    .pipe(concat('../app.css'))
    .pipe(gulp.dest('./app.css'));
});

gulp.task('merge-styles:watch', function () {
  gulp.watch(['stylesheets/*.css'], ['merge-styles']);
});

gulp.task('merge-scripts', function () {
  gulp.src([
    'app/main.js',
    'app/*/*.js',
    'templates/**/*.js'
  ]).pipe(debug({title: 'Merge Script:'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('merge-scripts:watch', function () {
  gulp.watch([
    'app/main.js',
    'app/*/*.js',
    'templates/**/*.js'
  ], ['merge-scripts'])
});

gulp.task('bust-cache', function () {
  // Append timestamps to all the styles and scripts to bust browser caches
  gulp.src('./index.cshtml')
    .pipe(bustCache())
    .pipe(gulp.dest('./'));
});

gulp.task('prepare', [
  'sass',
  'merge-styles',
  'merge-scripts',
  'bust-cache',
  'compress-photos'
]);

gulp.task('zip', function () {
  var currentDate = new Date();

  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ][currentDate.getMonth()];

  return gulp.src([
    './**',
    '!app',
    '!app/**',
    '!App_Data',
    '!App_Data/**',
    '!bower.json',
    '!google71cd6f077a08e824.html',
    '!gulpfile.js',
    '!node_modules',
    '!node_modules/**',
    '!package.json',
    '!scss',
    '!scss/**',
  ])
    .pipe(zip('Deployment-Package-' + currentDate.getFullYear() + '-' + monthName + '-' + currentDate.getDate() + '.zip'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', [
  'browserSync',
  'sass:watch',
  'merge-styles:watch',
  'merge-scripts:watch'
]);
