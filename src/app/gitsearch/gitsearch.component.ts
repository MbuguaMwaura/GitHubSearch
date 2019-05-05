import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  searchgit = [];
	gitress: any;
	repo:any;
	searchrepo = [];

	getUser(login){
		for(let detail of this.searchgit){
		  if(detail.login == login){
			return detail;
		  }
		}
	  }	


	githubSearch(gitsearch) {
		var searchVal = gitsearch.value;

		var link = 'https://api.github.com/search/users?q=' + searchVal;



		console.log(link);

		const promise = new Promise((resolve, reject) => {
			this.http.get(link).toPromise().then(
				(response) => {
					this.gitress = response;
					resolve();

          console.log(this.gitress['items']);
          
          for(let i=0; i < this.gitress['items'].length; i++ ){
            this.searchgit.push(this.gitress['items'][i])
          }
          console.log(this.searchgit[0]);
				},
				(error) => {
					alert('error');
					reject(error);
				}
			);
    });
    return promise;
	}


	searchRepo(gitsearch) {

		var searchVal = gitsearch.value;

		var repolink = 'https://api.github.com/users/'+ searchVal+'/repos';

			this.http.get(repolink).subscribe((data) => {
				this.repo = data;
	
				for (var i = 0; i < this.repo.length; i++) {
					this.searchrepo.push(this.repo[i]);
				}
				console.log(this.searchrepo);
			});
		}

	constructor(private http: HttpClient, private route:ActivatedRoute) {}

	ngOnInit() {
		// let id = this.route.snapshot.paramMap.get("login");
		// alert(id);
	}
}
