import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WishList } from '../Models/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  apiURL="http://localhost:5067/api/Wish/"

  constructor(private http:HttpClient) { }

  addWishList(wishList:WishList[]){
    return this.http.post(this.apiURL+"AddWishList",wishList)
   }
  deleteWishList(countryId:string,userId:string){
  return this.http.delete(this.apiURL+"DeleteWishListById/"+countryId+"/"+userId)
  }
  getWishListStatus(countryId:string,userId:string){
    return this.http.get(this.apiURL+"GetWishListItemStatus/"+countryId+"/"+userId).pipe(map(res=>{
      return res;
    } 
      ));
  }
  getAllWishListItems(userId:string){
    return this.http.get(this.apiURL+"GetUserWishLists/"+userId)
  }
}
