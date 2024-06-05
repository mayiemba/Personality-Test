// document.addEventListener("DOMContentLoaded", function () {
//     if (window.location.pathname.endsWith("result.html")) {
    
//         const totalScore = parseInt(localStorage.getItem('totalScore'));

//         let resultText = '';
//         if (totalScore <= 5) {
//             resultText = 'Your personality is calm and collected.';
//         } else if (totalScore > 5 && totalScore <= 10) {
//             resultText = 'Your personality is balanced and thoughtful.';
//         } else if (totalScore > 10 && totalScore <= 15) {
//             resultText = 'Your personality is energetic and enthusiastic.';
//         } else if (totalScore > 15 && totalScore <= 20) {
//             resultText = 'Your are good.'
//         } else if (totalScore > 20 && totalScore <= 25) {
//             resultText = 'Your very good.'
//         }else {
//             resultText = 'Quiz is done and failed to get the results.'
//         }
//         document.getElementById('resultText').textContent = resultText;
//         document.getElementById('zodiacInfo').textContent = `As a ${zodiac}, ${zodiacInfo}`;
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem('name');
    const zodiac = localStorage.getItem('zodiac');
    const totalScore = localStorage.getItem('totalScore');
    const zodiacInfo = localStorage.getItem('zodiacInfo');

    if (name && zodiac && totalScore !== null && zodiacInfo) {
        let resultText = '';
        const score = parseInt(totalScore);

        if (totalScore <= 5) {
        resultText = 'Your personality is calm and collected.';
        } else if (totalScore > 5 && totalScore <= 10) {
            resultText = 'Your personality is balanced and thoughtful.';
        } else if (totalScore > 10 && totalScore <= 15) {
            resultText = 'Your personality is energetic and enthusiastic.';
        } else if (totalScore > 15 && totalScore <= 20) {
            resultText = 'Your are good.'
        } else if (totalScore > 20 && totalScore <= 25) {
            resultText = 'Your very good.'
        }

        document.getElementById('resultText').textContent = `Hello ${name}, ${resultText}`;
        document.getElementById('zodiacInfo').textContent = `As a ${zodiac}, ${zodiacInfo}`;
    } else {
        document.getElementById('resultText').textContent = 'No results found. Please complete the quiz first.';
    }
});
