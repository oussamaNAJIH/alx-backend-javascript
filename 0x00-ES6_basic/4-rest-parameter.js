export default function returnHowManyArguments(...args) {
    let num = 0;
    for (const element of args) {
        num++;
    }
    return num;
}