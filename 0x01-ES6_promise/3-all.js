import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
    uploadPhoto()
        .then(result => {
            process.stdout.write(`${result.body}`);
            return createUser();
        })
        .then(result => process.stdout.write(` ${result.firstName} ${result.lastName}\n`))
        .catch(() => console.log("Signup system offline"));
}

