export class NoEnoughManaError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NoEnoughManaError";
    }
}