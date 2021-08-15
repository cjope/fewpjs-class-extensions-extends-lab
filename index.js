class Polygon {
    constructor(sides){
        this.sides = sides
    }
    get countSides(){
        let count = this.sides.length
        return count
    }
    get perimeter(){
        let par = 0
        for(let i=0;i<this.sides.length;i++){
        par += this.sides[i]
        }
        return par
    }
    
}

class Triangle extends Polygon {
    get isValid(){
        if(this.countSides != 3){
            return false
        }
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if(a>b+c|b>a+c|c>a+b){
            return false
        }
        return true
    }
}

class Square extends Polygon{
    get area(){
        return this.sides[0]*this.sides[0]
    }
    get isValid(){
        if(this.countSides !=4){
            return false
        }
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        if(a === b && a === c && a === d){
            return true
        }
        return false
    }
}