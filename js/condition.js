let Add = document.getElementById('AddBtn');
let myNames = document.getElementById('name-contain');
let Name = document.getElementById('Name');
let salary = document.getElementById('Salary');

Add.addEventListener('click', () => {
    myNames.innerHTML += (`
    <div class="dName">
        <button class="float-right delete">del</button>
        <p>${Name.value}</p>
        <p>${salary.value}</p>
    </div>
    `)
});

document.addEventListener('click', (ev) => {
    if (ev.target.classList.contains('delete')) {
        ev.target.parentElement.remove();
    }
});