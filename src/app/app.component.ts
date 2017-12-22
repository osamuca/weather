import { Component } from '@angular/core'

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mylookupservice: any

  text: string

      results: string[]

      search(event:any) {
          this.mylookupservice.getResults(event.query).then((data:any) => {
              this.results = data
          })
      }
}
