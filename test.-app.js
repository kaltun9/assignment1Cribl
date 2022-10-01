import test from "node:test";
import { agent, splitter, target } from "./app.js" ;
 
//AGENT
describe('agent function', () => {
    const testAgentDir = 'agent/';
    const testInvalidAngentDir = 23235325;
    const app = require("./index");
 
    test('is null', () => {
        const agentFnResult = agent(testAgentDir);
        expect(agentFnResult).toBeNull();
    });
   
    test('returns success value', () => {
        const agentFnResult = agent(testAgentDir);
        expect(agentFnResult).toExist();
    });
 
    test('returns error due to invalid input', () => {
        const agentFnResult = agent(testInvalidAngentDir);
        expect(agentFnResult).toBeTruthy();
   
    test('returns error due to fasley input', () => {
            const agentFnResult = agent(testInvalidAngentDir);
            expect(agentFnResult).toBeFalsy();
 
    });
 
    test('returns server staring on port 9997',() => {
        const agentFnResult = agent(testAgentDir);
    expectapp.listen(3000, () => console.log("server starting on port ___!"));
  });
 
 
 
 
  //SPLITTER
  describe('splitter function', () => {
    const testSplittertDir = 'splitter/';
    const testInvalidSplitterDir = 66666;
    const app = require("./index");
 
    test('is null', () => {
        const splitterFnResult = splitter(testSplitterDir);
        expect(splitterFnResult).toBeNull();
    });
   
    test('returns success value', () => {
        const splitterFnResult = splitter(testSplitterDir);
        expect(splitterFnResult).toExist();
    });
 
    test('returns error due to invalid input', () => {
        const splitterFnResult = agent(testInvalidSplitterDir);
        expect(splitterFnResult).toBeTruthy();
   
    test('returns error due to fasley input', () => {
            const splitterFnResult = splitter(testInvalidSplittertDir);
            expect(splitterFnResult).toBeFalsy();
 
    });
 
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