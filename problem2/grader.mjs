import { run } from './program.mjs';
import * as fs from 'fs';

export function main()
{
    let data = [];

    try 
    {
        let _data = fs.readFileSync('./input.txt', 'utf8').split('\n');

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

    for(let i = 0; i < data.length; i++)
    {
        if(run(data[i][0], data[i][1], data[i][2]) != data[i][3])
        {
            console.error(`Test ${i} failed! Expected ${data[i][1]} but got ${run(data[i][0])} instead.`);
            return;
        }
    }

    console.log("All tests passed!");
}

main();