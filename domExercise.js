//HANDLERS

<<<<<<< HEAD
// const changeContainerColor = (containerId, color) => {
//        const elem = querySelect(containerId);
//        const elemCordinates = elem.getBoundingClientRect();
//   //     const pointerCordinatesY = event.clientY;
//
//        console.log(pointerCordinates)
//
//        switch(pointerCordinates){
//            case 1:
//                break
//            case 2:
//                break
//            case 3:
//                break
//            case 4:
//                break
//            default:
//                break;
//        }
// }

const changeContainerColorDependsCordintaes = (containerId,mouseX,mouseY) =>{
    const elem = querySelect(containerId);
    const elemCordinates = elem.getBoundingClientRect();
    const pointerCordinates = {mouseX, mouseY}
    console.log(pointerCordinates)
    console.log((elemCordinates.right - (0.5 * elemCordinates.width)))
    console.log((elemCordinates.bottom - (0.5*elemCordinates.height)))
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

=======
const changeContainerColor = (containerId, color) => {
       const elem = querySelect(containerId);
       elem.style.background = color;
}

>>>>>>> origin/main
const resizeContainer = (elemId,height,width) => {
    const elem = querySelect(elemId);
    elem.style.width = `${width}px`;
    elem.style.height = `${height}px`;
}

const hideElement = (elemId,isHidden) => {
    const elem = querySelect(elemId);
    elem.style.visibility = isHidden;
}


//CREATING FUNCTIONS
<<<<<<< HEAD
=======

// const createForm =  (formId,listOfInputs) => {
//     const form = createElement('form','',formId);
//     listOfInputs.forEach(input => {
//         appendElementToOther(createFormInput(input),formId);
//     });
//     appendElementToOther(createLabelForElement('login','Login'),querySelect('login'))
//     appendElementToOther(createLabelForElement('password','hasło'),querySelect('password'))
//     return form;
// }
//
// const createFormInput = (name) => {
//     const input = createElement('input');
//     input.id = name;
//     input.type = "text";
//     input.style.display = 'block';
//     return input;
// }
>>>>>>> origin/main

const createContainer = (id,className) => {
    const container = createElement('div',className,id);
    container.style.background = '#6ba832';
    container.style.width = '500px';
    container.style.height = '500px';
    let mouseX,mouseY;
    container.addEventListener('mousemove', (event) =>{
        if(event.target.id === id){
        mouseX = event.offsetX;
        mouseY = event.offsetY;
        changeContainerColorDependsCordintaes(id,mouseX,mouseY);
        }
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
    appendElementToOther(createButton('btn1', 'button', 'Zmień kolor' ,
            changeContainerColor,['container','red']),
        querySelect('container'));
    appendElementToOther(createButton('btn2','button','Zmień rozmiar',
        resizeContainer,['container',window.outerWidth,window.outerHeight]))
    appendElementToOther(createInput('select1','checkbox',))
    appendElementToOther(createLabelForElement('select1','ukryj przycisk resize'))
    addCheckboxFunctionality()

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



//Render Site


render()


