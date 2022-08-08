#include<iostream>
using namespace std;


  //  write a program in c++ to display the first 10 natural numbers
int main()
{
    int i;
    cout<< "find the first 10 natural numbers\n";
    cout<< "the natural numbers are:\n";
    while(i<=10)
    {
        cout<<i<<" ";
        i++;
    }
    


//  write a c++ program to find the sum of first 10 natural numbers.

    int a = 0;
    int sum = 0;
    cout << "\nadd first 10 natural numbers\n " " ";
     for( a = 0; a <= 10; a++)
     {
         sum+=a;
     }
    cout <<"the  sum of the first 10 natural numbers is "<< sum<<"\n"; 
}