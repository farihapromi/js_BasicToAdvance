
#include<iostream>
using namespace std;

int main()
{
    int n,i,k,index=0;

    cin>>n>>k;
    int arr[100];
    for(i=1;i<=n;i++){
         if(i%2!=0){
            arr[index++]=i;
         }
    }
    for(i=1;i<=n;i++){
         if(i%2==0){
            arr[index++]=i;
         }
    }
   if(k>=1 &&k<=n)
        {
            cout<<arr[k-1]<<endl;
        }

    return 0;
}
