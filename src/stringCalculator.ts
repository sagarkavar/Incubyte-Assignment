export class StringCalculator{
        add(numbers: string) {
            if (!numbers) return 0;
    
            // Check for custom delimiter
            let delimiter = /,|\n/;
            if (numbers.startsWith("//")) {
                const parts = numbers.split("\n");
                delimiter = new RegExp(parts[0].slice(2));
                numbers = parts[1];
            }
    
            // Split numbers and parse them
            const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    
            // Handle negative numbers
            const negatives = numArray.filter(num => num < 0);
            if (negatives.length > 0) {
                throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
            }
    
            // Sum all numbers
            return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
        }

}