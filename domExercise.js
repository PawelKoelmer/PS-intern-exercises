//HANDLERS

const changeContainerColor = (containerId, color) => {
    const elem = querySelect(containerId);
    console.log(elem);
    elem.style.background = color;
}


const createContainer = (id,className) => {
    const container = createElement('div',className,id);
    container.style.background = '#6ba832';
    container.style.width = '500px';
    container.style.height = '500px';
    container.addEventListener("mouseover", (event)=> {
        if(event.target.id === id){
            changeContainerColor(id, "#000000")
        }
    })
    container.addEventListener("mouseout", (event) => {
            changeContainerColor(id, '#6ba832')
    })
    return container;
}

const createButton = (id,className) => {
    const button = createElement('button', className , id)
    button.style.width= '200px';
    button.addEventListener("click", () => {changeContainerColor('container', '#000000')});
    button.textContent = 'Zmien kolor';
    return button;
}

const appendElementToOther = (element1, element2) => {
    element1.appendChild(element2);
}



const render = () =>{
    document.body.appendChild(createContainer('container', 'main_container'));
    appendElementToOther(querySelect('container'), createButton('btn1', 'button'));
}





//HELPERS

const querySelect = (elementId) => {
    return document.querySelectorAll(`#${elementId}`)[0];
}

const createElement = (elementType, elementClass = null, elementId = null) => {
    const element = document.createElement(elementType);
    element.className = elementClass;
    element.id = elementId;
    return element;
}




//Render Site


render()


