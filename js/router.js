var app = app || {};

app.Router = Backbone.Router.extend({
    routes: {
        "route1": "route1"
    },

    route1: function (route1) {
        document.write('ABC');
    }

});