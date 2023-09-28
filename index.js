// Code your solutions in this file

function writeCards(names, event) {
    const msgs = []
    for (let i = 0; i < names.length; i++) {
        msgs.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return msgs
}

function countDown(n) {
    const count = []
    let i = n + 1
    while (i > 0) {
        i--
        console.log(i)
    }
    return count
}



