import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AudienceModel } from '../models/audience.model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import { GiftModel } from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http:HttpClient,router:Router) { }

  public async getAllAudience():Promise<AudienceModel[]> {
    const observable= this.http.get<AudienceModel[]>(appConfig.audienceUrl)
    const audience = await firstValueFrom(observable)
    return audience
  }

  public async getGiftsByAudience(audienceId:string):Promise<GiftModel[]>{
    const observable = this.http.get<GiftModel[]>(appConfig.giftsUrl+audienceId)
    const gifts = await firstValueFrom(observable)
    return gifts
  }

  public async addGift(gift:GiftModel):Promise<void>{
    const observable = this.http.post(appConfig.giftsUrl,gift)
    await firstValueFrom(observable)
  }
  
  public async deleteGift(_id:string):Promise<void>{
    const observable = this.http.delete(appConfig.giftsUrl+_id)
   await firstValueFrom(observable)
  }
}
