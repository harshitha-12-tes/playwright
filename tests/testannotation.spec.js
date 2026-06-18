import {test} from "@playwright/test"
test("test1",async()=>{
   //  test.setTimeout(3000)
 console.log("test 1");

})
test("test2",async({page})=>{
  //  test.skip(browserName==="chromium")
   //  test.slow()
 console.log("test 2");

})
test("test3",async({browser})=>{
    
   console.log("test 3");
  
    
})