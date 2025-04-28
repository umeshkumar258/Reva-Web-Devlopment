#include <stdio.h>

// Define the structure
typedef struct {
    float length;
    float width;
    float area;
} Rectangle;

// Function prototypes
Rectangle input();
float calculate_area(Rectangle rect);
void compare_areas(Rectangle r1, Rectangle r2);
void output(Rectangle r1, Rectangle r2);

// Function to input rectangle details
Rectangle input() {
    Rectangle rect;
    printf("Enter length: ");
    scanf("%f", &rect.length);
    printf("Enter width: ");
    scanf("%f", &rect.width);
    rect.area = calculate_area(rect); // Calculate and store area
    return rect;
}

// Function to calculate area of a rectangle
float calculate_area(Rectangle rect) {
    return rect.length * rect.width;
}

// Function to compare areas
void compare_areas(Rectangle r1, Rectangle r2) {
    if (r1.area > r2.area) {
        printf("Rectangle 1 has a larger area.\n");
    } else if (r1.area < r2.area) {
        printf("Rectangle 2 has a larger area.\n");
    } else {
        printf("Both rectangles have equal area.\n");
    }
}

// Function to output rectangle details and compare them
void output(Rectangle r1, Rectangle r2) {
    printf("\nDetails of Rectangle 1:\n");
    printf("Length: %.2f\n", r1.length);
    printf("Width: %.2f\n", r1.width);
    printf("Area: %.2f\n", r1.area);

    printf("\nDetails of Rectangle 2:\n");
    printf("Length: %.2f\n", r2.length);
    printf("Width: %.2f\n", r2.width);
    printf("Area: %.2f\n", r2.area);

    // Compare areas
    compare_areas(r1, r2);
}

// Main function
int main() {
    printf("Enter details for Rectangle 1:\n");
    Rectangle rect1 = input();

    printf("\nEnter details for Rectangle 2:\n");
    Rectangle rect2 = input();

    output(rect1, rect2);

    return 0;
}
