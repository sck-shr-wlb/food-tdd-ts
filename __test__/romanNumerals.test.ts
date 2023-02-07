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
});

