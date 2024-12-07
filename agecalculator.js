//to show the current time
function updateCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
        dateStyle: 'long',
    });

    const currentTimeElement = document.getElementById("current-time");
    currentTimeElement.textContent = `Today is ${formattedTime}`;
}

updateCurrentTime();

// to calculate the age when you click the submit button
const idSubmit = document.getElementById("submit")
idSubmit.addEventListener('click', function () {
    // read input
    const dateInput = document.getElementById("dob").value;

    if (!dateInput) {
        alert('Please select a date');
        return;
    }

    const [year, month, day] = dateInput.split('-'); // parsing to avoid time zone conflicts
    const dob = new Date(year, month - 1, day);
    const now = new Date();

    if (dob > now) {
        alert('The selected date is in the future');
        return;
    }

    // calculate the age
    let age = now.getFullYear() - dob.getFullYear();
    if (dob.getMonth() > now.getMonth() || 
        (dob.getMonth() === now.getMonth() && dob.getDate() > now.getDate())) {
        age -= 1;
    }

    // check if it's the birthday
    var isBday = false;
    if(dob.getMonth() == now.getMonth() && dob.getDate() == now.getDate()) {
        isBday = true;
    }

    // show the results
    const idResult = document.getElementById("result");
    if (isBday) { 
        idResult.innerHTML = `<p class="text-gray-700">You are <strong>${age}</strong>!<br>Happy Birthday :)</p>`;
    }
    else{
        idResult.innerHTML = `<p class="text-gray-700">You are <strong>${age}</strong>!</p>`;
    }
});