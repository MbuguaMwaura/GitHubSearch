import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import{Router} from '@angular/router';
import { Repo } from '../repo';

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
					let vid = this.route.snapshot.paramMap.get("id")
					console.log(vid)
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

		console.log(repolink)

			this.http.get(repolink).subscribe((data) => {
				this.repo = data;
	
				for (var i = 0; i < this.repo.length; i++) {
					this.searchrepo.push(this.repo[i]);
				}
				console.log(this.searchrepo);
			});
		
		}


	goToUrl(id){
		this.router.navigate(["/other",id])
		alert(id)
  }


	getRepo(id){
		for(let detail of this.searchrepo){
		  if(detail.id == id){
			return detail;
		  }
		}
	  }	



	constructor(private http: HttpClient, private route:ActivatedRoute, private router:Router) {}

	ngOnInit() {
		
	
	}
}
