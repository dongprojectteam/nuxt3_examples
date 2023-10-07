var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UserName_firstName, _UserName_lastName;
class UserName {
    constructor() {
        _UserName_firstName.set(this, void 0);
        _UserName_lastName.set(this, void 0);
    }
    get name() {
        return `${__classPrivateFieldGet(this, _UserName_firstName, "f")} ${__classPrivateFieldGet(this, _UserName_lastName, "f")}`;
    }
    set name(fullName) {
        if (fullName.length == 0)
            throw new Error('Cannot use empty name');
        if (fullName.split(' ').length != 2)
            throw new Error('Need space between last and first name');
        __classPrivateFieldSet(this, _UserName_firstName, fullName.split(' ')[0], "f");
        __classPrivateFieldSet(this, _UserName_lastName, fullName.split(' ')[1], "f");
    }
}
_UserName_firstName = new WeakMap(), _UserName_lastName = new WeakMap();
let doptName = new UserName();
doptName.name = 'DOPT KIM'; // setter 사용
console.log(doptName.name); // getter 사용
