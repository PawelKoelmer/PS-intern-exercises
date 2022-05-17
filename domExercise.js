//HANDLERS
const changeContainerColorDependsCordintaes = (containerId,mouseX,mouseY) =>{
    const elem = querySelect(containerId);
    const elemCordinates = elem.getBoundingClientRect();
    const pointerCordinates = {mouseX, mouseY}
    switch(currentQuarter(elemCordinates,pointerCordinates)){
        case 1:{
            elem.style.background = '#00ccbb';
            break;
        }
        case 2:{
            elem.style.background = '#222222';
            break;
        }
        case 3:{
            elem.style.background = '#cccccc';
            break;
        }
        case 4:{
            elem.style.background = '#bb00cc';
            break;
        }
    }
}

const currentQuarter = (elemCordinates,pointerCordinates) => {
    if(pointerCordinates.mouseX > (elemCordinates.right - (0.5 * elemCordinates.width)) && pointerCordinates.mouseY < (elemCordinates.bottom - (0.5*elemCordinates.height))){
        return 2;
    }else if(pointerCordinates.mouseX < (elemCordinates.right - (0.5 * elemCordinates.width)) && pointerCordinates.mouseY < (elemCordinates.bottom - (0.5*elemCordinates.height))){
        return 1;
    }else if(pointerCordinates.mouseX < (elemCordinates.right - (0.5 * elemCordinates.width)) && pointerCordinates.mouseY > (elemCordinates.bottom - (0.5*elemCordinates.height))){
        return 4;
    }else if(pointerCordinates.mouseX > (elemCordinates.right - (0.5 * elemCordinates.width)) && pointerCordinates.mouseY > (elemCordinates.bottom - (0.5*elemCordinates.height))){
        return 3;
    }


}

const resizeContainer = (elemId,height,width) => {
    const elem = querySelect(elemId);
    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
}

const hideElement = (elemId,isHidden) => {
    const elem = querySelect(elemId);
    elem.style.visibility = isHidden;
}

const calculateLength = (startingPoint,endPoint) => {
    return Math.pow((Math.pow(endPoint.mouseX - startingPoint.mouseX,2) + Math.pow((endPoint.mouseY - startingPoint.mouseY),2)),1/2);
}

const rotateImageFunction = () => {
    const image = querySelect('ball');

    image.addEventListener('mouseenter', (event) => {
            if(event.target.id  === image.id){
                image.classList.add('imageTrans')
            }
    })
    image.addEventListener('mouseout',(event) => {
        image.classList.remove('imageTrans');
    })
}

//CREATING FUNCTIONS

const createContainer = (id,className) => {
    const container = createElement('div',className,id);
    container.style.background = '#6ba832';
    container.style.width = '500px';
    container.style.height = '500px';
    let mouseX,mouseY;
    let startingPoint, endPoint;
    container.addEventListener('mousemove', (event) =>{
        if(event.target.id === id){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
        changeContainerColorDependsCordintaes(id,mouseX,mouseY);
        }
    })
    container.addEventListener('mousedown',(event)=>{
        startingPoint = {mouseX : event.offsetX ,mouseY:event.offsetY }
        console.log(startingPoint);
    })
    container.addEventListener('mouseup',(event)=>{
        endPoint = {mouseX: event.offsetX ,mouseY: event.offsetY }
        console.log(endPoint);
        console.log(calculateLength(startingPoint,endPoint))

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

const createInput = (id,type) => {
    const input = createElement('input','',id);
    input.setAttribute('type',type);
    return input;
}

const addCheckboxFunctionality = () => {
    const checkbox = querySelect('select1');
    checkbox.addEventListener('change',(e) =>{
        if(e.target.checked){
            hideElement('btn2','hidden');
        }else {
            hideElement('btn2', 'visible');
        }
    })
}

//MAIN FUNCTION

const render = () =>{
    appendElementToOther(createContainer('container', 'main_container'));
    // appendElementToOther(createButton('btn1', 'button', 'Zmień kolor' ,
    //         changeContainerColor,['container','red']),
    //     querySelect('container'));
    appendElementToOther(createButton('btn2','button','Zmień rozmiar',
        resizeContainer,['container',window.outerWidth,window.outerHeight]))
    appendElementToOther(createInput('select1','checkbox',))
    appendElementToOther(createLabelForElement('select1','ukryj przycisk resize'))
    addCheckboxFunctionality()
    appendElementToOther(createImageField('50px','50px','preview.svg'));
    rotateImageFunction();
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

const createLabelForElement = (targetId,labelText) =>{
    const label = createElement('label','','');
    label.setAttribute('for',targetId);
    label.innerText = labelText;
    return label;
}

const createImageField = (width,height,src) => {
    const image = createElement('img','','ball');
    image.style.width = width;
    image.style.height = height;
    image.setAttribute('src',src);
    return image;
}


//Render Site


render();



