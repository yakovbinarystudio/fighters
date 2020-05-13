export function fight(firstFighter, secondFighter) {
    let healthFirst = firstFighter.health;
    let healthSecond = secondFighter.health;

    do {
        let firstAttack = getHitPower(firstFighter.attack);
        let secondAttack = getHitPower(secondFighter.attack);

        let firstDefense = getBlockPower(firstFighter.defense);
        let secondDefense = getBlockPower(secondFighter.defense);

        healthFirst -= getDamage(firstDefense, secondAttack);
        healthSecond -= getDamage(secondDefense, firstAttack);
    } while (healthFirst >= 0 && healthSecond >= 0);

    return healthFirst > 0 ? firstFighter : secondFighter;
}

export function getDamage(defense, attack) {
    return attack - defense;
}

export function getHitPower(attack) {
    return attack * criticalHitChance();
}

export function criticalHitChance() {
    return Math.random() + 1;
}

export function getBlockPower(defense) {
    return defense * dodgeChance();
}

export function dodgeChance() {
    return Math.random() + 1;
}
