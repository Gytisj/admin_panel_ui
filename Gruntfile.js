module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/assets/style',
          cssDir: 'public/assets/style',
          environment: 'production'
        }
      },
    },
    watch: {
      css: {
        files: ['src/assets/style/*.scss', 'src/templates/**/*.hbs'],
        tasks: ['compass', 'assemble:en'],
        options: {
          livereload: true,
        },
      },
    },
    svg_sprite: {
			generate: {
				cwd: 'web/assets/vendor/material-design-icons',
				src: [
					// 'content/svg/production/ic_add_24px.svg',
					'../../../../public/assets/img/ic_dots_24px.svg',
					'../../../../public/assets/img/ic_logo_24px.svg',
					'../../../../public/assets/img/ic_burger_24px.svg',
          '../../../../public/assets/img/ic_notification_24px.svg',
          '../../../../public/assets/img/ic_home_24px.svg',
          '../../../../public/assets/img/ic_icons_24px.svg',
          '../../../../public/assets/img/ic_form_24px.svg',
          '../../../../public/assets/img/ic_tables_24px.svg',
          '../../../../public/assets/img/ic_mails_24px.svg',
          '../../../../public/assets/img/ic_maps_24px.svg',
          '../../../../public/assets/img/ic_pages_24px.svg',
          '../../../../public/assets/img/ic_typo_24px.svg',
          '../../../../public/assets/img/ic_ui_24px.svg',
          '../../../../public/assets/img/ic_multilevel_24px.svg',
          '../../../../public/assets/img/ic_extra_24px.svg',
          '../../../../public/assets/img/ic_compo_24px.svg',
          '../../../../public/assets/img/ic_charts_24px.svg',
          '../../../../public/assets/img/ic_conversion_24px.svg',
          '../../../../public/assets/img/ic_visit_24px.svg',
          '../../../../public/assets/img/ic_sales_24px.svg',
          '../../../../public/assets/img/ic_revenue_24px.svg'

				],
				dest: 'src/sprites',
				options: {
					shape: {
						id: {
							generator: function(filename) {
								var id = filename.match(/ic_(\w+)_\d+/);
								return id[1];
							}
						},
					},
					mode: {
						symbol: {
							dest: ''
						}
					}
				}
			}
    },
    assemble: {
      options: {
          layoutdir: 'src/templates/layouts',
          layout: ['default.hbs'],
          partials: ['src/templates/partials/{,*/}*.*', 'src/sprites/svg/*'],
          helpers: ['partial'],
          flatten: true
      },
      en: {
          options: {
              data: 'src/templates/data/en/*.yml'
          },
          src: ['src/templates/pages/*.hbs'],
          dest: './public'
      }
  },

  });

  [
    'grunt-contrib-compass',
    'grunt-contrib-watch',
    'grunt-svg-sprite',
    'grunt-assemble'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', [
    'compass',
    'assemble:en'
  ]);
};