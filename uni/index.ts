const studentArr :{}[]=[]
const teacherArr :{}[]=[]

class PERSON{

    constructor(public name:string,public age:number,public role:string){
        
    }
    status(){
        return this.role
    }
}

class STUDENT extends PERSON{
    constructor(public name:string,public age:number,public role:string,public degree:string){
        super(name,age,role)
        
    }
}
class TEACHER extends PERSON{
    constructor(public name:string,public age:number,public role:string,public classes:string){
        super(name,age,role)
        
    }
}


function addSTUDENTs (name:string,age:number,role:string,degree:string){
const std= new STUDENT(name,age,role,degree)
teacherArr.push(std)

}

function teachers (name:string,age:number,role:string,classes:string){
    const teacher= new STUDENT(name,age,role,classes)
    teacherArr.push(teacher)
}