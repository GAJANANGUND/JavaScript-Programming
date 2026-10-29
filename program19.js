//  Take a number from user and print the Jay Ganesh in screen

class Iteration
{
    Display(iNo)
    {
        if(iNo < 0)
        {
            iNo = -iNo;
        }

        let i = 1;

        while(i <= iNo)
        {
            console.log("Jay Ganesh..");
            i++;
        }
    }
}

function main()
{
    dobj = new Iteration();

    dobj.Display(-3);
}

main();