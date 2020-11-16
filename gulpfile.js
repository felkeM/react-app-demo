// --------------------------------------------------
// Load Plugins
// --------------------------------------------------

const gulp         = require("gulp");
const sass         = require("gulp-sass");
const gulpSassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const notify       = require("gulp-notify");
const cleanCss     = require("gulp-clean-css");
const sourcemaps   = require("gulp-sourcemaps");

// --------------------------------------------------
// General Config
// --------------------------------------------------

const config = {
  // main scss files that import partials
  scssSrc: "./src/assets/scss/*.scss",
  // all scss files in the scss directory
  allScss: "./src/assets/scss/**/*.scss",
  // the destination directory for our css
  cssDest: "./src/assets/css/"
};

// --------------------------------------------------
// Sass
// --------------------------------------------------

/**
 * Compile SCSS files
 */

function sassRun() {
  return gulp
    .src(config.scssSrc)
    .pipe(gulpSassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(sourcemaps.write("../maps"))
    .pipe(gulp.dest(config.cssDest))
    .pipe(
      notify({
        message: "SCSS task complete",
        onLast: true
      })
    );
}

// --------------------------------------------------
// Watch
// --------------------------------------------------

/**
 * Watch scss files for changes & recompile
 * Watch html, md, and js files, run jekyll & reload browserSync
 */
function watchRun(cb) {
  gulp.watch(config.allScss, {ignoreInitial: false, usePolling: true}, sassRun);
  cb();
}

// --------------------------------------------------
// Default
// --------------------------------------------------

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch browserSync & watch files.
 */
exports.default = sassRun;