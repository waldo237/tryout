const Person = require('./lib/Person');

const ben = new Person ('Donald Trump');
const barack = new Person ('Barack Obama');

ben.on('speak', (said)=>{
    console.log(`${ben.name}: ${said}`);
});

ben.emit('speak', 'klk mi gente, vamos a construir un muro');

barack.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});

barack.emit('speak', 'my fellow americans, I think we should give free healthcare for everyone');
