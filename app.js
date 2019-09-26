angular.module("App", ['main']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope) {
    const ctrl = this;
    ctrl.data = "Calculatrice";
    ctrl.entier = [".", '±', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ctrl.calc = [];
    ctrl.index = 0;
    ctrl.affichage = null;
    ctrl.digitCtrl = "";
    ctrl.showOperation = "";
    ctrl.result = 0;
    ctrl.operators = ["+", "-", "/", "*", "=", "x²", "x³", "√x", "1/x"];
    ctrl.currentOperator = "";
    ctrl.operationDisplay = [];
    ctrl.operatorsDisplay = [];
    ctrl.tampon = false;
    ctrl.tamponDisplay = [];
    ctrl.tamponIndex = 0;

    ctrl.calculatorDisplay = function () {
        if (ctrl.digitCtrl === "") {
            ctrl.affichage = ctrl.result;
        } else ctrl.affichage = ctrl.digitCtrl;
        return ctrl.affichage;
    };

    ctrl.clear = function () {
        ctrl.tampon = true;
        ctrl.tamponDisplay.push(ctrl.showOperation);
        ctrl.tamponIndex += 1;
        ctrl.showOperation = "";
        ctrl.result = 0;
        ctrl.operationDisplay = [];
        ctrl.operatorsDisplay = [];
        ctrl.index = 0;
        ctrl.calc = [];
        ctrl.digitCtrl = "";
        ctrl.isClear = true;
    };

    ctrl.onOperatorClic = function (input) {
        if(ctrl.digitCtrl ===""){
            ctrl.digitCtrl = 0
        }
        ctrl.isClear = false;
        ctrl.currentOperator = input;
        ctrl.operationDisplay.push(ctrl.digitCtrl);
        ctrl.operatorsDisplay.push(ctrl.currentOperator);

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
                        ctrl.result = parseFloat(ctrl.calc[0]) + parseFloat(ctrl.calc[1]);
                        console.log('test' + parseFloat(ctrl.calc[0]), parseFloat(ctrl.calc[1]));
                        break;
                    case "-" :
                        ctrl.result = parseFloat(ctrl.calc[0]) - parseFloat(ctrl.calc[1]);
                        break;
                    case "*" :
                        ctrl.result = parseFloat(ctrl.calc[0]) * parseFloat(ctrl.calc[1]);
                        break;
                    case "/" :
                        ctrl.result = parseFloat(ctrl.calc[0]) / parseFloat(ctrl.calc[1]);
                        break;
                    case "x²" :
                        ctrl.result = parseFloat(ctrl.calc[0]) * parseFloat(ctrl.calc[0]);
                        break;
                    case "x³" :
                        ctrl.result = parseFloat(ctrl.calc[0]) * parseFloat(ctrl.calc[0]) * parseFloat(ctrl.calc[0]);
                        break;
                    case "√x":
                        ctrl.result = Math.sqrt(parseFloat(ctrl.calc[0]));
                        break;
                    case "1/x":
                        ctrl.result = 1 / parseFloat(ctrl.calc[0]);
                        break;
                    case "=":
                        ctrl.result = parseFloat(ctrl.calc[1]);
                        ctrl.operationDisplay.push(ctrl.affichage);
                        ctrl.tamponAffichage();

                        break;
                }
            }
            ctrl.calc = [];
            ctrl.calc.push(ctrl.result);

        }
         ctrl.showCalcul(input);
    };
    ctrl.onDigitClic = function (input) {
        ctrl.numberInput = ctrl.val;
        ctrl.digitCtrl += input;
        if (input === '±') {
            ctrl.digitCtrl = '-' + ctrl.affichage;
        }
    };

    ctrl.showCalcul = function (operator) {
        ctrl.showOperation += ctrl.operationDisplay[ctrl.index] + ' ' + ctrl.operatorsDisplay[ctrl.index] + ' ';
        ctrl.index += 1;
        if (operator === "=") {
            ctrl.showOperation += ctrl.result
        }
    };

});