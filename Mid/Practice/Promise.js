 function getStudentResult()
{
  return new Promise((resolve ,reject) =>{
    console.log("Requesting student result  ....");

    setTimeout(() => {
      const success = true;

      if(success){
        resolve(
          {
            id: 101,
            name: "Rahim",
            department: "CSE",
            marks:85
          });
      }
      else{
        reject(
          console.log("Failed to recive student result ...")
        );
      }
    },3000);
  });
}

async function displayResult() {
  console.log("Getting Student result ....");
  try {
    const student = await getStudentResult();
    console.log("Student result recived!");
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.department);
    console.log("Marks:", student.marks);
    console.log("Result processing complete");
  }
  catch (error) {
    console.log("error:", error);
  }
}

displayResult();