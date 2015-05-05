// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var ngmin = require('gulp-ngmin');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/angular-wysiwyg.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/angular-wysiwyg.js')
        .pipe(ngmin({dynamic: false}))
        .pipe(gulp.dest('dist'))
        .pipe(rename('angular-wysiwyg.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('demo/*.html', notifyLiveReload);
  gulp.watch('src/*.js', notifyLiveReload)
  gulp.watch('demo/css/*.css', notifyLiveReload);
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname));
  app.listen(4000);
  console.log('Server started on port 4000')
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}


// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);

//Build task
gulp.task('build', ['lint', 'scripts']);


gulp.task('server', ['scripts', 'express', 'livereload', 'watch'], function() {
    
})
