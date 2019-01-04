import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DATACOMMON } from '../store/actions/appActions';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getDataListCommon(data, code) {
    let listData = [];
    data.map(element => {
      if (element.code == code.toString()) {
        let dataObj = {
          key: element.keyword,
          value: element.value
        };
        listData.push(dataObj);
      }
    });
    return listData;
  }

  getDataValueCommon(data, code, key) {
    let _value = "";
    if (code != "" && key != "" && code != null && key != null) {
      data.map(element => {
        if (element.code == code.toString() && element.keyword == key.toString()) {
          _value = element.value;
        }
      });
    }
    return _value;
  }

  getAllListFromLocalStorage() {
    const dataCommon = JSON.parse(localStorage.getItem(DATACOMMON));
    return Observable.of(dataCommon);
  }
}
