import mongoose from "mongoose";
import { AudienceModel } from "./audience-model";

export interface IGiftModel extends mongoose.Document{
    audienceId:mongoose.Schema.Types.ObjectId
    name:string
    description:string
    price:number
    discount:number
    unitsInStock:number
}

export const GiftSchema = new mongoose.Schema<IGiftModel>({
audienceId:{
type:mongoose.Schema.Types.ObjectId
},
name:{
    type:String,
    required:[true , "Missing name"]
},
description:{
    type:String,
    required:[true , "Missing description"]
},
price:{
    type:Number,
    required:[true , "Missing price"],
},
discount:{
    type:Number,
    required:[true , "Missing discount"]
},
unitsInStock:{
    type:Number,
    required:[true , "Missing discount"]
}
},
{
versionKey:false,
toJSON:{virtuals: true},
id:false
})

GiftSchema.virtual("audience",{
    ref: AudienceModel,
    localField:"audienceId",
    foreignField:"_id",
    justOne:true
})
export const GiftModel = mongoose.model<IGiftModel>("GiftModel",GiftSchema,"gifts")