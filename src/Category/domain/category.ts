export class Category {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly capacity: number,
        readonly space: string,
        readonly status: string,
    ){}

}