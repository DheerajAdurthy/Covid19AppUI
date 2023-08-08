import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from '../Models/City';
import { Country } from '../Models/Country';
import { WishList } from '../Models/WishList';
import { CountryServiceService } from '../Services/country-service.service';
import { WishlistServiceService } from '../Services/wishlist-service.service';

@Component({
  selector: 'app-overall-data',
  templateUrl: './overall-data.component.html',
  styleUrls: ['./overall-data.component.css']
})
export class OverallDataComponent implements OnInit {
  cities:City[]=[]
  citiesNotFound:string;
  CountryDetails:Country;
  countryId:string;
  showActive:boolean=false;
  showWishListAddPopUp:boolean=false;
  showWishListRemovedPopUP:boolean=false
  userId:string;
  wishList:WishList=new WishList();
  searchWishList:WishList=new WishList()
  wishListItems:WishList[]=[];
  dupWishListRes:string;
  wishListdelResponse:any;
  wishListAddStatus:any
  status:any;
  constructor(private activeRoute:ActivatedRoute,private countryService:CountryServiceService,private wishlistService:WishlistServiceService) { 
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params:Params)=>{
        this.countryId=params['countryId']
    })
    this.wishlistService.getWishListStatus(this.countryId,localStorage.getItem('userId')).subscribe(res=>{
      this.status=res
      if(this.status.value==this.countryId){
        this.showActive=true
      } 
  })
  this.countryService.getEachCountryData(this.countryId).subscribe(res=>
    {this.cities=res;
    this.countryService.getAllCountries().subscribe(data=>{
     console.log(data)
     data.forEach(element => {
      if(element.countryId==this.countryId){
         this.CountryDetails=element
      }
   }
   );
})
},error=>this.citiesNotFound=error.error)
  }

  toggleWishlist(){
      this.wishList.countryId=this.CountryDetails.countryId
      this.wishList.wishListCountryName=this.CountryDetails.countryName
      this.wishList.userId=localStorage.getItem('userId')
      this.wishListItems.push(this.wishList)
      if(!this.showActive){
          this.wishlistService.addWishList(this.wishListItems).subscribe(res=>{
               this.wishListAddStatus=res 
               this.wishlistService.getWishListStatus(this.countryId,localStorage.getItem('userId')).subscribe(res=>{
                this.status=res
                if(this.status.value==this.countryId){
                  this.showActive=true
                  this.showWishListAddPopUp=true
                  setInterval(()=>{
                    this.showWishListAddPopUp=false
                  },1300)
                }
               });
          });
       }
      else{
        this.showActive=false
        this.wishlistService.deleteWishList(this.CountryDetails.countryId,localStorage.getItem('userId')).subscribe(res=>{
          this.wishListdelResponse=res
          this.showWishListRemovedPopUP=true
          setInterval(()=>{
            this.showWishListRemovedPopUP=false
          },1300)
        })
      }
  }
}
  




