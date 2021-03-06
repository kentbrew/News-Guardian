'use strict';

//https://github.com/c301/grunt-webstore-upload

module.exports = function(grunt) {

    // var config = {
    //     path_js: "scripts/"
    // };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // jshint: {
        //     options: {
        //         reporter: require('jshint-stylish')
        //     },
        //     build: ['src/' + config.path_js + '**/*.js']
        // },

        'string-replace': {
            version: {
                files: {
                    'tmp/manifest.json': ['manifest.json']
                },
                options: {
                    replacements: [{
                        pattern: /{{ VERSION }}/g,
                        replacement: '<%= pkg.version %>'
                    }]
                }
            }
        },
        clean: {
            dist: {
                options: {
                    force: true
                },
                files: [{
                    dot: true,
                    src: [
                        'dist/{,*/}*',
                        '!dist/.git{,*/}*'
                    ]
                }]
            }
        },

        copy: {
            assets: {
                files: [{
                    expand: true,
                    flatten: false,
                    dot: true,
                    cwd: 'src/assets/',
                    dest: 'dist/app/assets/',
                    src: ['**/*.*']
                }]
            },
            loose_js: {
                files: {
                    'dist/app/content.js': ["src/content.js"],
                    'dist/app/options.js': ["src/options.js"]
                }
            },
            html: {
                files:[{
                    expand: true,
                    flatten: false,
                    dot: true,
                    cwd: 'src/',
                    dest: 'dist/app/',
                    src: ['**/*.html']                    
                }]                                  
            },
            manifest: {
                files: [{
                    dest: 'dist/manifest.json',
                    src: ['tmp/manifest.json']
                }]
            },
            vendor_scripts: {
                files: {
                    'dist/app/vendor/zepto.min.js': ['node_modules/zepto/dist/zepto.min.js']
                }
            }
        },
        concat: {
            js: {
                src: ['src/*.js', '!src/content.js', '!src/options.js'],
                dest: 'tmp/scripts.js'
            }
        },

        uglify: {
             options: {
                 //'mangle': false
                 //banner: '/* <%= pkg.name =%> is a butt <%= grunt.template.today("yyyy-mm-dd") %> */\n'
             },
            main_script: {
                files: {
                    'dist/app/scripts.min.js': ['tmp/scripts.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.html', 'manifest.json', 'package.json'],
                tasks: ['default']
            },
        },

        zip: {
            chrome: {
                cwd: 'dist/',
                src: ['dist/**/*'],
                dest: '_releases/news-guardian-chrome-<%= pkg.version %>.zip'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-twig-render');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-zip');

    /******** Register Tasks *************/
    grunt.registerTask('default', ['clean', 'string-replace', 'copy', 'concat', 'uglify']); // 'twigRender:main', 'less', 'cssmin',  

};