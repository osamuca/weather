import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { CompleterData, CompleterService } from 'ng2-completer'

@Component({
  selector: 'cb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public dataRemote: CompleterData
  public city: string
  public data: any

  constructor(private http: Http, completerService: CompleterService) {
    this.dataRemote = completerService
      .remote("https://cors.io/?http://gd.geobytes.com/AutoCompleteCity?q=")
  }

  public onSelected(selected: any) {
    console.log(selected)
    if (selected && selected.title && (!this.city || this.city !== selected.title)) {
      this.city = selected.title
      this.getData()
    } else {
      this.city = ''
    }
  }

  getData() {
    this.http.get(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.city}")&format=json`)
      .map(res => res.json())
      .subscribe(data => this.data = data.query.results)
  }
}

// http://gd.geobytes.com/AutoCompleteCity?q=belo
// https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="belo horizonte, mg, brazil")&format=json