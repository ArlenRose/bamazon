var mysql      = require('mysql');
var inquirer   = require('inquirer');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bamazon'
});
 
connection.connect();
 
connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  askQuestions()
});

function askQuestions() {
    inquirer.prompt([
        {
         type: "input",
         name: "id",
         message: "What is the ID of the would you like to buy?"
        },

        {
            type: "input",
            name: "quantity",
            message: "How many would you like to buy?"
           },
           
    ]).then(function(answer){
        console.log("Answer From User", answer);
    })
}

function listItems() {
  connection.query('SELECT * FROM products', function (error, results, fields) {
    if (error) throw error;
    console.log('These are all the items we have: ', results);

  });
}