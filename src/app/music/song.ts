export interface Song {
    id: number;
    name: string;
    artist: string;
    length: string;
    keySignature: string;
}

export interface SongDTO {
    name: string;
    artist: string;
    length: string;
    keySignature: string;
}

// interface SongDTO {
//     title: string;
//     get artistName(): string;
// }

// export interface SongDTO2 extends SongDTO {}

// export class SongDTO2 implements SongDTO {
//     constructor(public title: string) {
//         this.title = title;
//     }
//     get artistName(): string {
//         return this.title;
//     }
// }

// interface Response<T> {
//     data: T;
//     message: string;
// }

// class ActionResponse implements Response<Song> {
//     constructor(public data: Song, public message: string) {}
// }

// class Shape<Type> {
//     constructor(public shapeDefinition: Type) {}
// }

// class Vehicle {
//     public model!: string;
//     private make!: string;
//     protected year!: number;
//     #color!: string;
//     tires: number = 4;

//     constructor(public name: string) {}

//     static create(name: string): Vehicle {
//         return new Vehicle(name);
//     }
// }

// class Car extends Vehicle {
//     constructor(name: string) {
//         super(name);
//     }
// }

// abstract class AShape {
//     abstract area(): number;
//     log(msg: string): void {
//         console.log(msg);
//     }
// }

// class Square extends AShape {
//     constructor(public length: number) {
//         super();
//     }
//     area(): number {
//         this.log(`Square area ${this.length * this.length}`);
//         return this.length * this.length;        
//     }
// }

// type FlightDetailsProps = {
//     flightNumber: number;
//     departure: string;
//     arrival: string;
// }

// type MyNewString = string;
// type Error404 = 404;

// type Coordinates = {
//     x: number;
//     y: number;
// };

// class Point {
//     constructor(public coords: Coordinates) {}
// }

// type Data = [
//     location: Coordinates,
//     timestamp: string,
// ];

// type CreateComponentArg = Object | string | number | boolean | undefined | null;

// function getData(data: Data | number | string | any): Point | Object {
//     return new Point(data[0]);
// }


// let value: unknown;

// value = true; // OK
// value = 42; // OK
// value = "Hello World"; // OK
// value = []; // OK
// value = {}; // OK
// value = Math.random; // OK
// value = null; // OK
// value = undefined; // OK
// value = new TypeError(); // OK
// value = Symbol("type"); // OK

// type IntersectingType = 
//     { x: number; y: number; } & { z: number; };

// let intArray: number[] = [1, 2, 3];

// type MyNumberArray = typeof intArray;