(function() {
    var app = angular.module('WebAppMaker', []);
    app.factory('userService', userService);
    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUserName: findUserByUserName,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        function createUser(user) {
            users.push(user);
        }

        function findUserById(userId) {
            for (var u in users) {
                var user = users[u];
                if (user._id === userId) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUserName(username) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username) {
                    return user;
                }
            }
            return null;

        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            for (var u in users) {
                var oldUser = users[u];
                if (oldUser._id === userId) {
                    users[u] = user;
                }
            }
        }

        function deleteUser(userId) {
            for (var u in users) {
                var user = users[u];
                if (user._id === userId) {
                    users.splice(u, 1);
                }
            }
        }
    }
})();