import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AudienceModel } from 'src/app/models/audience.model';
import { GiftModel } from 'src/app/models/gift.model';
import { GiftService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
public audience:AudienceModel[]=[]

  public gift= new GiftModel()

  public constructor(private giftService:GiftService,public router:Router){}
  
  async ngOnInit(): Promise<void> {
  try {
    this.audience= await this.giftService.getAllAudience()
  } catch (err:any) {
    alert(err)
  }
  }

 public async send():Promise<void>{
  try {
    await this.giftService.addGift(this.gift) 
    alert("The gift has been successfully added")
    this.router.navigateByUrl("/list")
  } catch (error:any) {
    alert(error.message)
  }

 }

}
