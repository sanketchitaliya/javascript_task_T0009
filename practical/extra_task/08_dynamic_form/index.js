function createForm() {
const number = parseInt(prompt('Enter the number of form elements:'));
  
    if (isNaN(number) || number <= 0) {
      alert('number must be >0');
      return;
    }
  
    var inputTypes = ['text', 'checkbox', 'radio','submit'];
  
    for (var i = 0; i < number; i++) {
      var elementType = prompt('Enter element type' + (i + 1) + ' (text, checkbox, radio,submit):').toLowerCase().trim();
  
      if (!inputTypes.includes(elementType)) {
        alert('Invalid element type');
        return;
      }
  
      if (elementType === 'text') {
        var lable = prompt('Enter lable type for element ' + (i + 1)).toLowerCase().trim();
        var inputLable = document.createElement('lable');
        inputLable.innerHTML=lable;
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'text');
        inputElement.setAttribute('placeholder', 'Enter text');
      } 
      else if (elementType === 'checkbox') {
        var lable = prompt('Enter lable type for element ' + (i + 1)).toLowerCase().trim();
        var inputLable = document.createElement('lable');
        inputLable.innerHTML=lable;
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'checkbox');
      } 
      else if (elementType === 'radio') {
        var lable = prompt('Enter lable type for element ' + (i + 1)).toLowerCase().trim();
        var inputLable = document.createElement('lable');
        inputLable.innerHTML=lable;
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', 'gender');
      }
      else if (elementType === 'submit') {
        var inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'submit');
        inputElement.setAttribute('value', 'submit');
      }
  
      var br = document.createElement('br');
  
      var form = document.getElementById('form');
      if (elementType === 'checkbox' || elementType === 'radio') {
        form.appendChild(inputElement);
        form.appendChild(br);
        form.appendChild(inputLable);
      } else if(elementType === 'text'){
        form.appendChild(inputLable);
        form.appendChild(inputElement);
      }else if(elementType === 'submit'){
        form.appendChild(inputElement);
      }
      form.appendChild(br);
    }
     

  }
  