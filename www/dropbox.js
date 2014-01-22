var dropbox = (function() {
 
    var pluginName = "Dropbox";

    var sayHello = function() {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                setTimeout(function() {
                    deferred.resolve(result);
                }, 1000);
            },
            function(error) {
                deferred.reject(result);
            },
            pluginName, "sayHello", [""]);
        return deferred.promise();
    };
 
    var link = function() {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                setTimeout(function() {
                    deferred.resolve(result);
                }, 1000);
            },
            function(error) {
                deferred.reject(error);
            },
            pluginName, "link", [""]);
        return deferred.promise();
    };
 
    var checkLink = function() {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                deferred.resolve(result);
            },
            function(error) {
                deferred.reject(error);
            },
            pluginName, "checkLink", [""]);
        return deferred.promise();
    };
 
    var unlink = function() {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                deferred.resolve(result);
            },
            function(error) {
                deferred.reject(error);
            },
            pluginName, "unlink", [""]);
        return deferred.promise();
    };
 
    var listFolder = function(path) {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                deferred.resolve(result);
            },
            function(error) {
                alert("getFiles error");
                console.log("getFiles error");
                deferred.reject(error);
            },
            pluginName, "listFolder", [path]);
        return deferred.promise();
    };

    var syncFolder = function(path) {
        var deferred = $.Deferred();

        cordova.exec(function(result) {
            console.log("")
            deferred.resolve(result);
        }, function(error) {
            alert("syncFolder error");
            console.log("syncFolder error");
            deferred.reject(error);
        }, pluginName, "syncFolder", [path]);

        return deferred.promise();
    };
 
    var addObserver = function(path) {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                alert("addObserver result");
                deferred.resolve(result);
            },
            function(error) {
                deferred.reject(error);
            },
            pluginName, "addObserver", [path]);
        return deferred.promise();
    };
 
    var readData = function (fileName) {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                deferred.resolve(result);
            },
            function(error) {
                deferred.reject();
            },
            pluginName, "readData", [fileName]);
        return deferred.promise();
    };
 
    var readString = function (fileName) {
        var deferred = $.Deferred();
        Cordova.exec(
            function(result) {
                deferred.resolve(result);
            },
            function(error) {
                deferred.reject();
            },
            pluginName, "readString", [fileName]);
        return deferred.promise();
    };
 
    return {
        link: link,
        checkLink: checkLink,
        unlink: unlink,
        listFolder: listFolder,
        syncFolder: syncFolder,
        addObserver: addObserver,
        readData: readData,
        readString: readString
    };
 
}());

module.exports = dropbox;