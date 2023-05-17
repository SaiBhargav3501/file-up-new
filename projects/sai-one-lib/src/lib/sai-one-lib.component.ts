import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-sai-one-lib',
  template: `
     <div>
    
    <input type="file" (change)="onFileSelected($event)" accept=".doc,.docx,.pdf">
   
  </div>
  `,
  styles: [
  ]
})
export class SaiOneLibComponent {
  @Output() fileUploaded = new EventEmitter<File>();
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploaded.emit(file);
  }

}
