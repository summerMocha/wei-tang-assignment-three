(function() {
    var app = angular.module('WebAppMaker', []);
    app.factory('pageService', pageService);

    function pageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            createPage: createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            for (var p in pages) {
                var page = pages[p];
                if (page.websiteId === websiteId) {
                    return page;
                }
            }
            return null;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                var page = pages[p];
                if (page._id === pageId) {
                    return page;
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                var oldPage = pages[p];
                if (oldPage._id === pageId) {
                    pages[p] = page;
                }
            }
        }

        function deletePage(pageId) {
            for (var p in pages) {
                var page = pages[p];
                if (page._id === pageId) {
                    pages.splice(p, 1);
                }
            }
        }
    }
})();