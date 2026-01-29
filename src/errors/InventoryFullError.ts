export class InventoryFullError extends Error {
    constructor(message: string = "Inventory full") {
        super(message);
        this.name = "InventoryFullError";
    }
}