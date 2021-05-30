const checkboxes = document.querySelectorAll('input[name=chk01_El]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function(){
    for(chk of checkboxes){
      chk.checked = false
    }
    this.checked = true
  })
})