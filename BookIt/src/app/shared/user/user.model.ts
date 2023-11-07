export class User {
    constructor(
        public email: string,
        public id: string,
        private accessToken: string,
        private exp: number
    ){}

    public get token(): string | null {
        const currentDate: number = Date.now() / 1000
        console.log("currentDate",currentDate);
        console.log("expiration date", this.exp);
        if(currentDate > this.exp) {
            return null;
        }
        return this.accessToken;
    }
}