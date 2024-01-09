// Your code here
class Triangle {
    constructor(side1, side2,side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter(){
        let perimeter = this.side1 + this.side2 + this.side3;
        console.log(perimeter);
        return perimeter;
    }

    hasValidSideLengths() {
        let isValid;
        if (this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 
            || this.side2 + this.side3 <= this.side1) {
                isValid = false;
            }
        else
            isValid = true;

            console.log(isValid);
            return isValid;
    }

    validate() {

        let triangle = this;

        let isValidVal = triangle.hasValidSideLengths();
        
        triangle.isValid = isValidVal;

        

    }

    static getValidTriangles(triangles){

        let isValidArray = [];

        for(let i=0;i<triangles.length; i++){
            let triangle = triangles[i];
            let isVaild = triangle.hasValidSideLengths();
            isValidArray.push(isVaild);
        }

        console.log(isValidArray);

        return isValidArray;

    }
}

class Scalene extends Triangle{
    constructor(side1,side2,side3){
        super(side1, side2,side3);
        let triangle = this;

        let isVaild = this.hasValidSideLengths();

        console.log("is valid triangle: " +isVaild);
        
        triangle.isValidTriangle = isVaild;
    }

    isScalene(){
        let isScalene = (this.side1 != this.side2) &&(this.side2!= this.side3) 
        && (this.side1 != this.side3);

        console.log(isScalene);

        return isScalene;
    }

    validate() {
        let triangle = this;

        let isValidVal = triangle.isScalene();
        
        triangle.isValidScalene = isValidVal;
    }


}

class Isosceles extends Triangle{

    constructor(side1,side2,side3){
        super(side1, side2,side3);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles(){
        let isIsosceles = (this.side1 == this.side2) ||(this.side2== this.side3) 
        || (this.side1 == this.side3);

        console.log(isIsosceles);

        return isIsosceles;
    }

    validate() {
        let triangle = this;

        let isValidVal = triangle.isIsosceles();
        
        triangle.isValidIsosceles = isValidVal;
    }

} 

module.exports = {
    Triangle,
    Scalene,
    Isosceles
}