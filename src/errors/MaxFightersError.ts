export class MaxFightersError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "MaxFightersError";
    }
}