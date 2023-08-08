import {Component,OnInit} from "@angular/core";
import {FormControl,FormGroup,FormBuilder, Validators, AbstractControl} from "@angular/forms";
import { RegisterUser } from '../Models/Registeruser';
import { RegisterUserService } from '../Services/register-user.service';
import { ConfirmedValidator } from '../shared/confirmed.validator';

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
    roleFailure:string=""

    constructor(private fb:FormBuilder,private service:RegisterUserService){
       
    } 
    ngOnInit(){
        this.registerForm=this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password:['',[Validators.required]],
            confirmPassword:['',Validators.required],
            role:['',Validators.required]
        },
        {
            validators:ConfirmedValidator
        });
    }

    onSubmit(form: FormGroup) {
        if(form.valid){
            this.registerUserDetails.userName=form.value.username
            this.registerUserDetails.emailId=form.value.email
            this.registerUserDetails.password=form.value.password
            this.registerUserDetails.confirmPassword=form.value.confirmPassword
            this.registerUserDetails.role=form.value.role
            if(this.registerUserDetails.role=="Choose your role.."){
                this.roleFailure="Role shouldn't be default value chose either admin or user"
                setInterval(()=>{
                    this.roleFailure=""
                },3000)
            }
            else{
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
            }
        } // true or false 
      }
}