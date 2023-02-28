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
        else
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

    for(let i = 0; i < data.length; i++)
    {
        if(run(data[i][0]) != data[i][1])
        {
            console.error(`Test ${i} failed! Expected ${data[i][1]} but got ${run(data[i][0])} instead.`);
            return;
        }
    }

    console.log("All tests passed!");
}

main();