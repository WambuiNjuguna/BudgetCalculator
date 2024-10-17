
export class BudgetItem{
    // description!:string;
    // amount!:number; 
    //we remove these to avoid duplicate property declarations
    // the description and amount properties are defined in the constructor parameters
    //TypeScript will automatically create the properties for you,
    // so you don't need to declare them separately at the top of the class

    constructor( public description:string, public amount:number){
        // this.description=description;
        // this.amount=amount     we have also removed these because TS allows us to remove them by adding the public to the parameters 

    }

}