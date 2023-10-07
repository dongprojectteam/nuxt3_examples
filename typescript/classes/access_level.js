class ParentClass {
    constructor() {
        this.publicMemberWithoutModifier = 'parent';
        this.publicMember = 'parent';
        this.protectedMember = 'parent';
        this.privateMember = 'parent';
    }
}
class ChildClass extends ParentClass {
    constructor() {
        super();
        this.publicMemberWithoutModifier = 'child';
        this.publicMember = 'child';
        this.protectedMember = 'child';
        this.privateMember = 'child'; // 에러
    }
}
let childInstance = new ChildClass();
console.log(childInstance.publicMemberWithoutModifier);
console.log(childInstance.publicMember);
console.log(childInstance.protectedMember); // 에러
console.log(childInstance.privateMember); // 에러
