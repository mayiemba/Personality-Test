// 
const zodiacData = {
    "Aries": "Aries are known for their courage and determination.",
    "Taurus": "Taurus are known for their reliability and patience.",
    "Gemini": "Gemini are known for their adaptability and communication skills.",
    "Cancer": "Cancer are known for their tenacity and loyalty.",
    "Leo": "Leo are known for their confidence and charisma.",
    "Virgo": "Virgo are known for their analytical and practical nature.",
    "Libra": "Libra are known for their diplomacy and fairness.",
    "Scorpio": "Scorpio are known for their passion and resourcefulness.",
    "Sagittarius": "Sagittarius are known for their optimism and independence.",
    "Capricorn": "Capricorn are known for their discipline and ambition.",
    "Aquarius": "Aquarius are known for their innovation and humanitarianism.",
    "Pisces": "Pisces are known for their empathy and artistic nature."
};

document.getElementById('userinfo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const zodiac = document.getElementById('zodiac').value;

    if (name && zodiacData[zodiac]) {
        localStorage.setItem('name', name);
        localStorage.setItem('zodiac', zodiac);
        localStorage.setItem('zodiacInfo', zodiacData[zodiac]);
        window.location.href = 'result.html';
    } else {
        alert('Please enter a valid name and zodiac sign.');
    }
});
