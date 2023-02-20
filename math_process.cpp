#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "ru");
    double a11, a12, a13, a21, a22, a23, b1, b2, b3, determinant, result_x, result_y, x, y;
     /* Поработать над типами данных переменных (с памятью)
        Поразмыслить над нэймингом */ 
    int choose;
    cout << "Выберите количество уравнений в методе Краммера:";
    cin >> choose;
    switch (choose)
    {
    case 2:
        cout << "Введите два уравнение"<< endl;         
        cin >> a11; 
        cin >> a21;                                                                     
        cin >> a12;
        cin >> a22;
        cin >> b1;
        cin >> b2;
        cout << a11 << "x1+" << a12 << "x2 = " << b1 << endl;
        cout << a21 << "x1+" << a22 << "x2 = " << b2 << endl;
        cout << "Матрица определителя " << endl;
        cout << a11 << " " << a12 << endl;
        cout << a21 << " " << a22 << endl;
        determinant = (a11 * a22) - (a12 * a21);
        cout << "Определитель = " << determinant << endl;
        cout << "Матрица для вычисления определителя x: " << endl;
        cout << b1 << " " << a12 << endl;
        cout << b2 << " " << a22 << endl;
        result_x = (b1 * a22) - (a12 * b2);
        cout << "Определитель х = " << result_x << endl;
        cout << "Матрица для вычисления определителя y: " << endl;
        cout << a11 << " " << b1 << endl;
        cout << a21 << " " << b2 << endl;
        result_y = (a11 * b2) - (b1 * a21);
        cout << "Определитель y = " << result_y << endl;
        x = result_x / determinant;
        cout << "x = " << x << endl;
        y = result_y / determinant;
        cout << "y = " << y << endl;
        break;
    case 3:
        cout << "Введите три уравнение" << endl;
        cin >> a11;
        cin >> a21;
        cin >> a12;
        cin >> a13;
        cin >> a22;
        cin >> a23;
        cin >> b1;
        cin >> b2;
        cin >> b3;
        cout << a11 << "x1 + " << a12 << "x2 = " << b1 << endl;
        cout << a21 << "x1 + " << a22 << "x2 = " << b2 << endl;
        cout << a11 << "x1 + " << a12 << "x2 = " << b3 << endl;
        cout << "Матрица определителя " << endl;
        cout << a11 << " " << a12 << endl;
        cout << a21 << " " << a22 << endl;
        determinant = (a11 * a22) - (a12 * a21);
        cout << "Определитель = " << determinant << endl;
        cout << "Матрица для вычисления определителя x: " << endl;
        cout << b1 << " " << a12 << endl;
        cout << b2 << " " << a22 << endl;
        result_x = (b1 * a22) - (a12 * b2);
        cout << "Определитель х = " << result_x << endl;
        cout << "Матрица для вычисления определителя y: " << endl;
        cout << a11 << " " << b1 << endl;
        cout << a21 << " " << b2 << endl;
        result_y = (a11 * b2) - (b1 * a21);
        cout << "Определитель y = " << result_y << endl;
        x = result_x / determinant;
        cout << "x = " << x << endl;
        y = result_y / determinant;
        cout << "y = " << y << endl;
        break;
    default:
        cout << "Неправильные значения";
    }
}