
App.info({

    name: 'QSRandroidApp',
    description: 'College project',
    author: 'James McCann',
    email: 'jamesmccann16@gmail.com'

});


App.icons({
    // Android
    'android_mdpi': 'resources/icons/icon-48x48.png',
    'android_hdpi': 'resources/icons/icon-72x72.png',
    'android_xhdpi': 'resources/icons/icon-96x96.png'
});

App.launchScreens({
    // Android
    'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
    'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
    'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
    'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
    'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
    'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
    'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
    'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});




//App.accessRule('*.http://192.168.1.6:3000/*');
App.accessRule('http://*');
App.accessRule('https://*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');





