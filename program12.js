// Accept three numbers and print the average of numbers

function CheckAvg(iNo1,iNo2,iNo3)
{
    let iSum = 0, fAvg = 0;

    iSum = iNo1 + iNo2 + iNo3;
    fAvg = iSum / 3;

    return fAvg;
}

function main()
{
    let iValue1 = 49, iValue2 = 36, iValue3 = 88;
    let fRet = 0;

    fRet = CheckAvg(iValue1,iValue2,iValue3);

    console.log("Average is : ",fRet);
}

main();