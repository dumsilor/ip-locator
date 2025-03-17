import { Component, OnInit } from '@angular/core';
import { locateIpService } from './ip-locator-landing.service';

@Component({
  selector: 'app-ip-locator-landing',
  standalone: true,
  imports: [],
  templateUrl: './ip-locator-landing.component.html',
  styleUrl: './ip-locator-landing.component.scss'
})
export class IpLocatorLandingComponent implements OnInit {
    constructor(private ipLocatorService:locateIpService){}
    client_ip: any;
    ngOnInit(): void {
        this.ipLocatorService.get_ip().subscribe(ip=>{
            this.client_ip = ip;
        })
    }

}
