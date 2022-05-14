function bot() {
    let botPosition = MOB.position.x
    if (botPosition < 80) {
        MOB.velocity.x = 5
    } else if (botPosition > 800) {
        MOB.velocity.x = -5
    }
    
}

