const studentArr :{name:string,age:number,role:string, degree:string}[]=[]
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
        studentArr.push({name:name,age:age, role:role, degree:degree})
        super(name,age,role)
        
    }
}
class TEACHER extends PERSON{
    constructor(public name:string,public age:number,public role:string,public subject:string){
        super(name,age,role)
        
    }
}


function addSTUDENTs (name:string,age:number,role:string,degree:string){
const std= new STUDENT(name,age,role,degree)
studentArr.push(std)

}

function teachers (name:string,age:number,role:string,subject:string){
    const teacher= new STUDENT(name,age,role,subject)
    teacherArr.push(teacher)
}
teachers("Talha",20,"Teaching","ENglish")
console.log(teacherArr)