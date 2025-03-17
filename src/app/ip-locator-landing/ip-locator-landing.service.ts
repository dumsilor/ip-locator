import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})


export class locateIpService {

    constructor(private httpClient: HttpClient){}

    get_ip() {
        return this.httpClient.get("https://api.ipify.org?format=json")
    }
}