import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  styleUrls: ['./my-github.component.css'],
  providers: [UserService]
})
export class MyGithubComponent implements OnInit {



  
  user:User

  result: any;


	getRepos() {
		var repos = 'https://api.github.com/users/MbuguaMwaura/repos';


		this.http.get(repos).subscribe((data) => {
			this.result = data;
      console.log(this.result);
      
      
		});
  }
  


  constructor(private userService:UserService, private http: HttpClient, private router:Router) {
    this.user = new User("",0,"","")
   }


   ngOnInit() {
    this.userService.userInformation();
    this.user = this.userService.user
  }
}
