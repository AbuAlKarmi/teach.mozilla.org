var request = require('superagent');

var BadgesAPI = function(token){
    this.accessToken = token;
    this.API_END_POINT = 'http://api.randomuser.me/'; //"https://apistaging.credly.com/v1.1";
    this.returnAPIPath = function (url) {
        return this.API_END_POINT + (url || "");
    };
}


BadgesAPI.prototype = {
    myBadges: function ( options, callback ){
        options = options || {};
        request
            .get(this.returnAPIPath())
            .accept('application/json')
            .end(function(error, result){
                callback(error, result.body);
            });
    }
}


module.exports = BadgesAPI;


