(function(){
    'use strict';
    angular.module("quizApp", []).controller('questionController', function ($http) {
        var vm = this;
        vm.questions = [];
        vm.submit = submit;
        vm.selectedAnswers = [];
        vm.result = 0;
        vm.isSubmitted = false;

        activate();

        function activate() {
            $http.get("app/database/questionsAndAnswers.json").then(function (response) {
                vm.questions = response.questionsAndAnswers;
            },
                function (error) { })
        }
        
        function submit() {
            vm.isSubmitted = true;
            for (var i = 0; i < vm.questions.length; i++) {
             
                    if (vm.selectedAnswers[i] == vm.questions[i].correctAnswer) {
                        vm.result++;
                    }
                
            }
        }
        
    });
})();