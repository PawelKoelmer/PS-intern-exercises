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

const hideElement = (elemId,isHidden) => {
    const elem = querySelect(elemId);
    elem.style.visibility = isHidden;
}


//CREATING FUNCTIONS

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


