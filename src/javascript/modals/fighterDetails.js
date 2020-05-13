import {createElement} from '../helpers/domHelper';
import {showModal} from './modal';

export function showFighterDetailsModal(fighter) {
    const title = 'Fighter info';
    const bodyElement = createFighterDetails(fighter);
    showModal({title, bodyElement});
}

function createFighterDetails(fighter) {
    const fighterDetails = createElement({tagName: 'div', className: 'modal-body'});
    const nameElement = createElement({tagName: 'p', className: 'fighter-name'});
    const defense = createElement({tagName: 'span', className: 'defense'});
    const health = createElement({tagName: 'span', className: 'health'});
    const attack = createElement({tagName: 'span', className: 'attack'});
    const image = createElement({tagName: 'img', className: 'fighter-image'});
    const wrapParams = createElement({tagName: 'p'});

    image.setAttribute('src', fighter.source);
    nameElement.innerText = fighter.name;
    attack.innerText = 'attack: ' + fighter.attack + ', ';
    defense.innerText = 'defense: ' + fighter.defense + ', ';
    health.innerText = 'health: ' + fighter.health;
    nameElement.classList.add('name');

    wrapParams.append(attack);
    wrapParams.append(defense);
    wrapParams.append(health);
    fighterDetails.append(nameElement);
    fighterDetails.append(image);
    fighterDetails.append(wrapParams);

    return fighterDetails;
}
