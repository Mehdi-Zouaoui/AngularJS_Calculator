angular.module("App", ['main']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope) {

    $scope.data = "Calculatrice";
    $scope.entier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    $scope.number = [];
    $scope.result = 0;
    $scope.operators = ["+", "-", "/", "*"];
    $scope.currentOperator = "";

    $scope.addition = function (tabIndice) {
        $scope.isClear = false;
        $scope.number.push($scope.numberInput);
        switch ($scope.currentOperator) {
            case "+" :
                $scope.result = $scope.result + $scope.number[tabIndice];
                break;
            case "-" :
                $scope.result = $scope.result - $scope.number[tabIndice];
                break;
            case "*" :
                $scope.result = $scope.result * $scope.number[tabIndice];
                break;
            case "/" :
                $scope.result = $scope.result / $scope.number[tabIndice];
                break;
            default :
                $scope.result = $scope.number[tabIndice];
        }
        tabIndice = tabIndice + 1;
        return tabIndice;
    };
    $scope.showResult = function () {
        $scope.numberInput = $scope.result;
    };
    $scope.clear = function () {
        $scope.result = 0;
        $scope.number.splice(0, $scope.number.length);
        $scope.isClear = true;

    }
 });