export class Student{

    studentId:number
    studentName:string
    studentEmail:string

    constructor(id:number , name:string , email:string){

        this.studentId = id
        this.studentName = name
        this.studentEmail = email
    }

    toString():string{

        return "Student Id: "+this.studentId+", Student Name: "+this.studentName+", Student Email: "+this.studentEmail
    }
}