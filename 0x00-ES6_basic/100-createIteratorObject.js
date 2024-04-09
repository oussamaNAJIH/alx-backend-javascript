export default function createIteratorObject(report) {
    for (const department in report) {
        for (const employe of department) {
            return employe;
        }
    }
}
