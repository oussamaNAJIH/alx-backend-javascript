interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}



interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
};


interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}
    
    workOnHomework(): string {
        return 'Currently working';
    }
    
    displayName(): string {
        return this.firstName;
    }
}

export { StudentClass, StudentConstructor, StudentInterface };

