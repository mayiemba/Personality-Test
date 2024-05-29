document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const zodiac = document.getElementById('zodiac').value;
    localStorage.setItem('zodiac', zodiac);
    window.location.href = 'index.html';
});