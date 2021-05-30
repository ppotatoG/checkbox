const checkboxes = document.querySelectorAll('input[name=chk]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', function(){
    // 여기가 부모의 자식들로 
    for(chk of checkboxes){
      chk.checked = false
    }
    this.checked = true
  })
})