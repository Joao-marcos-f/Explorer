const pacients = [
    {
        name:"luiz",
        age: 20,
        weight:70,
        height:170
    },
    {
        name:"maria",
        age: 27,
        weight:180,
        height:150
    },
    {
        name:"juriscleide",
        age: 50,
        weight:80,
        height:170
    }
]

let patientsNames = []

for(let patient of pacients){
    patientsNames.push(patient.name)
}

alert(patientsNames)