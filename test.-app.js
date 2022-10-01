import test from "node:test";
import { agent, splitter, target } from "./app.js" ;
 
//How I would test if the app was able to run

//AGENT


//Test for data agent is sending off to splitter
describe('agent function', () => {
    const testAgentDir = 'agent/'; //agent folder
    const testInvalidAngentDir = 23235325;
    const app = require("./index");
    //call agent function, and give it input, data agent is sending to splitter stored in agentFnResult
    const agentFnResult = agent(testAgentDir);
    //expect to exist
    expect(agentFnResult).toExist();

    //test case: testing if input is null value
    test('is null', () => {
        const agentFnResult = agent(testAgentDir);
        expect(agentFnResult).toBeNull();
    });
   //test case: testing if input is valid/exists
    test('returns success value', () => {
        const agentFnResult = agent(testAgentDir);
        expect(agentFnResult).toExist();
    });
    //test case: retuns error bc of invalid input(constIvalidAgenDir)
    test('returns error due to invalid input', () => {
        const agentFnResult = agent(testInvalidAngentDir);
        expect(agentFnResult).toBeTruthy();
   //test case: retuns error bc of falsey input
    test('returns error due to fasley input', () => {
            const agentFnResult = agent(testInvalidAngentDir);
            expect(agentFnResult).toBeFalsy();
 
    });
    //test case: returns server/port agent begins on
    test('returns server staring on port 9997',() => {
        const agentFnResult = agent(testAgentDir);
    expectapp.listen(3000, () => console.log("server starting on port ___!"));
  });
 
 
 
 
  //SPLITTER
  //Test for data splitter is sending off to target
  describe('splitter function', () => {
    const testSplittertDir = 'splitter/';//splitter folder
    const testInvalidSplitterDir = 66666;
    const app = require("./index");
    
    //call splitter function, and give it input, data splitter is sending to target stored in agentFnResult
    const agentFnResult = agent(testAgentDir);
    //expect to exist
    expect(agentFnResult).toExist();

    //test case: testing if input is null value
    test('is null', () => {
        const splitterFnResult = splitter(testSplitterDir);
        expect(splitterFnResult).toBeNull();
    });

   //test case: testing if input is valid/exists
    test('returns success value', () => {
        const splitterFnResult = splitter(testSplitterDir);
        expect(splitterFnResult).toExist();
    });

    //test case: retuns error bc of invalid input(constIvalidAgenDir)
    test('returns error due to invalid input', () => {
        const splitterFnResult = agent(testInvalidSplitterDir);
        expect(splitterFnResult).toBeTruthy();
   
   //test case: retuns error bc of falsey input
    test('returns error due to fasley input', () => {
            const splitterFnResult = splitter(testInvalidSplittertDir);
            expect(splitterFnResult).toBeFalsy();
 
    });
    //test case: returns port splitter is listening on 
    test('listening on port 9997',() => {
        const splitterFnResult = splitter(testSplitterDir);
    expectapp.listen(3000, () => console.log("listening on port ___!"));
  });
 
  //TARGET
  describe('Target function', () => {
    const testTargettDir = 'target/';
    const testInvalidTargetDir = 66667;
    const app = require("./index");
 
    test('is null', () => {
        const targetFnResult = splitter(tesTaregtDir);
        expect(targetFnResult).toBeNull();
    });
   
    test('returns success value', () => {
        const targetFnResult = splitter(testTargetDir);
        expect(targetFnResult).toExist();
    });
 
    test('returns error due to invalid input', () => {
        const targetFnResult = agent(testInvalidTargetDir);
        expect(targetFnResult).toBeTruthy();
   
    test('returns error due to fasley input', () => {
            const targetFnResult = target(testInvalidTargetDir);
            expect(targetFnResult).toBeFalsy();
 
    });
 
    test('listening on port 9997',() => {
        const splitterFnResult = target(testSplitterDir);
    expectapp.listen(3000, () => console.log("listening on port ___!"));
});