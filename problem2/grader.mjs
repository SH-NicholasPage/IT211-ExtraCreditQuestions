import { run } from './program.mjs';
import * as fs from 'fs';

export function main()
{
    let data = [];

    try 
    {
        let _data;

        if(fs.existsSync("./problem2/input.txt"))
        {
            _data = fs.readFileSync('./problem2/input.txt', 'utf8').split('\n');
        }
        else//Just in case the problem2 folder was opened
        {
            _data = fs.readFileSync('./input.txt', 'utf8').split('\n');
        }

        for (let i = 0; i < _data.length; i += 4) 
        {
            data.push([_data[i].replace('\r', '').split(' ').map(Number), 
                _data[i + 1].replace('\r', '').split(' ').map(Number), 
                _data[i + 2].replace('\r', '').split(' ').map(Number), 
                _data[i + 3].replace('\r', '').split(' ').map(Number)]);
        }
    } 
    catch (err) 
    {
        console.error("Error: Let the instructor know that the input.txt file is missing or unable to be read.");
        console.error(err);
    }

    let passed = true;

    for(let i = 0; i < data.length; i++)
    {
        let returnedData = run(data[i][0], data[i][1], data[i][2]);

        if(returnedData[0] != data[i][3][0] && returnedData[1] != data[i][3][1])
        {
            console.error(`Test ${i} failed! Expected ${data[i][3]} but got ${returnedData} instead.`);
            passed = false;
        }
    }

    if(passed == true)
    {
        console.log("All tests passed!");
    }
    else
    {
        console.warn("\nNot all tests passed. Read the logs above for more info.");
    }
}

main();