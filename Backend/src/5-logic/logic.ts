import { AudienceModel, IAudienceModel } from "../4-models/audience-model"
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models"
import { GiftModel, IGiftModel } from "../4-models/gift-model"

function getAllAudience():Promise<IAudienceModel[]> {
return AudienceModel.find().exec()

}

function getGiftsByAudience(audienceId:string):Promise<IGiftModel[]> {
    return GiftModel.find({audienceId}).populate("audience").exec()
    
    }

function addGift(gift:IGiftModel):Promise<IGiftModel>{
const error = gift.validateSync()
if(error) throw new ValidationErrorModel(error.message)
return gift.save()
    
}

async function deleteGift(_id:string):Promise<void>{
    const deleted = await GiftModel.findByIdAndDelete(_id)
    if(!deleted) throw new ResourceNotFoundErrorModel(_id)
        
    }
export default {
    getAllAudience,
    getGiftsByAudience,
    addGift,
    deleteGift
}