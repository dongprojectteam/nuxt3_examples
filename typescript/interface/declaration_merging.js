let dopt = {
    name: 'dopt',
    age: 22,
};
class PersonImpl {
    getInfo(arg) {
        let name = typeof arg === 'string' ? arg : 'unknown';
        let age = typeof arg === 'number' ? arg : 0;
        return {
            name,
            age,
        };
    }
}
