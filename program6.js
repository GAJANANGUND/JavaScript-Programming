function CheckEven(iNo)
{
    if((iNo % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 33;
    let bRet = false;

    bRet = CheckEven(iValue);

    if(bRet == true)
    {
        console.log("It even number..");
    }
    else
    {
        console.log("It is odd number..");
    }
}

main();