import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrustTableService {
  configUrl =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  constructor(private http: HttpClient) {}

  getTrustData() {
    return this.http.get(this.configUrl);
  }
}
