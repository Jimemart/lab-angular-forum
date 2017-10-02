import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads;
  constructor(public apiService:ApiService ) { }

  ngOnInit() {
  this.apiService.showThreads()
                  .subscribe((threads)=>{
                    this.threads = threads
                  })

  }

}
