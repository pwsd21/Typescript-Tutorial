let arr:string[] = ['red','yellow','green']
let arr2:number[] = [1,2,4]
let arr3:boolean[] = [true, false, false]

let role: string[] | number[] = [23]
let role2: string[] | number[] = ["red"]

// All 3 below will work same
let random = ["abc", 123, true]
let random1:any[] = ["abc", 123, true]
let random2:[string, number, boolean] = ["abc", 123, true]