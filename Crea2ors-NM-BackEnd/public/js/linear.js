class LinearRegression {
    // ... (other methods and constructor)
    constructor() {
        this.coefficients = { b0: 0, b1: 0 };
    }

    mean(arr) {
        return arr.reduce((sum, value) => sum + value, 0) / arr.length;
    }

    variance(arr, meanValue) {
        return arr.reduce((sum, value) => sum + Math.pow(value - meanValue, 2), 0) / arr.length;
    }

    covariance(xArr, xMean, yArr, yMean) {
        let covar = 0;
        for (let i = 0; i < xArr.length; i++) {
            covar += (xArr[i] - xMean) * (yArr[i] - yMean);
        }
        return covar / xArr.length;
    }
    fit(xMatrix, yArr) {
        // Calculate means for each feature column in the matrix
        const xMeans = xMatrix[0].map((_, colIndex) =>
            this.mean(xMatrix.map(row => row[colIndex]))
        );

        console.log(xMeans)

        // Calculate the mean of y
        const yMean = this.mean(yArr);
        console.log(yMean)

        // Calculate the coefficients
        const b1Values = xMatrix[0].map((_, colIndex) => 
            this.covariance(
                xMatrix.map(row => row[colIndex]),
                xMeans[colIndex],
                yArr,
                yMean
            ) / this.variance(xMatrix.map(row => row[colIndex]), xMeans[colIndex])
        );

        const b0 = yMean - b1Values.reduce((sum, b1, colIndex) => sum + b1 * xMeans[colIndex], 0);

        this.coefficients.b0 = b0;
        this.coefficients.b1Values = b1Values;
    }

    fitNonNegative(xMatrix, yArr) {
        this.fit(xMatrix, yArr);

        // Enforce non-negative coefficients for b0 and all b1 values
        this.coefficients.b0 = Math.max(0, this.coefficients.b0);
        this.coefficients.b1Values = this.coefficients.b1Values.map(b1 => Math.max(0, b1));
    }

    predict(xValue) {
        return this.coefficients.b0 + this.coefficients.b1 * xValue;
    }

    getCoefficients() {
        return this.coefficients;
    }

    

    // ... (other methods)
}

// Sample data
const x = [
    [1, 3, 3, 4, 2],
    [3, 2, 5, 2, 5],
    [6, 3, 7, 4, 5],
    [8, 5, 4, 2, 3],
    [3, 4, 6, 7, 6],
    [5, 4, 4, 4, 9]
];
const y = [2, 4, 5, 4, 5];

// Create and use LinearRegression class
const regression = new LinearRegression();
regression.fit(x, y);

const xValues = [7, 3, 5, 4, 5]; // New input values for prediction
const predictedY = regression.predict(xValues);
console.log("Coefficients:", regression.getCoefficients());
console.log(`Predicted y for x=${xValues}: ${predictedY}`);