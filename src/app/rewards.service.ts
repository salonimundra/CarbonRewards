import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable ,of} from 'rxjs';
import {UserFullDetails} from './UserFullDetails'
import { setDefaultService } from 'selenium-webdriver/edge';
@Injectable({
  providedIn: 'root'
})
export class RewardsService {
  user=new UserFullDetails();
  
  constructor(private http:HttpClient) { 
    
  }
  
  getRewards():Observable<any>{
    return this.http.get('http://192.168.43.220:8000/user/rewards/?userID=nishant.patel@gmail.com');
    
    
  }
  setRewards(user:Object){
    console.log("service called");
    this.setUser();
    return this.http.post('http://192.168.43.220:8000/user/encash',{'userID':'nishant.patel@gmail.com'}).subscribe((response:any)=>{
      console.log(response);
     // this.assignRewards();
  });
  }
  setUser(){
    this.user.userID="nishant.patel@gmail.com";
    this.user.password="password";
  }
}
