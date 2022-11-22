const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
// const imagemin = require("gulp-imagemin");
// const htmlmin = require("gulp-htmlmin");
const GulpClient = require("gulp");

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
  gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
  gulp.watch("src/assets/**/*").on("all", gulp.parallel("assets"));
});

gulp.task("html", function () {
  return gulp
      .src("src/*.html")
      // .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("dist/"))
  ;
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(browserSync.stream());
});

gulp.task("assets", function () {
  return gulp
    .src("src/assets/**/*")
    .pipe(gulp.dest("dist/assets"))
    .pipe(browserSync.stream());
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "html",
    "scripts",
    "fonts",
    "assets"
  )
);
