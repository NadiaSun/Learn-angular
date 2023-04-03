import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../../sevices/cities.service';
import {City} from '../../interfaces';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  cities: City[] = [];
  sourceCity = '';

  constructor(
    private citiesService: CitiesService
  ) { }

  ngOnInit(): void {
  }

  getString<T extends object>(obj: T): string {
    return Object.values(obj).join(', ');
  }
}
