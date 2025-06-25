//this code suposed to run in server component not iside client componetnt
import "server-only";

export const add = (a:number, b:number) => a+b;
export const subtract = (a:number , b: number) => a-b ;

// this code will only run to server only or client only now