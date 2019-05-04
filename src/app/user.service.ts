import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User

  userRequest() {
		interface ApiResponse {
			login: string;
			id: number;
			avatar_url: string;
			bio: string;
    }
    const promise = new Promise((resolve, reject) => {
			this.http.get<ApiResponse>(environment.apiGitHub).toPromise().then(
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
