const accountId = 144557
let accountEmail = "swastikmankani@gmail.com"
var accountPassword = '12345'
accountCity = 'Jaipur'
let accountState;

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])