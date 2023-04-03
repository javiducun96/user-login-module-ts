class Calculator {
    add(number1: number, number2: number): number {
        return 0
    }

    multiply(number1: number, number2: number): number {
        return 0
    }
}

describe('Calculator', () => {
    const calculator = new Calculator()

    it('should add two numbers', () => {
        expect(calculator.add(1, 2)).toEqual(3)
    })

    it('should multiply two numbers', () => {
        expect(calculator.multiply(1, 2)).toEqual(2)
    })
})
