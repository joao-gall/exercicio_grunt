module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'main.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'scripts/main.min.js': 'scripts/main.js'
                }
            }
        }
    }    
)


    grunt.registerTask('inicio', function(){
        const done = this.async();
        console.log('grunt rodou');
        done()
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['less', 'uglify']);
}

