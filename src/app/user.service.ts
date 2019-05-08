import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	user:User



  

  userInformation() {
		interface ApiResponse {
			login: string;
			id: number;
			avatar_url: string;
			bio: string;
    }
    const promise = new Promise((resolve, reject) => {
		var link = "https://api.github.com/users/MbuguaMwaura?access_token=337b7ab5cddcc4d88c5a225ea40b3f02d15cf3e1";

			this.http.get<ApiResponse>(link).toPromise().then(
				(response) => {
					this.user.name = response.login;
					this.user.id = response.id;
					this.user.avatar_url = response.avatar_url;
					this.user.bio = response.bio;

					resolve();


					console.log(response.login);
				},
				(error) => {
					alert('error');
					reject(error);
				}
			);
		});
		return promise;
  }
  
  constructor(private http:HttpClient) {
    this.user = new User('', 0, '', '');
   }
}
