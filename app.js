angular.module("App", ['main']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope) {
    const ctrl = this;
    ctrl.numberInput = 0;
    ctrl.data = "Calculatrice";
    ctrl.entier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ctrl.calc = [];
    ctrl.index = 0;
    ctrl.affichage = null;
    ctrl.digitCtrl = "";
    ctrl.showOperation = "";
    ctrl.result = 0;
    ctrl.operators = ["+", "-", "/", "*","="];
    ctrl.currentOperator = "";
    ctrl.operationDisplay = [];
    ctrl.operatorsDisplay = [];

    ctrl.calculatorDisplay = function () {
        if (ctrl.digitCtrl === "") {
            ctrl.affichage = ctrl.result;
        } else ctrl.affichage = ctrl.digitCtrl;
        return ctrl.affichage;
    };

    ctrl.clear = function () {
        ctrl.result = 0;
        ctrl.calc = [];
        ctrl.digitCtrl = "";
        ctrl.isClear = true;
    };

    ctrl.onOperatorClic = function (input) {
        ctrl.isClear = false;
        ctrl.currentOperator = input;
        ctrl.operatorsDisplay.push(ctrl.currentOperator);
        ctrl.operationDisplay.push(ctrl.digitCtrl);
        if (ctrl.calc.length < 2) {
            if (ctrl.calc.length === 0) {
                ctrl.result = ctrl.digitCtrl;
            }
            ctrl.calc.push(ctrl.digitCtrl);
            ctrl.digitCtrl = "";
        }
        if (ctrl.calc.length === 2) {
            for (let i = 0; i < ctrl.operatorsDisplay.length; i++) {
                switch (ctrl.operatorsDisplay[i - 1]) {
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
                    case "=":
                        ctrl.result = Number(ctrl.calc[1]);
                }
            }
            ctrl.calc = [];
            ctrl.calc.push(ctrl.result);
        }
    };

    ctrl.onDigitClic = function (input) {
        ctrl.digitCtrl += input;
    };

    ctrl.showCalcul = function (operator) {
        ctrl.showOperation += ctrl.operationDisplay[ctrl.index] +' '+  ctrl.operatorsDisplay[ctrl.index] +' ';
        console.log(ctrl.showOperation);
        ctrl.index += 1;
        if(operator ==="="){
            ctrl.showOperation += ctrl.result
        }
    };

});