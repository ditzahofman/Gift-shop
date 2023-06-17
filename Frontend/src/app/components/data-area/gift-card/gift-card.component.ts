import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GiftModel } from 'src/app/models/gift.model';
import { GiftService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent {

       @Input()
  public gift:GiftModel
    
  @Output() onDelete = new EventEmitter<void>();
 

  public constructor(private giftsService:GiftService){}
  
  public async deleteGift(): Promise<void> {
    try {
      if (!(window.confirm('Are you sure?'))) return;
      await this.giftsService.deleteGift(this.gift._id)
      alert('Gift successfully deleted');
         } catch (err: any) {
      alert(err.message);
    }
  }

}

