const calcInput = document.getElementById('calcInput');
          function appendCalc(value) {
            calcInput.value += value;
          }
          function calculate() {
            try {
              calcInput.value = eval(calcInput.value);
            } catch {
              calcInput.value = 'Error';
            }
          }
          function clearCalc() {
            calcInput.value = '';
          }