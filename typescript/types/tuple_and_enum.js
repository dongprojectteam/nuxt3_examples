let tupleVariable = ['string', 1]; // 문자열과 숫자를 갖는 튜플
tupleVariable = ['string', 1];
tupleVariable[0] = 'newString';
tupleVariable[1] = 2;
console.log(tupleVariable); // [ 'newString', 2 ]
// 동서남북 열거형
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints[CardinalPoints["East"] = 0] = "East";
    CardinalPoints[CardinalPoints["West"] = 1] = "West";
    CardinalPoints[CardinalPoints["South"] = 2] = "South";
    CardinalPoints[CardinalPoints["North"] = 3] = "North";
})(CardinalPoints || (CardinalPoints = {}));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
var Cows;
(function (Cows) {
    Cows[Cows["Angus"] = 1] = "Angus";
    Cows[Cows["Hereford"] = 4] = "Hereford";
    Cows[Cows["Beefmaster"] = 10] = "Beefmaster";
})(Cows || (Cows = {}));
let cow = Cows.Hereford;
console.log(cow); // 4
console.log(CardinalPoints);
console.log(Colors);
console.log(Cows);
var LastNames;
(function (LastNames) {
    LastNames["Kim"] = "Kim";
    LastNames["Lee"] = "Lee";
})(LastNames || (LastNames = {}));
