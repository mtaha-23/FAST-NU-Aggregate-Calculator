<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aggregate Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   
    <div id="calculator" class="container">
        <h1>FAST NUCES Aggregate Calculator</h1>
        <div class="button-container">
            <button onclick="showAggregateWithNU()" class="orange-btn">Calculate Aggregate with NU/NAT Marks</button>
            <button onclick="showNUAndAggregate()" class="orange-btn">Calculate NU Marks and Final Aggregate</button>
        </div>
        <a href="https://chat.whatsapp.com/GgVGnvwtfV8JvxifJYsMxH" target="_blank" class="whatsapp-btn">Join Admission 2024 WhatsApp Group</a>
        <p class="credit">© Taha</p>
    </div>

    <div id="aggregateWithNU" class="container" style="display: none;">
        <h1>Calculate Aggregate with NU/NAT Marks</h1>
        <div class="input-group tooltip">
            <label for="nuNATMarks">• NU/NAT Marks <span class="tooltiptext">NU-Test marks should be entered after negative marking</span></label>
            <input id="nuNATMarks" type="number" step="0.01">
        </div>
        <div class="input-group">
            <label for="matricPercentage">• Matric Percentage:</label>
            <input id="matricPercentage" type="number" step="0.01">
        </div>
        <div class="input-group tooltip">
            <label for="fscPercentage">• FSc Percentage | O/A Equivalence <span class="tooltiptext">If FSc part 2 result is not announced, enter FSc part 1 result</span></label>
            <input id="fscPercentage" type="number" step="0.01">
        </div>
        <div class="button-container">
            <button onclick="calculateAggregateWithNU()" class="calculate-btn">Calculate</button>
            <button onclick="goBack()" class="back-btn">Go Back</button>
        </div>
        <div id="resultsAggregateWithNU">
            <p id="finalAggregateWithNU" class="result"></p>
        </div>
        <p class="credit">© Taha</p>
    </div>

    <div id="nuAndAggregate" class="container" style="display: none;">
        <h1>Calculate NU Marks and Aggregate</h1>
        <div class="input-group">
            <label for="totalAttemptedExceptEnglish">• Total Attempted Questions (except English):</label>
            <input id="totalAttemptedExceptEnglish" type="number">
        </div>
        <div class="input-group">
            <label for="correctExceptEnglish">• Correct Questions (except English):</label>
            <input id="correctExceptEnglish" type="number">
        </div>
        <div class="input-group">
            <label for="totalAttemptedEnglish">• Total Attempted Questions (only English):</label>
            <input id="totalAttemptedEnglish" type="number">
        </div>
        <div class="input-group">
            <label for="correctEnglish">• Correct Questions (only English):</label>
            <input id="correctEnglish" type="number">
        </div>
        <div class="input-group">
            <label for="matricPercentageNU">• Matric Percentage</label>
            <input id="matricPercentageNU" type="number" step="0.01">
        </div>
        <div class="input-group tooltip">
            <label for="fscPercentageNU">• FSc Percentage | O/A Equivalence <span class="tooltiptext">If FSc part 2 result is not announced, enter FSc part 1 result</span></label>
            <input id="fscPercentageNU" type="number" step="0.01">
        </div>
        <div class="button-container">
            <button onclick="calculateNUAndAggregate()" class="calculate-btn">Calculate</button>
            <button onclick="goBack()" class="back-btn">Go Back</button>
        </div>
        <div id="resultsNUAndAggregate">
            <p id="finalMarksNU" class="result"></p>
            <p id="nuTestMarksNU" class="result"></p>
            <p id="negativeMarksNU" class="result"></p>
        </div>
        <p class="credit">© Taha</p>
    </div>

    <script>
        function showAggregateWithNU() {
            document.getElementById("calculator").style.display = "none";
            document.getElementById("aggregateWithNU").style.display = "block";
            document.getElementById("nuAndAggregate").style.display = "none";
        }

        function showNUAndAggregate() {
            document.getElementById("calculator").style.display = "none";
            document.getElementById("aggregateWithNU").style.display = "none";
            document.getElementById("nuAndAggregate").style.display = "block";
        }

        function goBack() {
            document.getElementById("calculator").style.display = "block";
            document.getElementById("aggregateWithNU").style.display = "none";
            document.getElementById("nuAndAggregate").style.display = "none";

            // Clear input fields
            const inputs = document.querySelectorAll('input[type="number"]');
            inputs.forEach(input => input.value = '');

            // Hide result paragraphs
            const results = document.querySelectorAll('.result');
            results.forEach(result => result.style.display = 'none');
        }

        function calculateAggregateWithNU() {
            var nuNATMarks = parseFloat(document.getElementById("nuNATMarks").value) || 0;
            var matricPercentage = parseFloat(document.getElementById("matricPercentage").value) || 0;
            var fscPercentage = parseFloat(document.getElementById("fscPercentage").value) || 0;

            var aggregate = (nuNATMarks * 0.5) + (matricPercentage * 0.1) + (fscPercentage * 0.4);

            document.getElementById("finalAggregateWithNU").textContent = "Your Aggregate: " + aggregate.toFixed(2) + "%";
            document.getElementById("finalAggregateWithNU").style.display = "block";
        }

        function calculateNUAndAggregate() {
            var totalAttemptedExceptEnglish = parseFloat(document.getElementById("totalAttemptedExceptEnglish").value) || 0;
            var correctExceptEnglish = parseFloat(document.getElementById("correctExceptEnglish").value) || 0;
            var totalAttemptedEnglish = parseFloat(document.getElementById("totalAttemptedEnglish").value) || 0;
            var correctEnglish = parseFloat(document.getElementById("correctEnglish").value) || 0;
            var matricPercentageNU = parseFloat(document.getElementById("matricPercentageNU").value) || 0;
            var fscPercentageNU = parseFloat(document.getElementById("fscPercentageNU").value) || 0;

            var wrongExceptEnglish = totalAttemptedExceptEnglish - correctExceptEnglish;
            var wrongEnglish = totalAttemptedEnglish - correctEnglish;

            //marks without negative marking
            var totalMarks = (correctExceptEnglish * 1) + (correctEnglish * 0.333);
            //negative marking
            var negativeMarks = (wrongExceptEnglish * 0.25) + (wrongEnglish * 0.0833);
            
            //marks after negative marking
            var nuTestMarks = totalMarks - negativeMarks;

            var aggregate = (nuTestMarks * 0.5) + (matricPercentageNU * 0.1) + (fscPercentageNU * 0.4);

            document.getElementById("finalMarksNU").textContent = "Your Aggregate: " + aggregate.toFixed(2) + "%";
            document.getElementById("nuTestMarksNU").textContent = "NU Test Marks (without negative marking): " + nuTestMarks.toFixed(2);
            document.getElementById("negativeMarksNU").textContent = "Negative Marks: " + negativeMarks.toFixed(2);

            document.getElementById("finalMarksNU").style.display = "block";
            document.getElementById("nuTestMarksNU").style.display = "block";
            document.getElementById("negativeMarksNU").style.display = "block";
        }
    </script>
</body>
</html>
