let name = document.getElementsByName('firstname').value;
let checked = document.getElementsByName('checkme');

function formCheck(){
if(name.lenth>0 && checked.checked == true){
    return true
}
return false
}
formCheck()
