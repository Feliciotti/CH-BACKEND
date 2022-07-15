import { fork } from 'child_process';


async function getForked() {

    const forked = fork('dao/random.dao.js')

    forked.send('start')
    forked.on('message', msg => {
    let result = msg
    return result
    })

}

export { getForked }