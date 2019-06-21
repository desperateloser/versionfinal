import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class RestApiService {
// Define API
apiURL = 'http://localhost:8080';
constructor(private http: HttpClient) { }
/*========================================
CRUD Methods for consuming RESTful API
=========================================*/
// Http Options
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}  


// HttpClient API get() method => Fetch employees list
getUsers(): Observable<User> {
return this.http.get<User>(this.apiURL + '/users')
.pipe(
retry(1),
catchError(this.handleError)
)
}
getUser(id_user) : Observable <User>{
	return this.http.get<User>(this.apiURL+'/users/'+id_user)
		.pipe(retry(1), catchError(this.handleError))

}
// HttpClient API post() method => Create user
createuser(user): Observable<User> {
return this.http.post<User>(this.apiURL + '/users', JSON.stringify(user), this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}  

// HttpClient API put() method => Update user
updateUser(id_user, user): Observable<User> {
	console.log('User:'+ JSON.stringify(user));
return this.http.put<User>(this.apiURL + '/users/' + id_user, JSON.stringify(user), this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}
//HttpClient API delete() method => Delete user
deleteuser(id_user){
return this.http.delete<User>(this.apiURL + '/users/' + id_user, this.httpOptions)
.pipe(
retry(1),
catchError(this.handleError)
)
}
// Error handling 
handleError(error) {
let errorMessage = '';
if(error.error instanceof ErrorEvent) {
// Get client-side error
errorMessage = error.error.message;
} else {
// Get server-side error
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
window.alert(errorMessage);
return throwError(errorMessage);
}
}
