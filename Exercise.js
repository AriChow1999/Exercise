class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    add(vector) {
        if (!(vector instanceof Vector)) {
            throw new Error("Addition requires another Vector object.");
        }
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        if (!(vector instanceof Vector)) {
            throw new Error("Addition requires another Vector object.");
        }
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar) {
        if (typeof scalar !== 'number') {
            throw new Error("Scalar must be a number.");
        }
        return new Vector(this.x * scalar, this.y * scalar);
    }

    equals(vector) {
        if (!(vector instanceof Vector)) throw new Error("Comparison should be bewteen vectors");
        return this.x === vector.x && this.y === vector.y;
    }

    lessThan(vector) {
        if (!(vector instanceof Vector)) throw new Error("Comparison should be bewteen vectors");
        return this.magnitude() < vector.magnitude();
    }

    greaterThan(vector) {
        if (!(vector instanceof Vector)) throw new Error("Comparison should be bewteen vectors");
        return this.magnitude() > vector.magnitude();
    }

    lessThanOrEqual(vector) {
        if (!(vector instanceof Vector)) throw new Error("Comparison should be bewteen vectors");
        return this.magnitude() <= vector.magnitude();
    }

    greaterThanOrEqual(vector) {
        if (!(vector instanceof Vector)) throw new Error("Comparison should be bewteen vectors");
        return this.magnitude() >= vector.magnitude();
    }

}

v1 = new Vector(1, 2)
v2 = new Vector(3, 4)
v3 = new Vector(1, 2)


console.log(v1.add(v2))
console.log(v2.subtract(v1))
console.log(v1.multiply(2))
console.log(v1.equals(v3))
console.log(v1.lessThan(v2))
console.log(v2.greaterThan(v1))
console.log(v1.lessThanOrEqual(v3))
console.log(v2.greaterThanOrEqual(v1))
console.log(v1.magnitude())            