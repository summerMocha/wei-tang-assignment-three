(function() {
    var app = angular.module('WebAppMaker', []);
    app.factory('webSiteService', webSiteService);
    function webSiteService() {
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        }

        return api;

        function createWebsite(userId, website) {
            website.developerId = userId;
            websites.push(website);
        }

        function findWebsitesByUser(userId) {
            for (var w in websites) {
                var website = websites[w];
                if (website.developerId === userId) {
                    return website;
                }
            }
            return null;
        }

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                var website = websites[w];
                if (website._id === websiteId) {
                    return website;
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website) {
            for (var w in websites) {
                var oldWebsite = websites[w];
                if (oldWebsite._id === websiteId) {
                    websites[w] = website;
                }
            }
        }

        function deleteWebsite(websiteId) {
            for (var w in websites) {
                var website = websites[w];
                if (website._id === websiteId) {
                    websites.splice(w, 1);
                }
            }
        }
    }
})();