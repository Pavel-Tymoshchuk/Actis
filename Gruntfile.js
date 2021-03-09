module.exports = function(grunt) {
    'use strict';

    grunt.rent_car = {
        js:[
            'assets/plugins/jquery/jquery-3.2.1.js',
            'assets/plugins/swiper/swiper-bundle.min.js',
            'assets/plugins/fancybox/jquery.fancybox.min.js',
            'assets/js/global.js'
        ],

        css:[
            'assets/plugins/swiper/swiper-bundle.min.css',
            'assets/plugins/fancybox/jquery.fancybox.min.css',
        ],
    };

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'assets/scss/main.scss'
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: false,
                shorthandCompacting: false,
                sourceMap: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/main.min.css': grunt.rent_car.css.concat(['css/main.css'])
                }
            }
        },

        watch: {
            cssjs: {
                files: ['assets/scss/*.scss','assets/js/*.js'],
                tasks: ['css','js']
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: "js/main.min.js.map",
                roundingPrecision: -1
            }, 
            js: {
                files: {          
                    'js/main.min.js': grunt.rent_car.js,
                }
            }
        },

        clean: {
            css: []//['inc/assets/main.css','inc/assets/main.css.map','inc/assets/main.scss'],
        },        
    });

    require('load-grunt-tasks')(grunt);
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('css', ['sass', 'cssmin', 'clean:css']);
    grunt.registerTask('js', ['uglify:js']);
    grunt.registerTask('watchall', ['watch:cssjs']);
}