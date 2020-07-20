import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AuthService } from 'app/shared/auth/auth.service';
import { ServicesService } from 'app/shared/services/services.service';
import { ClientsService } from 'app/shared/services/clients.service';
import { ProspectsService } from '../services/prospects.service';

@Component({
  selector: 'app-client-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesClientComponent implements OnInit {
  person$: Observable<any>;
  servicesFiltered$: Observable<any>;
  formAddService: FormGroup;
  pItemsInPage = '5';

  servicesForUpdate: FormGroup;

  @Input('client_id') client_id: any;
  @Input('type') type: 'client' | 'prospect';
  serviceSelectConfig = {
    searchPlaceholder: 'Buscar',
    noResultsFound: 'Sin resultados',
    placeholder: 'Seleccionar',
    displayKey: 'name',
    searchOnKey: 'name',
    search: true,
    moreText: 'más'
  };
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private servicesService: ServicesService,
    private clientService: ClientsService,
    private prospectService: ProspectsService
  ) {
    this.formAddService = this.fb.group({
      services: [[]],
      enable: [[]],
      client_id: ['', Validators.required]
    });
    this.servicesForUpdate = this.fb.group({
      services: [[], Validators.required],
      enable: [[], Validators.required],
      client_id: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getClientServices();
    this.getServices();
    // this.person$ = this.clientService.show(this.client_id);
  }

  getClientServices() {
    this.formAddService.controls['client_id'].setValue(this.client_id);
    this.person$ =
      this.type === 'client'
        ? this.clientService.show(this.client_id)
        : this.prospectService.show(this.client_id);

    this.person$.subscribe(client => {
      if (client) {
        this.servicesForUpdate.controls['client_id'].setValue(client.id);
        this.servicesForUpdate.controls['services'].setValue(
          client.services.map(service => service.id)
        );
        this.servicesForUpdate.controls['enable'].setValue(
          client.services.map(service => service.pivot.enable)
        );
      }
    });
  }

  getServices() {
    const office_id = this.auth.main_office$.value;
    this.servicesFiltered$ = this.servicesService.search({
      office_id,
      type: this.type
    });
  }

  servicesSelected(services: any[]) {
    const servicesSeletedId = services.map(service => service.id);
    const defaultDisableService = services.map(service => 0);
    this.formAddService.controls['services'].setValue(servicesSeletedId);
    this.formAddService.controls['enable'].setValue(defaultDisableService);
  }

  addServices() {
    if (this.formAddService.valid) {
      this.clientService.addService(this.formAddService.value).subscribe({
        next: response => {
          console.log(response);
          this.getClientServices();
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  updateServices() {
    if (this.servicesForUpdate.valid) {
      this.clientService.addService(this.servicesForUpdate.value).subscribe({
        next: response => {
          console.log(response);
          this.getClientServices();
        },
        error: error => {
          console.error(error);
        }
      });
    }
  }

  changeStatusService(event, index) {
    const prevValue = this.servicesForUpdate.controls['enable'].value;
    prevValue[index] = event.target.checked ? '1' : '0';
  }

  get isAdmin() {
    return this.auth.isAdmin();
  }
}
