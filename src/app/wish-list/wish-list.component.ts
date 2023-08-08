import { Component, OnInit } from '@angular/core';
import { WishListResponse } from '../Models/WishListResponse';
import { WishListStatus } from '../Models/WishListStatus';
import { WishlistServiceService } from '../Services/wishlist-service.service';
import { Observable,Observer,Subscription } from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  userId:string;
  wishListItems:WishListResponse[];
  term:string
  showActive:boolean=true;
  wishListStatus:WishListStatus[]
  wishListStatusElement=new WishListStatus()
  customSub:Subscription;
  constructor(private wishList:WishlistServiceService) { }

  ngOnInit() {
        this.userId=localStorage.getItem('userId')
        this.wishList.getAllWishListItems(this.userId).subscribe(res=>{
          this.wishListItems=res as WishListResponse[]
        })
        const myObservable=Observable.create((observer:Observer<WishListResponse[]>)=>{
         this.wishList.getAllWishListItems(this.userId).subscribe(res=>{
           observer.next(res as WishListResponse[])
         })
      })
      this.customSub=myObservable.subscribe((response:WishListResponse[])=>{
        this.wishListItems=response
      })
  }
  
  toggleWishlist(countryId:string){
    this.wishList.deleteWishList(countryId,localStorage.getItem('userId')).subscribe(res=>{
      console.log(res)
    })
  } 
}
