function getData(){
    const students = {};
    const subjects = {};
    const studentSubjects = {};

    return {
        addStudent,
        updateStudent,
        removeStudent,
        getStudentByID,
        getAllStudents,
        addSubject,
        getSubject,
        addStudentToSubject,
        getSubjectsForStudent
    };

    function addStudent(personalID, name, surname){
        if(typeof(students[personalID]) === "undefined"){
            students.personalID = personalID;
            students[personalID] = {
                name: name[0].toUpperCase() + name.slice(1),
                surname: surname[0].toUpperCase() + surname.slice(1)
            };
        } else {
            return "The student already exists";
        }
    }

    function updateStudent(personalID, name = "0", surname = "0"){
       if(name !== "0") {
        students[personalID].name = name[0].toUpperCase() + name.slice(1);
       }
       if(surname !== "0"){
        students[personalID].surname = surname[0].toUpperCase() + surname.slice(1);
       }
    }

    function removeStudent(personalID){
        if(typeof(students[personalID]) !== "undefined"){
            delete students[personalID];
        } else {
            return "The student already deleted";
        }
        
    }

    function getAllStudents(){
        let allStudents =  Object.values(students);
        let studentsList = "";
        allStudents.forEach(allSt);
        function allSt(item, index){
            if(typeof(item.name) !== "undefined"){
                studentsList = studentsList + `${index+1} - ${item.name} ${item.surname}\n`;
            } 
        }
        return studentsList;
    }

    function getStudentByID(personalID){
        if(typeof(students[personalID]) !== "undefined"){
            return students[personalID].name + " " + students[personalID].surname;
        } else {
            return "The student doesn't exists";
        }
    }

    function addSubject(code, title){
        if(typeof(subjects[code]) !== "undefined"){
            return `The subject with the code "${code}" already exists`;
        } else {
           subjects[code] = {
                code: code,
                title: title[0].toUpperCase() + title.slice(1)
            };
        } 
    }

    function getSubject(code){
        if(typeof(subjects[code]) === "undefined"){
            return `The subject with the code "${code}" doesn't exists`;
        } else {
            return subjects[code].title;
        }
    }

    function addStudentToSubject(code, personalID){
        if(typeof(students[personalID]) === "undefined"){
            return "The student doesn't exists";
        } 
        if(typeof(subjects[code]) === "undefined"){
            return "The subject doesn't exists";
        } 
        if(typeof(studentSubjects[personalID]) === "undefined"){
            studentSubjects[personalID] = [];
            studentSubjects[personalID].push(code);
        } else if(!studentSubjects[personalID].includes(code)) {
            studentSubjects[personalID].push(code);
            } else {
                return `The student already have a subject with the code ${code}`;
            }
    }
        
    function getSubjectsForStudent(personalID){
        if(typeof(students[personalID]) !== "undefined"){
            if(typeof(studentSubjects[personalID]) !== "undefined"){
                let subject = Object.values(studentSubjects[personalID]);
                let subjectList = "";
                subject.forEach(codeSubject);
                function codeSubject(item){ 
                    subjectList = subjectList  + `${subjects[item].title}`+ ", ";
                }

                let subjectInfo = students[personalID].name + " " + students[personalID].surname;

                return subjectInfo + "'s" + " subject(s): " + subjectList.slice(0, -2);
            } else {
                    return "The student doesn't have at least one subject";
                }
        } else {
            return "The student doesn't exists";
        }
    }
}