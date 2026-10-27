// Accept two numbers and check maximum number

function CheckMax(iNo1, iNo2)
{
    if(iNo1 > iNo2)
    {
        console.log("Maximum is : ",iNo1);
    }
    else
    {
        console.log("Maximum is : ",iNo2);
    }
}

function main()
{
    let iValue1 = 66, iValue2 = 56;

    CheckMax(iValue1,iValue2);
}

main();