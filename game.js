$(document).ready(function(){

	console.log('good to go')
var attackerChosen = false;
var characters = [
	{
		name:'Darth Vader',
		attack: 195, 
		HP: 190,
		counter_attack: 190

	},

	{
		name: 'Luke',
		attack: 200,
		HP: 200,
		counter_attack: 200
	},

	{
		name: 'Storm trooper',
		attack: 10,
		HP: 50,
		counter_attack: 50
	},

	{
		name: 'Emperor',
		attack: 190,
		HP: 150,
		counter_attack: 80
	},
]

var attacking 
var defending 
  $("#attack").on('click', function(){
  	console.log('attacking', attacking)
  	
  	defending.HP = defending.HP - attacking.attack
	console.log('defending', defending)
	if (defending.HP <= 0) {
		alert('defender died')

	}
  })


$("img").on('click', function(){
	console.log('chosen attacker', this.id)	
	for (var i = 0; i < characters.length; i++) {
		if (characters[i].name === this.id && attackerChosen == false) {
			console.log('found attacker', characters[i])
			attacking= characters[i]
			attackerChosen = true; 
		}else if(characters[i].name === this.id && attackerChosen == true){
			console.log('checking defender', characters[i])
			defending= characters[i]


		}
	}
} )

})

