// Accept two numbers and check maximum number

function CheckMax(iNo1, iNo2)
{
    if(iNo1 > iNo2)
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
    let iValue1 = 22, iValue2 = 69;
    let iRet = 0;

    iRet = CheckMax(iValue1,iValue2);

    console.log("Maximum is : ",iRet);
}

main();