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
});

