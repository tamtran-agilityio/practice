Practice parallax scrolling web

## Author

## Gulp plugin
	browser-sync: watch load page on browser
	gulp-concat: To concat all js file to one file
	gulp-jade: support build jade
	gulp-jshint: checking code styles js 
	gulp-minify-css: min file styles
	gulp-sass: support build sass
	gulp-util: Utility functions for gulp plugins
	jshint-stylish: To style for result of jshint task
## Gulp task
	gulp: run build all app
	gulp-jade: run build file jade
	gulp-sass: run build file sass 
## Project structure
	src: directory source app include images, fonts, scss ,jade 
	bower.json: config all libraries need to project
	gulpfile.js: set config of gulp
	package.json:description there are plugin used in gulp
	.bowerrc: path folder vender
	.editorconfig: config code styles
	.jscsrc: config code styles for all file
	.jshintrc: config rules of jshint task 
## Run practice
1. Start vagrant
 - Run 'vagrant up' after 'vagrant ssh'
 - cd /javascript/sparks-scroll
2. Install gulp
 - Run 'npm install gulp -g'
3. Set libraries:
 - Run 'npm update' to install all libraries 
4. Run project
 - Run 'gulp'
 - Open URL: http://localhost:9000 
