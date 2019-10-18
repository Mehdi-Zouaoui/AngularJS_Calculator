angular.module("App", ['main']);

angular.module("main", []);

angular.module("main").controller("mainController", function ($scope) {
    const ctrl = this;
    ctrl.data = "Calculatrice";
    ctrl.entier = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,"."];
    ctrl.calc = [];
    ctrl.index = 0;
    ctrl.affichage = "";
    ctrl.isClear = false;
    ctrl.inputSign = true;
    ctrl.digitCtrl = "0";
    ctrl.operationDisplay = "";
    ctrl.result = 0;
    ctrl.isEgal = false;
    ctrl.mathFunctions = ["x²", "x³", "√x", "1/x"];
    ctrl.operators = ["+", "-", "/", "*"];
    ctrl.currentOperator = "";
    ctrl.digitDisplay = [];
    ctrl.operatorsDisplay = [];
    ctrl.tamponDisplay = [];
    ctrl.tamponIndex = 0;


    // Gestion de l'affichage
    ctrl.calculatorDisplay = function () {
        // Si aucun digit appuyé : afficher le résultat
        if (ctrl.isClear) {
            ctrl.affichage = ctrl.result;
            //Sinon afficher les nombres
        } else ctrl.affichage = ctrl.digitCtrl;
        return ctrl.affichage;
    };

    ctrl.clear = function () {
        ctrl.resetCalc();
        ctrl.digitCtrl = "";
        ctrl.result = 0;
        ctrl.isClear = true;
    };

    ctrl.resetCalc = function () {
        ctrl.operationDisplay = "";
        ctrl.digitDisplay = [];
        ctrl.operatorsDisplay = [];
        ctrl.index = 0;
        ctrl.isEgal = false;
        ctrl.calc = [];
    };

    // Clic sur un entier
    ctrl.onDigitClic = function (input) {
        input = input.toString();
        if (ctrl.result) {
            ctrl.result = 0;
            ctrl.digitCtrl = "";
        }
        ctrl.isClear = false;
        if (ctrl.digitCtrl === "0") {
            ctrl.digitCtrl = input;
        } else {
            ctrl.digitCtrl += input;
        }
    };

    // Si '±' alors le signe change
    ctrl.isNegativInput = function () {
        if (ctrl.inputSign === true) {
            ctrl.digitCtrl = '-' + ctrl.digitCtrl;
            ctrl.inputSign = false;
        } else {
            ctrl.digitCtrl = Math.abs(ctrl.digitCtrl).toString();
            ctrl.inputSign = true;
        }
    };
    ctrl.commitdigitCtrl = function () {

        // Si le tableau de calcul n'a pas deux entiers :
        if (ctrl.calc.length < 2) {
            // On push dans le nombre entrer
            ctrl.calc.push(ctrl.digitCtrl);
            ctrl.digitDisplay.push(ctrl.digitCtrl);
            ctrl.digitCtrl = "";
            ctrl.isClear = true;
        }
    };

    ctrl.doCalc = function () {
        if (ctrl.calc.length === 2) {
            //Opérations
            switch (ctrl.currentOperator) {
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
            }
            // Reset  tableau
            ctrl.calc = [];
            // Push dans la première case le résultat du calcul précédent
            ctrl.calc.push(ctrl.result);
        }
    };
    // Clic sur opérateur :
    ctrl.onOperatorClic = function (input) {
        if (!ctrl.isClear) {
            ctrl.commitdigitCtrl();
            ctrl.doCalc();
            // L'opérateur courant est l'opérateur cliqué par l'utilisateur.
            ctrl.currentOperator = input;
            ctrl.operatorsDisplay.push(ctrl.currentOperator);
            ctrl.updateOperationDisplay(input);
            // Si deux entrées
        } else ctrl.currentOperator = input;
    };


    // Clic sur fonction
    ctrl.onFunctionClic = function (input) {
        // Chiffre par défaut 0.
        if (ctrl.digitCtrl === "") {
            ctrl.digitCtrl = 0
        }
        // Fonctions mathématiques.
        switch (input) {
            case "x²" :
                ctrl.result = parseFloat(ctrl.digitCtrl) * parseFloat(ctrl.digitCtrl);
                ctrl.digitCtrl = ctrl.result;
                break;
            case "x³" :
                ctrl.result = parseFloat(ctrl.digitCtrl) * parseFloat(ctrl.digitCtrl) * parseFloat(ctrl.digitCtrl);
                ctrl.digitCtrl = ctrl.result;
                break;
            case "√x":
                ctrl.result = Math.sqrt(parseFloat(ctrl.digitCtrl));
                ctrl.digitCtrl = ctrl.result;
                break;
            case "1/x":
                ctrl.result = 1 / parseFloat(ctrl.digitCtrl);
                ctrl.digitCtrl = ctrl.result;
                break;

        }
    };

    ctrl.onEgalClic = function () {
        ctrl.isEgal = true;
        ctrl.commitdigitCtrl();
        ctrl.doCalc();
        ctrl.operatorsDisplay.push("= " + ctrl.calc[0].toString());
        ctrl.updateOperationDisplay();
        ctrl.resultDisplay = ctrl.result;
        ctrl.tampon = true;
        ctrl.tamponDisplay.push(ctrl.operationDisplay);
        ctrl.tamponIndex += 1;

        ctrl.resetCalc();
        ctrl.digitCtrl = ctrl.result.toString();
        ctrl.isClear = false;
    };

    // Affichage du calcul entier
    ctrl.updateOperationDisplay = function () {
        // On stock les chiffres et les opérateur dans une variable
        ctrl.operationDisplay += ctrl.digitDisplay[ctrl.index] + ' ' + ctrl.operatorsDisplay[ctrl.index] + ' ';
        ctrl.index += 1;
    };

    ////


});