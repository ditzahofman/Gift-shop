import { AudienceModel } from "./audience.model"

export class GiftModel {
    public _id: string
    public audienceId: string
    public name: string
    public description: string
    public price: number
    public unitsInStock:number
    public discount:number
    public audience:AudienceModel
}