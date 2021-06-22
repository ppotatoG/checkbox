const checkboxes = document.querySelectorAll('input');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function(){
    const thisName = this.name;
    const Siblings = document.querySelectorAll('input[name='+thisName+']');

    for(Sibling of Siblings){
      Sibling.checked = false;
      Sibling.nextElementSibling.style.color = '#000';
    }
    
    this.checked = true;
    this.nextElementSibling.style.color = 'red';

    if(this.classList == 'all') {
      for(Sibling of Siblings){
        Sibling.checked = true;
        Sibling.nextElementSibling.style.color = 'red';
      }
    }
  })
})