const checkboxes = document.querySelectorAll('input');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function(){
    const thisName = this.name
    const Siblings = document.querySelectorAll('input[name='+thisName+']')
    for(Sibling of Siblings){
      Sibling.checked = false
    }
    this.checked = true
  })
})