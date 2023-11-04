export class User {
    constructor(
        public email: string,
        public password: string,
        public verified: boolean,
        public idRole: number,
    ) {

    }
}
