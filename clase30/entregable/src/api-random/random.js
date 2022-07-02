const min = 1
const max = 1000

const output = {}

for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * (max - min) + min);
    
    if(output[number]){
        output[number]++
    } else {
        output[number] = 1
    }

}

process.on('message', msg => {
    console.log(`${msg}`);
    process.send(`${output}`)
    process.exit()
})

process.send('sended')