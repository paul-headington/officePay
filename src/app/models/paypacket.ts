import { Component } from "./component";

export class Paypacket {
    id!: number;
    status!: string;
    date!: Date;
    employeeCode!: string;
    components!: Component[];
}
