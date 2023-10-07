var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ParentClass_privateMember, _ChildClass_instances, _ChildClass_privateMethod;
class ParentClass {
    constructor() {
        _ParentClass_privateMember.set(this, void 0);
        this.publicMember = 'parent';
        __classPrivateFieldSet(this, _ParentClass_privateMember, 'parent', "f");
    }
}
_ParentClass_privateMember = new WeakMap();
class ChildClass extends ParentClass {
    constructor() {
        super();
        _ChildClass_instances.add(this);
        this.publicMember = 'child';
        this. = 'child';
    }
}
_ChildClass_instances = new WeakSet(), _ChildClass_privateMethod = function _ChildClass_privateMethod() {
    console.log('private method');
};
let childInstance = new ChildClass();
console.log(childInstance.publicMember);
console.log(childInstance.); // 에러
childInstance.(); // 에러
