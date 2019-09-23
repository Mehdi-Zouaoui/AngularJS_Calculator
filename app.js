angular.module("App", ['main']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope) {
    const ctrl = this;
    ctrl.numberInput = 0;
    ctrl.data = "Calculatrice";
    ctrl.entier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ctrl.calc = [];
    ctrl.affichage = null;
    ctrl.digitCtrl = "";
    ctrl.operation = 0;
    ctrl.result = 0;
    ctrl.operators = ["+", "-", "/", "*"];
    ctrl.currentOperator = "";
    ctrl.operationDisplay = [];
    ctrl.operatorsDisplay = [];

   ctrl.calculatorDisplay = function(){
        if (ctrl.digitCtrl === "") {
            ctrl.affichage = ctrl.result;
        } else ctrl.affichage = ctrl.digitCtrl;
        return ctrl.affichage;
    };

    ctrl.showResult = function (tab) {
    };

    ctrl.clear = function () {
        ctrl.result = 0;
        ctrl.calc = [];
        ctrl.digitCtrl = "";
        ctrl.isClear = true;
    };

    ctrl.onOperatorClic = function(input) {
        ctrl.isClear = false;
        ctrl.currentOperator = input;
        ctrl.operatorsDisplay.push(ctrl.currentOperator);
        if (ctrl.calc.length < 2) {
            if(ctrl.calc.length === 0 ){
                ctrl.result = ctrl.digitCtrl;
            }
            ctrl.calc.push(ctrl.digitCtrl);
            ctrl.digitCtrl = "";
        } if (ctrl.calc.length === 2) {
            for(let i = 0 ; i < ctrl.operatorsDisplay.length ; i++) {
                switch (ctrl.operatorsDisplay[i-1]) {
                    case "+" :
                        ctrl.result = Number(ctrl.calc[0]) + Number(ctrl.calc[1]);
                        break;
                    case "-" :
                        ctrl.result = Number(ctrl.calc[0]) - Number(ctrl.calc[1]);
                        break;
                    case "*" :
                        ctrl.result = Number(ctrl.calc[0]) * Number(ctrl.calc[1]);
                        break;
                    case "/" :
                        ctrl.result = Number(ctrl.calc[0]) / Number(ctrl.calc[1]);
                        break;
                }
            }
            ctrl.calc = [];
            ctrl.calc.push(ctrl.result);

            ctrl.operationDisplay.push(ctrl.result);


        }
    };

    ctrl.onDigitClic = function(input){
        ctrl.digitCtrl += input ;
    };
    ctrl.fullCalcul = function(){

    }
 });