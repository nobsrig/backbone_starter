var app = app || {};

app.AppView = Backbone.View.extend({
    
    el: '#container',

    initialize: function () {
        this.render();
    },
    
    render: function () {
        this.$el.html("Hello World");
    }

});

app.router = new app.Router();
Backbone.history.start();
app.appView = new app.AppView();