#include<iostream>
using namespace std;
#include<string>
   
   int main()
   { 
        string car[5] = {"volvo", "BMW", "ford", "mazda","tesla" " " };
        for (int i = 0; i < 5; i++)
        {
            cout<<car[i]<<"\n";
        }
    


    
     // overiding 4th, 5th and 6th element without overwrition others
        string cars[5] = {"volvo", "BMW", "ford"};
        cars[3] = {"mazda"};
        cars[4] = {"tesla"};   
        cars[5] = {"camry"};
          for (int i = 0; i < 6; i++)
          {
            cout << cars[i] << "\n";
          }           
   }
   