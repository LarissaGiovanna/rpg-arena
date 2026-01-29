export class FighterDontFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FighterDontFoundError";
    }
}