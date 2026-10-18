interface IStudent {
    name : string;
    age : number;
    grade : number;
}

function getName() : string {
    return "John Doe";
}
function getAge() : number {
    return 20;
}
function getGrade() : number {
    return 3.76;
}  

function getStudentInfo() : {name: string, age: number, grade: number} {
    const name = getName();
    const age = getAge();
    const grade = getGrade();
    console.log(name, age, grade , ' 1st function ');
    return {name, age, grade};
}

async function getStudentInfo2() : Promise<{name: string, age: number, grade: number}> {
    const name = await getName();
    const age = await getAge();
    const grade = await getGrade();
    console.log(name, age, grade , ' 2nd function ');
    return {name, age, grade};
}

function getStudentInfo3() : IStudent {
    const name = getName();
    const age = getAge();
    const grade = getGrade();
    console.log(name, age, grade , ' 3rd function ');
    return {name, age, grade};
}

  function main(){
    getStudentInfo();
     getStudentInfo2();
    getStudentInfo3();
}

main();