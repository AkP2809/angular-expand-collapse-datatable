export interface StudentData {
    id : number,
    name : string,
    age: number,
    address: string,
    isExpanded: boolean,
    subjects : SubjectInterface[]
}

export interface SubjectInterface {
    name : string,
    type : string,
    grade: string
}