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


// #include <stdio.h>

// int main() {
//     int n, sum = 0; 

//     printf("Enter any digit number: ");
//     scanf("%d", &n);
// while (n != 0) {
//         sum += n % 10;  
//         n /= 10;       
//     }

    
//     printf("The sum of the digits is: %d\n", sum);
    
//     return 0; 
// }

// #include<stdio.h>
// int main(){
//     int marks[3];
//     printf("Physics :");
//     scanf("%d",&marks[0]);

//      printf("Chemistry :");
//     scanf("%d",&marks[1]);

//      printf("Maths :");
//     scanf("%d",&marks[2]);
//     printf("Physics = %d,",marks[0]);
//     printf("Chemistry = %d,",marks[1]);

//     printf("Maths = %d,",marks[2]);

// return 0;

// }


// #include<stdio.h>
// int main(){
//     int a, b, c;
//     printf("Enter three numbers to swap: ");
//     scanf("%d %d %d", &a, &b, &c);

//     // XOR swap logic for all three
//     a = a ^ b;  // Swap a and b
//     b = a ^ b;
//     a = a ^ b;

//     b = b ^ c;  // Swap b and c
//     c = b ^ c;
//     b = b ^ c;

//     printf("After swapping: a = %d, b = %d, c = %d\n", a, b, c);
//     return 0;
// }

// #include<stdio.h>

// void dowork(int a, int b, int *sum, int *prod, int *avg);

// int main() {
//     int a = 5, b = 9;
//     int sum, prod, avg;
    
//     dowork(a, b, &sum, &prod, &avg);
    
//     printf("Sum = %d, prod = %d, avg = %d\n", sum, prod, avg);  
//     return 0;
// }

// void dowork(int a, int b, int *sum, int *prod, int *avg) {
//     *sum = a + b;          // योग
//     *prod = a * b;         // गुणनफल
//     *avg = (a + b) / 2;    // औसत
// }


// #include<stdio.h>

// int main() {
//     int a, b, c, max;

//     printf("Enter the three numbers: ");
//     scanf("%d %d %d", &a, &b, &c);

//    if(a>b){
//     max = a;
//    }else{
//     max = b;
//    };
//    if(c>max){
//     max=c;
//    }

//     printf("The maximum number is: %d\n", max);

//     return 0;
// }


// #include<stdio.h>

// int main() {
//     int elem, rev = 0, remainder;

//     printf("Enter the element: ");
//     scanf("%d", &elem);

//     // रिवर्सिंग प्रक्रिया
//     while (elem != 0) {
//         remainder = elem % 10;
//         rev = rev * 10 + remainder;
//         elem /= 10;
//     }

//     printf("This is the reversed element: %d\n", rev);

//     return 0;
// }

// #include <stdio.h>
// #define n 3    

// int main() {
//     int a[n][n], b[n][n], sum[n][n];
//     int i, j;

//     // पहली मैट्रिस के इनपुट के लिए
//     printf("पहली मैट्रिस के लिए तत्व दर्ज करें:\n");
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             printf("a[%d][%d]: ", i, j);
//             scanf("%d", &a[i][j]);
//         }
//     }

//     // दूसरी मैट्रिस के इनपुट के लिए
//     printf("\nदूसरी मैट्रिस के लिए तत्व दर्ज करें:\n");
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             printf("b[%d][%d]: ", i, j);
//             scanf("%d", &b[i][j]);
//         }
//     }

//     // दोनों मैट्रिस का जोड़
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             sum[i][j] = a[i][j] + b[i][j];
//         }
//     }

//     // जोड़ की गई मैट्रिस को प्रिंट करना
//     printf("\nजोड़ की गई मैट्रिस:\n");
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) { 
//             printf("%d ", sum[i][j]);
//         }
//         printf("\n");
//     }

//     return 0;
// }

// ARRAY PRICE VARIABLE

// #include <stdio.h>
// int main(){
//     float price []= {6300.0,2500.0,9300.0,400.0};
//    printf("Total price 1: %f\n", price[0] + (0.18 * price[0]));
// printf("Total price 2: %f\n", price[1] + (0.18 * price[1]));
// printf("Total price 3: %f\n", price[2] + (0.18 * price[2]));
// printf("Total price 4: %f\n", price[3] + (0.18 * price[3]));

//     return 0;
// }

// #include<stdio.h>
// int main(){
//     int age = 22;
//     int *ptr = &age;
//     printf("ptr = %u\n",ptr);
//     ptr--;
//     printf("Ptr = %u\n",ptr);
//     return 0;
// }

// #include<stdio.h>
// int main(){
//     float price  = 200.00;
//     float *ptr = &price;
//     printf("ptr is %u\n", ptr);  // Prints initial address of 'price'

//     ptr++;
//     printf("ptr after increment is %u\n", ptr);  // Prints new address after increment
    
//     return 0;
// }

#include<stdio.h>
int main(){
    float star = '*';
    char *ptr = &star;
    printf("Ptr is %u",ptr);
    ptr++;
    return 0;
}