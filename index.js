
// const name="Drashti"
// console.log("hello "+name)

//1
// console.log("1st Program")
// const n=5
// if(n%2)
// {
//     console.log("Odd number")
// }
// else
// {
//     console.log("Even number")
// }

//2
// const a=10
// const b=15
// if(a>b)
// {
//     console.log("a is max")
// }
// else
// {
//     console.log("b is max")
// }

//3
// const n=2024
// if(n%4)
// {
//     console.log("Non leap year")
// }
// else
// {
//     console.log("Leap year")
// }

//4
// const n=5
// let sum=0
// for(i=1;i<=n;i++)
// {
//     sum+=i
// }
// console.log(sum)

//5
// const n=5
// let fact=1
// for(i=1;i<=n;i++)
// {
//     fact*=i
// }
// console.log(fact)

//6
// const n=5
// for(i=1;i<=10;i++)
// {
//     console.log(`${n} x ${i} = ${n*i}`)
// }

//7
// const num=5467
// let result=num.toString().split('').reverse().join('')
// console.log(result)

//8
// const num=121
// let result=num.toString().split('').reverse().join('')
// if(num==result)
// {
//     console.log("number is palindrone")
// }
// else
// {
//     console.log("number is not palindrone")
// }

//9
// const num=11
// let prime=1
// for(i=2;i<=num/2;i++)
// {
//     if(num%2==0)
//     prime=false
//     break;
// }
// if(prime&&num)
// {
//     console.log("number is prime")
// }
// else
// {
//     console.log("number is not prime")
// }

//10
// function digit(dnum)
// {
//     return String(dnum).length
// }
// let dnum=12344
// console.log(digit(dnum))

//11
// function sumdigit(num5)
// {
//     const numstr=num5.toString()
//     let sum=0;
//     for(const char of numstr)
//     {
//         if(!isNaN(char))
//         {
//             sum+=Number(char)
//         }
//     }
//     return sum
// }
// console.log(sumdigit(123))

//12
// let n=153
// let num=n.toString()
// let count=num.length
// let sum=0;
// for(let digit of num)
// {
//     sum+=Math.pow(Number(digit),count)
// }
// if(sum==n)
// {
//     console.log("number is armstrong")
// }
// else
// {
//     console.log("number is not armstrong")
// }

//13
// let number=5
// let a=0
// let b=2
// let c=0
// for(let i=0;i<number;i++)
// {
//     console.log(a)
//     c=a+b
//     a=b
//     b=c
// }

//14
// let char=prompt("enter value:")
// let char="a"
// if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U")
// {
//     console.log("it's a vowel.")
// }
// else
// {
//     console.log("it's a consonant.")
// }

//15
// let a=10
// let b=5

// let sum=a+b
// console.log("sum:",sum)

// let difference=a-b
// console.log("difference:",difference)

// let product=a*b
// console.log("product:",product)

// let quotient=a/b
// console.log(" quotient:",quotient)

//16
// function gcd(p,q)
// {
//     if(q==0)
//     {
//        return p;
//     }
//     return gcd(q,p%q)
// }
// const a1=20
// const b1=28
// console.log(`gcd of ${a1} and ${b1} is: ${gcd(a1,b1)}`)

// //17
// let a=30
// let b=0
// for(i=1;i<a;i++)
// {
//     if(a%i==0)
//     {
//         b+=i
//     }
// }
// if(b=a)
// {
//     console.log("number is perfect")
// }
// else
// {
//     console.log("number is not perfect")
// }

//18
// var a=10
// for(i=1;i<=a;i++)
// {
//     if(a%i==0)
//     {
//         console.log(i)
//     }
// }

//19
// const a=-10
// if(a>0)
// {
//     console.log("number is positive")
// }
// else if(a==0)
// {
//     console.log("number is zero")
// }
// else
// {
//     console.log("number is nagative")
// }

//20
// var a=2
// var b=3
// var ans=1
// for(i=0;i<b;i++)
// {
//     ans*=a
// }
// console.log("power:",ans)






