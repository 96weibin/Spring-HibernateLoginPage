var gulp = require('gulp');
var less = require("gulp-less");
var babel = require("gulp-babel");

gulp.task('less',()=>{
  gulp.src("./dev/less/*.less")
  .pipe(less())
  .pipe(gulp.dest("./dist/css"));
})
gulp.task('es6',()=>{
  gulp.src('./dev/js/*.js')
  .pipe(babel({
    presets:['@babel/env']
  }))
  .pipe(gulp.dest('dist/js'))
})
gulp.task('default',()=>{
  var lessWatcher = gulp.watch('./dev/less/*.less',['less']);
  lessWatcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  })
  var es6Watcher = gulp.watch('./dev/js/*.js',['es6']);
  es6Watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  })
})
