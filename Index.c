// // #include<stdio.h>
// // float convertTemp(float celcius);
// // int main(){
// //     float far = convertTemp(32);
// //     printf("Finally convertion farenheit :%f",far);
// //     return 0;
// // }
// // float convertTemp(float celcius){
// // float far = celcius *(9.0/5.0)+32;
// // return far;
// // }

// // #include<stdio.h>

// // int calcPercentage(int science, int math, int sanskrit);
// // int main() {
// //     int science = 98;
// //     int math = 95;
// //     int sanskrit = 99;
    
// //     int percentage = calcPercentage(science, math, sanskrit);
    
// //     printf("Final Percentage: %d%%\n", percentage);

// //     return 0;
// // }

// // int calcPercentage(int science, int math, int sanskrit) {
// //     int totalMarks = science + math + sanskrit;
// //     int percentage = (totalMarks * 100) / 300;  
// //     return percentage;
// // }


// #include <stdio.h>

// int sumofDigit(int num); 

// int main() {
//     int num; 
//     printf("Enter the number: ");
//     scanf("%d", &num); 

//     int sum = sumofDigit(num); 
//     printf("Sum of digits: %d\n", sum); 

//     return 0; 
// }

// int sumofDigit(int num) { 
//     int sum = 0; // Initialize sum to 0
//     while (num != 0) { 
//         sum += num % 10; 
//         num /= 10; 
//     }
//     return sum;
// }


#include <stdio.h>

int main() {
    int n, sum = 0; 

    // Prompt the user for input
    printf("Enter any digit number: ");
    scanf("%d", &n); // Read an integer from user input

    // Calculate the sum of the digits
    while (n != 0) {
        sum += n % 10; // Add the last digit to sum
        n /= 10;       // Remove the last digit
    }

    // Print the result
    printf("The sum of the digits is: %d\n", sum);
    
    return 0; // Return 0 to indicate successful execution
}
