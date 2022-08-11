function htmlGen(response){
  let draft =

  `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamProfileGenerator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
<h1>Team Profile Generator!</h1>
</header>

<div class ="container">
<div class = "Manager">


<h2>${response[0].type}:</h2> <p>${response[0].name}</p>


<h2>Employee ID:</h2> <p>${response[0].id}</p>


<h2>Email :</h2> <p>${response[0].email}</p>


<h2>Office Number:</h2> <p>${response[0].office}</p>
</div>`



for(let k = 1; k < response.length; k++){

if(response[k].type === 'Intern'){
  draft +=

`<div class = "intern">


<h2>${response[k].type}:</h2> <p>${response[k].name}</p>


<h2>Employee ID:</h2> <p>${response[k].id}</p>


<h2>Email :</h2> <p>${response[k].email}</p>


<h2>Office Number:</h2> <p>${response[k].office}</p>
</div>

`
}


else if(response[k].type === 'Engineer'){
draft +=
  `<div class = "engineer">


<h2>${response[k].type}:</h2> <p>${response[k].name}</p>


<h2>Employee ID:</h2> <p>${response[k].id}</p>


<h2>Email :</h2> <p>${response[k].email}</p>


<h2>Office Number:</h2> <p>${response[k].work}</p>
</div>





</body>
</html>
`
}};
return draft;
}
module.exports = htmlGen

