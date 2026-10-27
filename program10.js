// Accept three numbers and print maximum number

function CheckMax(iNo1,iNo2,iNo3)
{
    if(iNo1 > iNo2 && iNo1 > iNo3)
    {
        return iNo1;
    }
    else if(iNo2 > iNo1 && iNo2 > iNo3)
    {
        return iNo2;
    }
    else
    {
        return iNo3;
    }
}

function main()
{
    let iValue1 = 55, iValue2 = 33, iValue3 = 79;
    let iRet = 0;

    iRet = CheckMax(iValue1,iValue2,iValue3);

    console.log("Maximum is : ",iRet);
}

main();