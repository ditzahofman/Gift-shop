import { Component, OnInit } from '@angular/core';
import { AudienceModel } from 'src/app/models/audience.model';
import { GiftModel } from 'src/app/models/gift.model';
import { GiftService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isTableView = true;
  public audience: AudienceModel[] = []
  public gifts: GiftModel[] = []


  public constructor(private giftsServices: GiftService) { }

  public async ngOnInit() {
    try {
      this.audience = await this.giftsServices.getAllAudience()
    } catch (error: any) {
      alert(error.message)
    }
  }

  public async displayGifts(args: Event) {
    try {
      const selectElement = args.target as HTMLSelectElement
      const audienceId = selectElement.value
      this.gifts = await this.giftsServices.getGiftsByAudience(audienceId)
    } catch (error: any) {
      alert(error.message)
    }


  }

  toggleView() {
    this.isTableView = !this.isTableView;
  }

  public async deleteMe(_id: string) {
    await this.giftsServices.deleteGift(_id)
    const index = this.gifts.findIndex((g) => g._id === _id)
    this.gifts.splice(index, 1)
  }

  // Handle delete (from card)
  public handleDelete(_id: string): void {
    this.gifts.splice(this.gifts.findIndex(e => e._id === _id), 1);
  }


}