import mongoose from "mongoose";

export interface IAudienceModel extends mongoose.Document{
name:string
}

export const AudienceSchema = new mongoose.Schema<IAudienceModel>({
name:{
    type:String,
    required:[true, "Missing name"]
}
})

export const AudienceModel = mongoose.model<IAudienceModel>("AudienceModel", AudienceSchema, "audience")