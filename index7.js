fetch ('http://www.example.com/api/get/1',{
    method:'get'
})
.than(response => response.json())
.than(jsonData => console.log(jsonData))
.catch(err => {
    console.log(err)
})