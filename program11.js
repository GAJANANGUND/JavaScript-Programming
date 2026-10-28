// Accept two numbers and print the average of numbers

function CheckAvg(iNo1,iNo2)
{
    let iSum = 0, fAvg = 0;

    iSum = iNo1 + iNo2;
    fAvg = iSum / 2;

    return fAvg;

}

function main()
{
    let iValue1 = 36, iValue2 = 29;
    let fRet = 0;

    fRet = CheckAvg(iValue1,iValue2);

    console.log("Average is : ",fRet);
}

main();