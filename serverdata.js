const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
}); 

console.log('server_data.php Maker by BorzXy')
readline.question('IP : ', ip => {
readline.question('PORT: ', port => {
readline.question('MAINT: ', maint => {

let data = (`server|${ip}\nport|${port}\ntype|1\n#maint|${maint}\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`)

fs.writeFile('server_data.php', data, (err) => { 
     
if (err) throw err; 
console.log('Success...')
})

})
})
})
