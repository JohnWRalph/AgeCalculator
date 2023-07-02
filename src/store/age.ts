import { writable } from "svelte/store";

const years = writable();
const months = writable();
const days = writable();

const birthDay = writable<number>();
const birthMonth = writable<number>();
const birthYear = writable<number>();


export { years, months, days, birthDay, birthMonth, birthYear };