
(function(){
    angular
        .module("WhiteBoardApp", [])
        .controller("CourseController", courseController);

    function courseController($scope, $http, CourseService)
    {
        CourseService.readAllCourses(renderCourses);


        $scope.selectCourse = selectCourse;
        $scope.removeCourse = removeCourse;
        $scope.updateCourse = updateCourse;
        $scope.createCourse = createCourse;

        function createCourse(course){
            CourseService.createCourse(course, renderCourses);
        }

        function updateCourse(course){
            CourseService.updateCourseById($scope.selectedCourseIndex, course, renderCourses)
        }

        function removeCourse(index){
            CourseService.deleteCourseById(index, renderCourses);
        }

        function selectCourse(index){
            $scope.selectedCourseIndex = index;
            CourseService.readOneCourseById(index, function(response){
                $scope.course = response;
            });

        }

        function renderCourses(response)
        {
            $scope.courses = response;
        }

    }
})();