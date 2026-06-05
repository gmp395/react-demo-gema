import { describe, it, expect } from "vitest";
import { containsEnglish } from "./english.js";

describe("containsEnglish", () => {

  // True
  it("detecta 'English' con mayúscula normal", () => {
    expect(containsEnglish("abcEnglishdef")).toBe(true);
  });

  it("detecta 'english' todo en minúsculas", () => {
    expect(containsEnglish("I speak english fluently")).toBe(true);
  });

  it("detecta letras mezcladas 'eNgLiSh'", () => {
    expect(containsEnglish("eNgLiSh is fun")).toBe(true);
  });

  // False
  it("devuelve false si las letras están desordenadas", () => {
    expect(containsEnglish("abcnEglishsef")).toBe(false);
  });

  it("devuelve false si la cadena está vacía", () => {
    expect(containsEnglish("")).toBe(false);
  });

  it("devuelve false si no contiene english", () => {
    expect(containsEnglish("Hello world")).toBe(false);
  });

});