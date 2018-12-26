module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		copy: {
			build: {
				files: [{
					expand:true,
					cwd: "sourse",
					src: [
						"fonts/**/*.{woff,woff2}",
						"img/**",
						"js/**"
					],
					dest: "build"
				}]
			}
		},

		clean: {
			build: ["build"]
		},

		less: {
			style: {
				files: {
					"sourse/css/style.css": "sourse/less/style.less"
				}
			}
		},

		postcss: {
			style: {
				options: {
					processors: [
						require("autoprefixer")()
					]
				},
				src: "sourse/css/*.css"
			}
		},

		csso: {
			style: {
				options: {
					report: "gzip"
				},

				files: {
					"sourse/css/style.min.css": ["sourse/css/style.css"]
				}
			}
		},

		svgstore: {
			options: {
				includeTitleElement: false
			},

			sprite: {
				files: {
					"sourse/img/sprite.svg": ["sourse/img/icon-*.svg"]
				}
			}
		},

		posthtml: {
			options: {
				use: [
					require("posthtml-include")()
				]
			},

			html: {
				files: [{
					expand: true,
					src: ["sourse/*.html"],
					dest: "build"
				}]
			}
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3,
					progressive: true
				},

				files: [{
					expand: true,
					src: ["sourse/img/**/*.{png,jpg,svg}"]
				}]
			}
		},

		cwebp: {
			images: {
				options: {
					q: 90
				},

				files: [{
					expand: true,
					src: ["sourse/img/**/*.{png,jpg}"]
				}]
			}
		},

		browserSync: {
			server: {
				bsFiles: {
					src: ["sourse/*.html, sourse/css/*.css"]
				},

				options: {
					server: "sourse/",
					watchTask: true
				}
			}
		},

		watch: {
			html: {
				files: ["sourse/*.html"],
				tasks: ["posthtml"]
			},

			style: {
				files: ["sourse/less/**/*.less"],
				tasks: ["less", "postcss", "csso"]
			}
		}
	});

	grunt.registerTask("serve", ["browserSync", "watch"]);

	grunt.registerTask("build", [
		"less",
		"postcss",
		"csso",
		"svgstore"
	]);
};