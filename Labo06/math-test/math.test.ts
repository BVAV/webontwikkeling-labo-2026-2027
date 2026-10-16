import { expect, test } from "vitest";
import { add, subtract, multiply, divide } from './math.ts';

// Write your tests here
test("getallen moeten opgeteld worden", ()=>{
    expect(add(2,5)).toBe(7);
    expect(add(9, 3)).toBe(12);
});

test("getallen moeten van elkaar afgetrokken worden", ()=>{
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(-3, 2)).toBe(-5);
});

// Werk de tests voor deze oefening uit.
test.todo("Schrijf de tests voor deze oefening");
