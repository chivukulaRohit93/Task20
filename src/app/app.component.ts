import { Component , OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formbuilder:FormBuilder){}
  registerForm:FormGroup;
    public s1:number;
    public s2:string;
    public s3:string;
    public s4:number;
    public s5:string;
    public s6:string;
    public s7:number;
  
    public depts:any[] = [
         { sno:1, name: "name1" , email: "email1@gmail.com" , experience: 3 , company :"company1" , designation: "desig1" , mobile: 9999999999},
         { sno:2, name: "name2" , email: "email2@gmail.com" , experience: 2 , company :"company2" , designation: "desig2" , mobile: 8888888888},
         { sno:3, name: "name3" , email: "email3@gmail.com" , experience: 1 , company :"company3" , designation: "desig3" , mobile: 7777777777}
    ];
    public  Add()
    {
      var obj:any = {};
      obj.sno = this.s1;
      obj.name = this.s2;
      obj.email = this.s3;
      obj.experience = this.s4;
      obj.company = this.s5;
      obj.designation = this.s6;
      obj.mobile = this.s7;
  
      this.depts.push( obj );  
    }
  
    public  Delete(dno:number)
    {
      var index:number  = this.depts.findIndex( menu => menu.sno == dno );
      this.depts.splice(index,  1);
    }
  
    public  select(dno:number)
    {
      var obj:any = this.depts.find( menu => menu.sno == dno );
      this.s1 = obj.sno
      this.s2 = obj.name;
      this.s3 = obj.email;
      this.s4 = obj.experience;
      this.s5 = obj.company;
      this.s6 = obj.designation;
      this.s7 = obj.mobile;
    }
  
    public  Update( )
    {
      var index:number  = this.depts.findIndex( menu => menu.sno ==  this.s1 );
      this.depts[index].sno = this.s1;
      this.depts[index].name = this.s2;
      this.depts[index].email = this.s3;
      this.depts[index].experience = this.s4;
      this.depts[index].company = this.s5;
      this.depts[index].designation = this.s6;
      this.depts[index].mobile = this.s7;
    }
  
    
    ngOnInit() {
    
    }
  
}