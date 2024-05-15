loops.everyInterval(60000, function () {
    serial.writeNumber(input.temperature())
    serial.writeLine("" + ("\n"))
})
