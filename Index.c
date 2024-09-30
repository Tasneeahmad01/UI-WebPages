// #include<stdio.h>
// float convertTemp(float celcius);
// int main(){
//     float far = convertTemp(32);
//     printf("Finally convertion farenheit :%f",far);
//     return 0;
// }
// float convertTemp(float celcius){
// float far = celcius *(9.0/5.0)+32;
// return far;
// }

#include<stdio.h>

// Function to calculate the percentage
int calcPercentage(int science, int math, int sanskrit);
int main() {
    int science = 98;
    int math = 95;
    int sanskrit = 99;
    
    // Calculate percentage using the function
    int percentage = calcPercentage(science, math, sanskrit);
    
    // Print the percentage
    printf("Final Percentage: %d%%\n", percentage);

    return 0;
}

int calcPercentage(int science, int math, int sanskrit) {
    int totalMarks = science + math + sanskrit;
    int percentage = (totalMarks * 100) / 300;  // Assuming the maximum possible marks is 300
    return percentage;
}
