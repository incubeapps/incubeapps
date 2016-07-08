/**
 * Created by Phani on 7/8/2016.
 */
require.config({
    paths:{
        'angular':'lib/bower/angular/angular',
        'angular-ui-router':'lib/bower/angular-ui-router/release/angular-ui-router/',
        'domReady':'lib/require/domReady',
        "jquery" : "lib/bower/jquery/dist/jquery",
        "bootstrap" :  "lib/bower/bootstrap/dist/js/bootstrap.min",
        "iapps-ui":"lib/iapps-ui/iapps-ui"
    },
    shim:{
        'angular-ui-router':['angular'],
        'angular':{
            exports:'angular'
        },
        "bootstrap" : { "deps" :['jquery'] }
    },
    deps:[
        './bootstrap'
    ]
})
