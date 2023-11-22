// Convertor language will be in afrikaans language
document.getElementById('convertButton').addEventListener('click', convertToDays);

    function convertToDays() {
      // Get age value
      let ouderdom = parseInt(document.getElementById('ouderdom').value);

      // Check if the value is valid
      if (isNaN(ouderdom) || ouderdom < 0) {
        alert('Probeer weer asseblief.');
        return;
      }

      // Calculate age in days (assuming an average year has 365 days)
      let days = ouderdom * 365;

      // Display the result - rounded off by two digits
      document.getElementById('result').innerHTML = 'Jou ouderdom in dae is: ' + days + ' dae';
    }