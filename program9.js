// Accept two numbers and print minimum number

function CheckMin(iNo1, iNo2)
{
    if(iNo1 < iNo2)
    {
        return iNo1;
    }
    else
    {
        return iNo2;
    }
}

function main()
{
    let iValue1 = 36, iValue2 = 89;
    let iRet = 0;

    iRet = CheckMin(iValue1,iValue2);

    console.log("Minimum is : ",iRet);
}

main();