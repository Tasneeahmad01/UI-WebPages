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

// #include<stdio.h>
// int main(){
//     float star = '*';
//     char *ptr = &star;
//     printf("Ptr is %u",ptr);
//     ptr++;
//     return 0;
// }


// #include<stdio.h>

// int main() {
//     int num1, num2;
    
//     // Input from user
//     printf("Enter two Numbers: ");
//     scanf("%d %d", &num1, &num2);

//     // Display the result
//     printf("Sum of %d and %d is: %d\n", num1, num2, num1 + num2);
//     printf("Sum of %d and %d is: %d\n", num1, num2, num1 - num2);
//     printf("Sum of %d and %d is: %d\n", num1, num2, num1 * num2);
    
//     return 0;
// }

// #include <stdio.h>
// #include <conio.h>
// int main()
// {
//     char ch;
//     printf("Enter the Character :");
//     scanf("%c",&ch);
//     printf("This character is %c Ascii value %d\n",ch,ch);
//     return 0;
// }

// #include<stdio.h>
// #include<conio.h>
// int main(){
//     int days;
//     printf("Enter Days Number (1-7):");
//     scanf("%d",&days);
//     switch (days)
//     {
//     case 1:
//     printf("Monday");
//         break;
//          case 2:
//     printf("Tuesday");
//         break;
//          case 3:
//     printf("Wednesday");
//         break;
//          case 4:
//     printf("Thursday");
//         break;
//          case 5:
//     printf("Friday");
//         break;
//          case 6:
//     printf("Saturday");
//         break;
//          case 7:
//     printf("Sunday");
//         break;
//     default:printf("Invalid Days Number");
//         break;
//     }
//     return 0;
// }

// #include<stdio.h>
// #include<conio.h>
// int main(){
//     int year;
//     printf("Enter the Year :");
//     scanf("%d",&year);
//     if((year%4==0 && year %100 !=0) ||(year%400==0)){
//     printf("%d is a leap Year",year);
// }else{
//     printf("%d is not a leap year",year);

// }
// return 0;
// }

// #include<stdio.h>
// #include<conio.h>
// void main(){
//     float principle,rate,time,intrest;
//     printf("Enter principle rate time :");
//     scanf("%f %f %f",&principle,&rate,&time);
//     intrest = (principle*rate*time)/100;
//     printf("Simple intrests :%2f",intrest);
//     getch(); 
// }

// #include <stdio.h>
// int main() {
//     float radius, area;
//     printf("Enter the radius: ");
//     scanf("%f", &radius);
//     area = 3.14159 * radius * radius;
//     printf("Area of the circle: %.2f\n", area);
//     return 0;
// }

// #include<stdio.h>
// int main(){
// char ch;
// printf("Enter the Ascii Value:");
// scanf("%c",&ch);
// printf("This is a Ascii value %d",ch);
// return 0;
// }

// #include<stdio.h>
// int main(){
//     int num;
//     printf("Enter the Table number :");
//     scanf("%d",&num);
//     for(int i=1;i<=10;i++){
//         printf("%d\n x %d\n= %d\n",num,i,num*i);
//     }
//     return 0;
// }
// #include <stdio.h>
// int main() {
//     int a, b, c;
//     printf("Enter three numbers: ");
//     scanf("%d %d %d", &a, &b, &c);
//     if (a >= b && a >= c)
//         printf("%d is the greatest\n", a);
//     else if (b >= a && b >= c)
//         printf("%d is the greatest\n", b);
//     else
//         printf("%d is the greatest\n", c);
//     return 0;
// }

// #include<stdio.h>
// #include<conio.h>
// void main(){
//     int marks;
//     printf("Enter the marks:");
//     scanf("%d",&marks);
//     if(marks>=80)
//     printf("First Division\n");
//     else if(marks>=60)
//     printf("Second Division\n");
//     else if(marks>=40)
//     printf("Third Division\n");
//     else
//     printf("Failed\n");
//     getch();
// }

// #include<stdio.h>

// int main(){
//     int month;
//     printf("Enter the month number: ");
//     scanf("%d", &month);
    
//     switch (month) {
//         case 1:
//             printf("January");
//             break;
//         case 2:
//             printf("February");
//             break;
//         case 3:
//             printf("March");
//             break;
//         case 4:
//             printf("April");
//             break;
//         case 5:
//             printf("May");
//             break;
//         case 6:
//             printf("June");
//             break;
//         case 7:
//             printf("July");
//             break;
//         case 8:
//             printf("August");
//             break;
//         case 9:
//             printf("September");
//             break;
//         case 10:
//             printf("October");
//             break;
//         case 11:
//             printf("November");
//             break;
//         case 12:
//             printf("December");
//             break;
//         default:
//             printf("Invalid month number! Please enter a number between 1 and 12.");
//             break;
//     }

//     return 0;
// }

// #include<stdio.h>
// int main() {
//     int start, end;
//     printf("Enter start and end: ");
//     scanf("%d %d", &start, &end);
//     for(int i = start; i <= end; i++) {
//         printf("%d ", i);
//     }
//     return 0;
// }

// #include<stdio.h>
// int main() {
//     int salary = 75000;
//     if (salary >= 50000) {
//         printf("Grade A\n");
//     } else if (salary >= 30000) {
//         printf("Grade B\n");
//     } else {
//         printf("Grade C\n");
//     }
//     return 0;
// }
// #include<stdio.h>
// #include<stdio.h>

// int main() {
//     int i, j;
//     for (i = 1; i <= 2; i++) {
//         for (j = 1; j <= 3; j++) {
//             // Inside the inner loop
//             printf("i = %d, j = %d\n", i, j);
//         }
//     }
//     return 0;
// }

// #include<conio.h>
// int reverse(int arr[],int n);
// int main(){
//     int arr[]= {1,2,3,4,6,7};
//     return 0;
// }
// int reverse(int arr[],int n){
// for(int i=0;i<n/2;i++){
//     int firstVal=arr[i];
//     int secondVal = arr[n-i-i];
//     arr[i]=secondVal;
//     arr[n-i-1] = firstVal;
// }
// }

// REVERSE NUMBER
// #include <stdio.h>
// #include<conio.h>
// void main(){
//  int arr[]={1,2,3,4,5,6,7};
//  int n= 7;
//  reverse(arr,n);
//  for(int i=0;i<n;i++){
//     printf("%d ",arr[i]);
//  }
//  getch();
// }
// void reverse(int arr[],int n){
//    for (int i = 0; i < n/2; i++){
//    int temp = arr[i];
//    arr[i]=arr[n-i-1];
//    arr[n-i-1]= temp; 
//    }
    
// }

// FIBONACHI VALUE
// #include <stdio.h>
// #include <conio.h>

// void main() {
//     int n;
//     printf("Enter n (n>2) :");
//     scanf("%d", &n); 
//     int fib[n];
//     fib[0] = 0;
//     fib[1] = 1;
// printf("%d %d ", fib[0], fib[1]);

//     for (int i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];  
//         printf("%d ", fib[i]);
//     }

//     printf("\n");

//      getch();
// }

// 2D TABLE
// #include <stdio.h>

// void storeTable(int arr[][10], int n, int m, int number);

// int main() {
//     int tables[3][10];  // Updated to store 3 tables
//     storeTable(tables, 0, 10, 2);  // Table for 2
//     storeTable(tables, 1, 10, 3);  // Table for 3
//     storeTable(tables, 2, 10, 4);  // Table for 4
    
//     // Print the stored tables
//     for (int i = 0; i < 3; i++) {   
//         for (int j = 0; j < 10; j++) {
//             printf("%d ", tables[i][j]);
//         }
//         printf("\n");
//     }

//     return 0;  
// }

// void storeTable(int arr[][10], int n, int m, int number) {
//     for (int j = 0; j < m; j++) {
//         arr[n][j] = number * (j + 1);  
//     }
// }

// #include <stdio.h>
// #include <string.h>
// int main() {
//     char firstStr[100] = "Hello "; // Define a modifiable array with enough space
//     char secString[] = "World";

//     // Concatenate secName to firstName
//     strcat(firstStr, secString);

//     // Display the concatenated result
//     puts(firstStr);

//     // Prompt the user for their name
//     char name[50];
//     printf("Enter your name: ");
//     scanf("%s", name);
//     printf("Hello, %s! Hope you had a great dinner!\n", name);

//     return 0;
// }

// #include<stdio.h>
// #include<conio.h>
// void main(){
//     int ch;
//     char firsStr[] = "Apple";
//     char secStr []= "Banana";
//     printf("%d",strcmp(secStr,firsStr));
// }

// #include <stdio.h>
// #include <string.h>

// void salting(char password[]);

// int main() {
//     char password[100];
//     printf("Enter your password: ");
//     scanf("%s", password);
//     salting(password);
//     return 0;
// }

// void salting(char password[]) {
//     char salt[] = "123";
//     char newPassword[200];
//     strcpy(newPassword, password);
//     strcat(newPassword, salt);
//     printf("Salted password: %s\n", newPassword);
// }
// CONVERT ARRY ME SE SLICE KARNA 
// #include <stdio.h>
// void slice(char str[], int n, int m);
// int main() {
//     char str[100];
//     printf("Enter the string:");
//     scanf("%s", str);
//     printf("Enter the start and end indices for slicing:");
//     int start, end;
//     scanf("%d %d", &start, &end);
//     slice(str, start, end);
//     return 0;
// }

// void slice(char str[], int n, int m) {
//     char newStr[100];
//     int j = 0;

//     for (int i = n; i <= m; i++, j++) {
//         newStr[j] = str[i]; 
//     } 
//     newStr[j] = '\0'; 
//     puts(newStr);  
// }

// STRING PART SLICE IN SORT
// #include <stdio.h>
// void findVowels(char str[]);  
// int main() {
//     char str[100];
//     printf("Enter a string: ");
//     fgets(str, sizeof(str), stdin);
//     findVowels(str);
//     return 0;
// }

// void findVowels(char str[]) {
//     int count = 0;

//     printf("Vowels found: ");
//     for(int i = 0; str[i] != '\0'; i++) {
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
//            str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
//             printf("%c ", str[i]);
//             count++;
//         }
//     }
 
//     printf("\nTotal number of vowels: %d\n", count);
// }


// #include <stdio.h>
// #include <conio.h>

// int checkChar(char str[], char ch);

// void main() {
//     char str[100], ch;
    
//     printf("Enter a string: ");
//     fgets(str, sizeof(str), stdin);

//     printf("Enter a character to check: ");
//     ch = getchar();

//     checkChar(str, ch);
// }

// int checkChar(char str[], char ch) {
//     for (int i = 0; str[i] != '\0'; i++) {
//         if (str[i] == ch) {
//             printf("%c Character is present\n", ch);  // Corrected this line
//             return;
//         }
//     }
//     printf("%c Character is not present\n", ch);  // Corrected this line
// }


// #include<stdio.h>
// #include<conio.h>
// void main(){
//     int n , square;
//     printf("Enter the number:");
//     scanf("%d",&n);
//     square = n * n;
     
//       printf("The square of %d is = %d\n", n, square);
//  getch();

// #include <stdio.h>

// void checkChar(char str[], char ch);

// int main() {
//   char str[] = "Apna college";
//   char ch = 'a'; // Define the character to search for
//   checkChar(str, ch);
//   return 0;
// }

// void checkChar(char str[], char ch) {
//   int found = 0;
//   for (int i = 0; str[i] != '\0'; i++) { // Corrected loop condition
//     if (str[i] == ch) {
//       printf("Character is present\n");
//       found = 1;
//       break; // Exit the loop once character is found
//     }
//   }
//   if (!found) {
//     printf("Character is not present\n");
//   }
// }

// #include <stdio.h>
// #include <conio.h> // Optional, mostly used for getch()

// int main() {
//     int fibNum, a = 0, b = 1, nextTerm;
    
//     printf("Enter the number of terms for Fibonacci sequence: ");
//     scanf("%d", &fibNum);
    
//     printf("Fibonacci Sequence: ");
//     for (int i = 1; i <= fibNum; i++) {
//         printf("%d ", a);
//         nextTerm = a + b;
//         a = b;
//         b = nextTerm;
//     }
    
//     getch(); // Waits for user input before closing the console
//     return 0;
// }
// #include<stdio.h>
// #include<string.h>
// #include<conio.h>
// struct student {
//     int roll;
//     float cgpa;
//     char name[100];
// };

// int main() {
//     struct student s1;
    
//     s1.roll = 1230;
//     s1.cgpa = 4.5;
//     strcpy(s1.name, "Rajat");
//     printf("Student Name: %s\n", s1.name);
//     printf("Student Roll: %d\n", s1.roll);
//     printf("Student CGPA: %.2f\n", s1.cgpa);
   
//    struct student s2;
//    s2.roll = 121;
//    s2.cgpa = 6.7;
//    strcpy(s2.name,"Michel");
//    printf("Student Name : %s\n",s2.name);
//    printf("Student Roll :%d\n",s2.roll);
//    printf("Student CGPA :%2f\n",s2.cgpa);
    
//     struct student s3;
//    s3.roll = 221;
//    s3.cgpa = 6.9;
//    strcpy(s3.name,"Michel jonson");
//    printf("Student Name : %s\n",s3.name);
//    printf("Student Roll :%d\n",s3.roll);
//    printf("Student CGPA :%2f\n",s3.cgpa);

//     return 0;
// }

// #include<stdio.h>

// void main() {
//     int n, a = 0, b = 1, next, i;
//     printf("Enter the number of terms: ");
//     scanf("%d", &n);

//     printf("Fibonacci Series: ");
//     for(i = 0; i < n; i++) {
//         if(i <= 1)
//             next = i;
//         else {
//             next = a + b;
//             a = b;
//             b = next;
//         }
//         printf("%d ", next);
//     }
// }

// #include <stdio.h>
// #include <conio.h>

// void main() {
//     int num, i, isPrime = 1;

//     printf("Enter the number: ");
//     scanf("%d", &num); 

//     if (num <= 1) {
//         printf("%d is not a prime number.\n", num);
//     } else {
//         for (i = 2; i * i <= num; i++) {
//             if (num % i == 0) {
//                 isPrime = 0;
//                 break;
//             }
//         }
//         printf("%d is %sprime.\n", num, isPrime ? "" : "not ");
//     }

//     getch();
// }

//#include <stdio.h>

// int main() {
//     int i, j;
//     int A[2][2] = {{1, 3}, {2, 4}};
//     int B[2][2] = {{4, 5}, {5, 6}};
//     int C[2][2]; // Matrix to store the sum

//     printf("Resulting Matrix after Addition:\n");

//     // Adding matrices A and B
//     for (i = 0; i < 2; i++) {
//         for (j = 0; j < 2; j++) {
//             C[i][j] = A[i][j] + B[i][j]; // Sum of corresponding elements
//         }
//     }

//     // Printing the result matrix
//     for (i = 0; i < 2; i++) {
//         for (j = 0; j < 2; j++) {
//             printf("%d ", C[i][j]);
//         }
//         printf("\n"); // New line after each row
//     }

//     return 0;
// }
//
#include<stdio.h>
#include<conio.h>
int main(){
    int a=5,b=9,sum;
    sum=a+b;
    printf("%d",sum);
    return 0;
}