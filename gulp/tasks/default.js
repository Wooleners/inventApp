'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('../config'),
    refresh = require("gulp-livereload"),
    lr = require("tiny-lr"),
    server = lr();

// dev mode
gulp.task('default',['clean:app'],function(){
  gulp.start('dev:app');
  watch(['src/**/*.*'],function(ev,cb){
    gulp.start('default');
    cb();
  });
});

// deploy mode
gulp.task('deploy',['clean:app'],function(){
  config.isDeploy = true;
  gulp.start('deploy:app');
});

//refresh 
gulp.task('refresh', function() {
    gulp.src(['src/**/*.*']).pipe(refresh(server));
});
