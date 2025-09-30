const student = [
    {
        name: 'Ram',
        age: 20,
        branch: "cse",
        language: { lan: "java", lan2: "python" }
    },
    {
        database1: "Mysql",
        database2: "mongodb"
    },
    {
        framework1: "Hibernate",
        framework2: "React"
    }
];

console.log(student[2].framework1);

student[0].college = "Abes engineering college";
console.log(student);


