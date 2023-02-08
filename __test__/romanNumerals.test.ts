import { convert } from '../src/romanNumerals';

describe("Roman Numerals", () => {
    it("should return I when input 1", () => {
        // Arrange
        const expectedValue = "I";
        
        // Act
        const output = convert(1);

        // Assert
        expect(output).toBe(expectedValue);
    });

    it("should return II when input 2", () => {
        // Arrange
        const expectedValue = "II";
        
        // Act
        const output = convert(2);

        // Assert
        expect(output).toBe(expectedValue);
    });

    it("should return III when input 3", () => {
        // Arrange
        const expectedValue = "III";
        
        // Act
        const output = convert(3);

        // Assert
        expect(output).toBe(expectedValue);
    });

    it("should return IV when input 4", () => {
        // Arrange
        const expectedValue = "IV";
        
        // Act
        const output = convert(4);

        // Assert
        expect(output).toBe(expectedValue);
    });

});

