var request = require('superagent'),
    $       = require('jquery');

var BadgesAPI = function(token){
    this.accessToken = token;
    this.API_END_POINT = '//127.0.0.1:8000'; //"https://apistaging.credly.com/v1.1";
    this.returnAPIPath = function (url) {
        return this.API_END_POINT + (url || "");
    };
}


BadgesAPI.prototype = {

    findBadges : function ( options, callback ) {
        options = options || {};
        options.search = options.search || "";
        options.userId = parseInt( options.userId , 10 ) || 613;
        options.pageNum = options.pageNum || 1;
        options.badgesPerPage = options.badgesPerPage || 10;
        options.orderDirection = options.orderDirection || 'ASC';

        var requestedUrl = this.returnAPIPath('/find?'+ $.param( options ) );

        request
            .get( requestedUrl )
            .accept('application/json')
            .end( function (error, result){
                callback(error, result.body);
            } );
    },
    myBadges: function (options, callback) {
        options = options || {};
        request
            .get('//api.randomuser.me/')
            .accept('application/json')
            .end(function(error, result){
                callback(error, result.body);
            });
    }
}


module.exports = BadgesAPI;


