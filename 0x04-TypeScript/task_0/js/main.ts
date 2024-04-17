interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
}

// Example usage:
const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true, // Adding a dynamic attribute
};


interface Directors extends Teacher {
    numberOfReports: number;
}
