import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donategear',
  templateUrl: './donategear.component.html',
  styleUrls: ['./donategear.component.scss']
})
export class DonategearComponent implements OnInit {
  url = "http://localhost:8443";
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required, this.forbiddenNameValidator(/Choose.../i)]);
  zip = new FormControl('', [Validators.required]);
  searchTerms = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required, this.forbiddenNameValidator(/Choose.../i)]);
  condition = new FormControl('', [Validators.required, this.forbiddenNameValidator(/Choose.../i)]);
  image = new FormControl('');
  // name = new FormControl('');
  // name = new FormControl('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public submit(){
      var data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        city: this.city,
        state: this.state,
        zip: this.zip,
        searchTerms: this.searchTerms,
        category: this.category,
        condition: this.condition,
        image: this.image, 
      };
      const httpOptions = {
        headers: new HttpHeaders({
          path: '/add',
          'Content-Type':  'application/json',
          
        })
      }
      this.post(data, httpOptions).subscribe(resp => {
        console.log('server response: ' + resp)
      })
  }

  public post(data, options): Observable<any> {
    return this.http.post<any>(this.url, data, options);
      // .pipe(
      //   catchError(this.handleError('addHero', data))
      // );
  }

  public forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

}
 