
function calculateAge() {
    let dob = new Date(document.getElementById('dob').value);
    let today = new Date();

    if (isNaN(dob.getTime())) {
        document.getElementById('output').innerHTML = 'Please enter a valid date.';
        return;
    }

    let ageYear = today.getFullYear() - dob.getFullYear();
    let monthDifference = (today.getMonth() - dob.getMonth() + 12) % 12;
    let dayDifference = today.getDate() - dob.getDate();

    if (dayDifference < 0) {
        monthDifference--;
    }

    document.getElementById('output').innerHTML = `You are ${ageYear} years and ${monthDifference} months old.`;
}



