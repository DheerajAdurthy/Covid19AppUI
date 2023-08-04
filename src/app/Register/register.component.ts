import {Component,OnInit} from "@angular/core";
import {FormControl,FormGroup,FormBuilder, Validators} from "@angular/forms";
import { RegisterUser } from '../Models/Registeruser';
import { RegisterUserService } from '../Services/register-user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    registerForm:FormGroup;
    registerUserDetails=new RegisterUser();
    responseError:boolean=false;
    errorRes:string=""
    successRes:string=""

    constructor(private fb:FormBuilder,private service:RegisterUserService){
       
    } 
    ngOnInit(){
        this.registerForm=this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password:['',[Validators.required]],
            confirmPassword:['',Validators.required]
        });
    }

    onSubmit(form: FormGroup) {
        if(form.valid){
            this.registerUserDetails.userName=form.value.username
            this.registerUserDetails.emailId=form.value.email
            this.registerUserDetails.password=form.value.password
            this.registerUserDetails.confirmPassword=form.value.confirmPassword
            this.service.registerUser(this.registerUserDetails).subscribe(response=>{
                if(response){
                    this.successRes="User Registered Successfully"
                }
            },(error)=>{
                if(error){
                        this.responseError=true;
                        this.errorRes=error.error;
                }
            })
            this.registerForm.reset();
        } // true or false 
      }
}