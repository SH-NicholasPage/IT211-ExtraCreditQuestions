import { run } from './program.mjs';
import * as fs from 'fs';

export function main()
{
    let data = [];

    try 
    {
        let _data;

        if(fs.existsSync("./problem1/input.txt"))
        {
            _data = fs.readFileSync('./problem1/input.txt', 'utf8').split('\n');
        }
        else//Just in case the problem1 folder was opened
        {
            _data = fs.readFileSync('./input.txt', 'utf8').split('\n');
        }

        for (let i = 0; i < _data.length; i += 2) 
        {
            data.push([_data[i].replace('\r', ''), _data[i + 1] == 0 ? true : false]);
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
        if(run(data[i][0]) != data[i][1])
        {
            console.error(`Test ${i} failed! Expected ${data[i][1]} but got ${run(data[i][0])} instead.`);
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