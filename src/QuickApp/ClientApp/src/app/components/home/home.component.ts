// ====================================================

// Email: support@ebenmonney.com
// ====================================================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';

import { AlertService, DialogType, MessageSeverity } from '../../services/alert.service';
import { ModalService } from '../../services/modalservice';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut]
})
export class HomeComponent {
  constructor(public configurations: ConfigurationService, private alertService: AlertService, private modalService: ModalService) {
  }

  Bootstrappopup() {
    this.alertService.showDialog("Caller 1 IS ON THE LINE", DialogType.confirm,
      () => this.alertService.showMessage("Updating Caller Status!", "", MessageSeverity.default),
      () => this.alertService.showMessage("Operation Cancelled!", "", MessageSeverity.default));
  }

  showCallerPopup(id: string) {
    this.modalService.open(id);
    // this.alertService.showMessage("Operation Cancelled!", "", MessageSeverity.default)
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
