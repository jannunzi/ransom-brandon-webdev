(function(){
    angular
        .module("WhiteBoardApp")
        .controller("CourseController", CourseController);

    function CourseController($scope, CourseService){

        //Refactor the controller to use select course in the view
        $scope.selectCourse = selectCourse;
        $scope.deleteCourse = deleteCourse;
        $scope.createCourse = createCourse;
        $scope.updateCourse = updateCourse;

        function updateCourse(course){
            CourseService.updateCourseById(course._id, course, function(courses){
               $scope.courses = courses;
            });
        }

        function createCourse(course){
            CourseService.createCourse(course, function(courses){
                $scope.courses = courses;
            });
        }

        function deleteCourse(id){
            CourseService.removeCourseById(id, function(courses){
               $scope.courses = courses;
            });
        }

        //Define the selectCourse function (Use a webservice to call)

        function selectCourse(id){
            CourseService.findCourseById(id,
                function(courses){
                $scope.course = courses[0];
            });
        }

        CourseService.findAllCourses(function(response)
        {
            $scope.courses = response;
        });
    }
})();