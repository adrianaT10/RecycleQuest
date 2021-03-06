import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

export class ServerBase {
	baseUrl:string = 'http://b26a4a2a.ngrok.io';

	headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});

	serverBase() {

	}

	handleError(error: HttpErrorResponse) {
	  if (error.error instanceof ErrorEvent) {
	    // A client-side or network error occurred. Handle it accordingly.
	    console.error('An error occurred:', error.error.message);
	  } else {
	    // The backend returned an unsuccessful response code.
	    // The response body may contain clues as to what went wrong,
	    console.error(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  // return an observable with a user-facing error message
	  return of(
	    'Something bad happened; please try again later.');
	};
}