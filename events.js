
const logEvents = require('./logevents')
const EventEmitter = require('events')

const eventEmiiter = new EventEmitter()

eventEmiiter.on('log',(msg)=>{
    logEvents(msg)
})

eventEmiiter.emit('log','log event emitted')