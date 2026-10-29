//  Take a number from user and print the Jay Ganesh in screen

class Iteration
{
    Display(iNo)
    {
        if(iNo < 0)
        {
            iNo = -iNo;
        }

        for(let i = 1; i <= iNo; i++)
        {
            console.log("Jay Ganesh..");
        }
    }
}

function main()
{
    dobj = new Iteration();

    dobj.Display(-3);
}

main();