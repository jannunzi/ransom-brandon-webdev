(function(){
    angular
        .module("WhiteBoardApp")
        .factory("CourseService", CourseService);

    function CourseService($http)
    {
        var service= {
            findAllCourses: findAllCourses,
            findCourseById: findCourseById,
            removeCourseById: removeCourseById,
            createCourse: createCourse,
            updateCourseById: updateCourseById

        };
        return service;

        function updateCourseById(id, course, callback){
            $http.put("/rest/course/" + id, course)
                .success(callback);
        }

        function createCourse(course, callback)
        {
            $http.post("/rest/course/", course)
                .success(callback);
        }

        function removeCourseById(id, callback){
            $http.delete("/rest/course/" +id)
                .success(callback);
        }

        function findCourseById(id, callback){
            $http.get("/rest/course"+id)
                .success(callback);
        }

        function findAllCourses(callback)
        {
            $http.get("/rest/course")
                .success(callback);
        }
    }
})();
