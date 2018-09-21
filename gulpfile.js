'use strict';

/**
**
** Setting
**
**/

const ROOT_PATH = './public/';

const SETTING = {

    'rootPath': ROOT_PATH,

    'bs': [
        {
            'port': 9000, // browser-sync port
            'target': [ // browser-sync watch file
                '**/*.html',
                '**/assets/css/*.css',
                '**/assets/js/*.js'
            ],
        }
    ],

    'sass': [
        {
            'browser': ['last 2 versions'], // autoprefix version
            'outputStyle': 'compressed',// compile style
            'path': [
                {
                    'src': './src_guideline/scss/**/', // sass path
                    'dist': ROOT_PATH + 'guideline/assets/css/' // css path
                }
                // 対象ディレクトリを増やす場合は、オブジェクトを追加する
            ]
        }
    ],

    'js': [
        {
            'src': './src_guideline/js',
            'dist': ROOT_PATH + 'guideline/assets/js',
            'fileName': [ // main file
                'main.js',
                'component.js'
            ]
        }
    ],

    'zip': [
        {
            'fileName' :"meagne_guideline",// Name of output file
            'version' :  "", // version of output file
            'from' : [
                './public/**/*',
                './src_guideline/**/*'
            ],
            'to' : './' //output directry
        }
    ]

}


/**
**
** Module Import
**
**/

const gulp = require("gulp");

const Sass = require("./gulp/sass");
const Scripts = require("./gulp/scripts");
const BrowserSync = require("./gulp/browser-sync");
const Zip = require("./gulp/zip");


/**
**
** Task
**
**/

gulp.task('sass', () => {
    Sass(SETTING);
});

gulp.task('scripts', () => {
    Scripts(SETTING);
});

gulp.task('serve', () => {
    BrowserSync(SETTING);
});

gulp.task('build', () => {
    Sass(SETTING,"prod");
    Scripts(SETTING,"prod");
});

gulp.task('zip', () => {
    Zip(SETTING);
});

gulp.task('watch', () => {

    SETTING.sass[0].path.forEach( function(e,i,entryPoint) {
        gulp.watch(SETTING.sass[0].path[i].src + '*.scss', ['sass']);
    });

    SETTING.js.forEach( function(e,i) {
        gulp.watch(SETTING.js[i].src + '*.js', ['scripts']);
    });

});


/**
**
** Default Task
**
** コマンド'gulp'で実行される
**
**/

const taskList = [

    'watch',
    // 'sass', // gulp-sass
    'serve' // browser-sync

]
gulp.task('default', taskList);
