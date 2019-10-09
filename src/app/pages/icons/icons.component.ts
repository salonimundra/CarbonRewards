import { Component, OnInit } from '@angular/core';
import { RewardsService} from '../../rewards.service';
@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent implements OnInit{
    constructor(private rewardService: RewardsService){
        this.rewards="0 COc";
    }
    rewards: string;
    ngOnInit(){
        this.rewardService.getRewards().subscribe((response:any)=>{
            console.log(response);
            this.rewards=response[0].walletrewards+" COc";
           // this.assignRewards();
        });
    }
    onEncash(){
        this.rewardService.setRewards(this.rewards);
        this.rewards="0"+" COc";
    }
    
}
