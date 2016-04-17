
Template.loading.rendered = function () {
    if ( ! Session.get('loadingSplash') ) {
        this.loading = window.pleaseWait({
            logo: '/img/jmcsoftware.png',
            backgroundColor: '#7f8c8d',
            loadingHtml: message + spinner
        });
        Session.set('loadingSplash', true);
    }
};

Template.loading.destroyed = function () {
    if ( this.loading ) {
        this.loading.finish();
        delete Session.keys['loadingSplash'];
    }
};

var message = '<p class="loading-message">Loading Page</p>';
var spinner = '<div class="sk-spinner sk-spinner-three-bounce">'
    + '  <div class="sk-bounce1"></div>'
    + '  <div class="sk-bounce2"></div>'
    + '  <div class="sk-bounce3"></div>'
    + '</div>';