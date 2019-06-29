
const anexo1 = require("./anexo_01");
const images = anexo1.images;

function execute (){

	var array = [{name: 'numero1',n: 1}, 
	        {name: 'numero2',n: 2},
	         {name: 'numero3',n: 3}];
	let arriou = [{n:1},{n:2},{n:3	}];
	//console.log(arriou);

 	let result = arriou.map( x => {
 		
 		return x;
 	

	});

 	var concatenedAddresses = [{concatened: ''}];
	var concatenedAddresses = array.map(x => {
		return [{concatened:array.name}];
	});
	console.log (concatenedAddresses);
 	// console.log(array.map( x => {
 		
 	// 	return x;
 	// }));


 	// console.log( `${result[0]}`);
 	// console.log(result[1]);


}

execute();