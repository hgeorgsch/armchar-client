import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
     <div class="footer">
        <div class="card clearfix">
           <span class="footer-text-left">ArMchar-client 0.1alpha</span>
        </div>
     </div>
 `,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
