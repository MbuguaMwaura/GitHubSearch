import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Repo } from '../repo';

@Component({
	selector: 'app-gitsearch',
	templateUrl: './gitsearch.component.html',
	styleUrls:
		[
			'./gitsearch.component.css'
		]
})
export class GitsearchComponent implements OnInit {
	searchgit = [];
	gitress: any;
	repo: any;
	searchrepo = [];
	search = [];
	searchlogin: any;
	repolink: any;
	links = [];

	githubSearch(gitsearch) {
		this.searchgit = [];

		var searchVal = gitsearch.value;

		var link = 'https://api.github.com/search/users?q=' + searchVal;

		console.log(link);

		const promise = new Promise((resolve, reject) => {
			this.http.get(link).toPromise().then(
				(response) => {
					this.gitress = response;
					resolve();

					console.log(this.gitress['items']);

					for (let i = 0; i < this.gitress['items'].length; i++) {
						this.searchgit.push(this.gitress['items'][i]);
					}
				},
				(error) => {
					alert('error');
					reject(error);
				}
			);
		});
		for (let i = 0; i < this.search.length; i++) {}

		return promise;
	}

	// searchRepo() {

	// 	for(let i=0; i < this.searchgit.length; i++ ){
	// 	this.search.push(	this.searchgit[i]['login']);
	// 	}

	// 	this.http.get(this.links).subscribe((data) => {
	// 		this.repo = data;

	// 		for (var i = 0; i < this.repo.length; i++) {
	// 			this.searchrepo.push(this.repo[i]);
	// 		}
	// 		console.log(this.searchrepo);
	// 	});

	// }

	githubSearchrepo(gitsearchrepo) {
		this.searchrepo = [];

		var userlink = gitsearchrepo.value;

		var finallink = 'https://api.github.com/users/' + userlink + '/repos';

		console.log(finallink);

		this.http.get(finallink).subscribe((data) => {
			this.repo = data;
			for (var i = 0; i < this.repo.length; i++) {
				this.searchrepo.push(this.repo[i]);
			}
		});
		console.log(this.searchrepo);
	}

	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {}
}
