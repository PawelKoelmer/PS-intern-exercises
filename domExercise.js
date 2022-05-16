//HANDLERS

const changeContainerColor = (containerId, color) => {
       const elem = querySelect(containerId);
       elem.style.background = color;
}

const resizeContainer = (elemId,height,width) => {
    const elem = querySelect(elemId);
    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
}


//CREATING FUNCTIONS


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

const createButton = (id,className, textContent ,handlerFunction, args) => {
    const button = createElement('button', className , id)
    button.style.width= '200px';
    button.addEventListener("click", () => {handlerFunction(...args)});
    button.textContent = textContent;
    return button;
}




//MAIN FUNCTION

const render = () =>{
    appendElementToOther(createContainer('container', 'main_container'));
    appendElementToOther(createButton('btn1', 'button', 'Zmień kolor' ,
            changeContainerColor,['container','red']),
        querySelect('container'));
    appendElementToOther(createButton('btn2','button','Zmień rozmiar',
        resizeContainer,['container',window.outerWidth,window.outerHeight]))
}



//HELPERS

const querySelect = (elementId) => {
    return document.querySelector(`#${elementId}`);
}

const createElement = (elementType, elementClass = '', elementId = '') => {
    const element = document.createElement(elementType);
    element.className = elementClass;
    element.id = elementId;
    return element;
}

const appendElementToOther = (elementToAppend,targetElement='') => {
    if(targetElement){
        targetElement.appendChild(elementToAppend);
    }
    else{
        document.body.appendChild(elementToAppend);
    }
}



//Render Site


render()


