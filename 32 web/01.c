#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[50];
    float marks;
} Student;

void writeTextFile(Student s[], int n) {
    FILE *fp = fopen("students.txt", "w");
    for (int i = 0; i < n; i++) {
        fprintf(fp, "%d %s %.2f\n", s[i].id, s[i].name, s[i].marks);
    }
    fclose(fp);
}

void readTextFile(Student s[], int n) {
    FILE *fp = fopen("students.txt", "r");
    for (int i = 0; i < n; i++) {
        fscanf(fp, "%d %s %f", &s[i].id, s[i].name, &s[i].marks);
    }
    fclose(fp);
}

void writeBinaryFile(Student s[], int n) {
    FILE *fp = fopen("students.bin", "wb");
    fwrite(s, sizeof(Student), n, fp);
    fclose(fp);
}

void readBinaryFile(Student s[], int n) {
    FILE *fp = fopen("students.bin", "rb");
    fread(s, sizeof(Student), n, fp);
    fclose(fp);
}

void display(Student s[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d %s %.2f\n", s[i].id, s[i].name, s[i].marks);
    }
}

int main() {
    int n;
    printf("Enter number of students: ");
    scanf("%d", &n);

    Student arr1[n], arr2[n], arr3[n];

    for (int i = 0; i < n; i++) {
        printf("Enter ID, Name, Marks: ");
        scanf("%d %s %f", &arr1[i].id, arr1[i].name, &arr1[i].marks);
    }

    writeTextFile(arr1, n);
    readTextFile(arr2, n);
    printf("\nData from text file:\n");
    display(arr2, n);

    writeBinaryFile(arr1, n);
    readBinaryFile(arr3, n);
    printf("\nData from binary file:\n");
    display(arr3, n);

    return 0;
}
