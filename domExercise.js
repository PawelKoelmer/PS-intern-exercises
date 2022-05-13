const createContainer = (id,className) => {
    const container = createElement('div',className,id)
    container.style.background = '#6ba832';
    container.style.width = '500px'
    container.style.height = '500px'
    return container;
}

const createButton = (id,className) => {
    const button = createElement('button', className , id)
    button.style.width= '200px';
    button.textContent = 'Zmien kolor';
    return button;
}

const appendElementToOther = (element1, element2) => {
    element1.appendChild(element2);
}

const createElement = (elementType, elementClass, elementId) => {
    const element = document.createElement(elementType);
    element.className = elementClass;
    element.id = elementId;
    return element;
}

const querySelect = (elementId) => {
    return document.querySelectorAll(`#${elementId}`)[0];
}

document.body.appendChild(createContainer('container','main_container'))
appendElementToOther(querySelect('container'),createButton('btn1', 'button'))

