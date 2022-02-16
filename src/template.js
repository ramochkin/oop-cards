//Create, Inject, Append

function buildTeam(employees) {

    //create, inject data, return html as a string

    function buildManager(manager) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Manager</h5>
            <p class="card-text">Name: ${manager.getName()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${manager.getEmail()}</li>
            <li class="list-group-item">Id: ${manager.getId()}</li>
            <li class="list-group-item">Office Numer: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
        `
    }

    function buildEngineer(engineer) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">Name: ${engineer.getName()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
            <li class="list-group-item">Id: ${engineer.getId()}</li>
            <li class="list-group-item">Github: <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></li>
        </ul>
    </div>
        `
    }

    function buildIntern(intern) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">Name: ${intern.getName()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">Id: ${intern.getId()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
        `
    }

    const html = [];

    html.push(employees.filter(team => team.getRole() === "Manager").map(manager => buildManager(manager)))
    html.push(employees.filter(team => team.getRole() === "Engineer").map(engineer => buildEngineer(engineer)))
    html.push(employees.filter(team => team.getRole() === "Intern").map(intern => buildIntern(intern)))



    return html.join('');
}



module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead">These are all the members within my team!.</p>
            </div>
        </div>
    </header>

    <div id="cardContainer">
        ${buildTeam(team)}
    </div>
</body>

</html>

`
}