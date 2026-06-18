import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
import { json } from "stream/consumers"
let datafile=fs.readFileSync(path.join(__dirname,"../../testdata/singlesetdata.json"))
//convert json object to js objec
let data=JSON.parse(datafile)
test("example",async({page})=>{
    //for single object
   // console.log(data.greet);
    data.forEach(d => {
    console.log(d.greet);
    
});
})

