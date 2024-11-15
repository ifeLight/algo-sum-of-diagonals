## Algorithm: Sum of Diagonals Solution with JavaScript (Basic)

Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix array is shown below:

```text
1 2 3
4 5 6
9 8 9
```

The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is .|15-17| = 2.

### Function description

The function should be called `diagonalDifference` and should takes the following parameter:
int arr[n][m]: an array of integers

### Returns

int: the absolute diagonal difference

### Input Format

The first line contains a single integer,n, the number of rows and columns in the square matrix .
Each of the next n lines describes a row,array[i] , and consists of n space-separated integers array[i][j].

### Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Test Solution

```sh
node main.js
```
