import Student from '/Student.js'
import ListNode from '/ListNode.js'

function setup(){
    console.log(x);
    var x= 100;
    console.log(x);

    
    {
       
        let daysBlockScope_let = 20;
        console.log(`daysBlockScope_let is defined in this block (block scope) and its value is = ${daysBlockScope_let}`);

    }

    try{
        console.log(daysBlockScope_let);
        
    }catch(let_Error){
        console.log(let_Error);
    }
    
    
    try{
        var x = 74;
    }catch(let_Error){
        console.log(let_Error)
    }

    try{
        console.log(month);
    }catch(let_Error){
        console.log(let_Error)
    }
    console.log(`days before declaration statement (var days = 20;) (var is function scope) and its value = ${days}`);
    
    let month = parseInt(prompt("Enter the month"));
    switch(month){       
        case 1:{
            var days=30;
            break;
        }
        case 2:{
            let year = prompt("Enter the year");
            if(year % 4 === 0){
                days = 29;
            }
            else{
                days=28;
            }
            break;
        }
        case 3:
            days=31;
            break;
        case 4:
            days=30;
            break;

        case 5:
            days=31;
            break;
        case 6:
            days=30;
            break;
        case 7:
            days=31;
            break;
        case 8:
            days=31;
            break;
        case 9:
            days=30;
            break;
        case 10:
            days=31;
            break;
        case 11:
            days=30;
            break;
        case 12:
            days=31;
            break;
    }
    
    console.log(`The no. days in month ${month} is: ${days}`);

}
setup();
let month;
try{
    alert(days);
}catch(let_Error){
    console.log(let_Error);
}
const InitializeListNode = () => {
    let first = true;
    while(true){
        let name = prompt("Enter the name(to exit enter \"exit\").");
        if(!name){ 
            let p = iterator.prev;
            p.next = null;       
            break;
        }
        let id = prompt("Enter the id.");
        let gender = prompt("Enter the gender.");
        let age = prompt("Enter the age.");
        let passed_hrs = prompt("Enter the amount of successfully passed credit hours.");
        let specialization = prompt("Enter the specialization.");    
        
        let newStudent = new Student(name, id, age, gender, passed_hrs, specialization);
        
        let iteratorOfList;
        if(first){
            iteratorOfList = new ListNode(newStudent, new ListNode().prev = iteratorOfList);
            var listOfStudents = iteratorOfList;
            iteratorOfList = iteratorOfList.getNext();
            first = false;
            continue;
        }
        iteratorOfList.setData(newStudent);
        
        let newNode = new ListNode();
        newNode.prev = iteratorOfList;

        iteratorOfList.next = newNode;
        
        iteratorOfList = iteratorOfList.getNext();
    }
    return listOfStudents;
}

//let list = InitializeListNode();
/*let p = list;
while(p!=null){
    console.table(p);
}*/