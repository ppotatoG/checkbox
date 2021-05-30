function chk(e) {
  
    const checkboxes = document.getElementsByName("chkEl");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    e.checked = true;
  }