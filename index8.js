var obj=[
    {"id":4,"name":"abc"},
    {"id":1,"name":"abc2"}
]

//  it gonna be array of objects otherwise it gonna provide the value of id and name

function compare(a,b) {
    if(a.id<b.id){
        return -1;
    }
    if(a.id>b.id){
        return 1;
    }
    return 0;
}

obj.sort(compare);