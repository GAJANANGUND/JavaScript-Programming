function Addition(iNo1,iNo2)
{
    let iAns = 0;
    iAns = iNo1 + iNo2;
    return iAns;
}

function main()
{
    let iRet = 0;

    iRet = Addition(24,54);

    console.log("Addition is : ",iRet);
}

main();