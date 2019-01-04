import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotificationService } from 'app/core/services/notification.service';
import { requiredInput } from 'app/core/common-helper/custom-validate.helper';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonsService } from 'app/core/services/common.service';
import {Location} from '@angular/common'
import { from } from 'rxjs';
declare var $: any
@Component({
  selector: 'app-man251',
  templateUrl: './man251.component.html',
  styleUrls: ['./man251.component.scss']
})
export class Man251Component implements OnInit {

  groupForm: FormGroup;
  public isSubmittedForm: boolean = false;
  public valueSelect
  public partitionGroupId
  constructor(
    private router: Router,
    private notification: NotificationService,
    private commonsService: CommonsService,
    private location: Location,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    let _this = this
    this.activatedRoute.queryParams.subscribe(params => {
      _this.partitionGroupId = params.partition_group_id
      // this.getDetailPartiton()
    })
    this.buildFormGroup();
    var status_data = [{
      id: 0,
      text: '<span class="badge badge-success badge-status">&nbsp;</span> 空車',
      html: '<span class="badge badge-success badge-status">&nbsp;</span> 空車'
  }, {
      id: 1,
      text: '<span class="badge badge-warning-light badge-status">&nbsp;</span> 要相談',
      html: '<span class="badge badge-warning-light badge-status">&nbsp;</span> 要相談'
  }, {
      id: 2,
      text: '<span class="badge badge-danger badge-status">&nbsp;</span> 満車',
      html: '<span class="badge badge-danger badge-status">&nbsp;</span> 満車'
  }];
    this.select2(status_data)
    $(window).resize(function () {
      _this.select2(status_data)
    });
    
    $("#status_select").on("change", function (e) {
      _this.valueSelect = this.value
      // _this.groupForm.controls["publicStatus"].setValue(this.value)
    })
  }

  buildFormGroup() {
    this.groupForm = new FormGroup({
      status: new FormControl('', requiredInput),
      image_url: new FormControl(''),
      client_parcel_number: new FormControl('', requiredInput),
      partition_group_id: new FormControl('1'),
    })
  }

  submitForm() {
    console.log(this.partitionGroupId)
    let params = {
      partition_group_id: this.partitionGroupId,
      client_parcel_number: this.groupForm.controls["client_parcel_number"].value,
      status: parseInt(this.valueSelect),
      image_url: "Url test"
    }
    this.isSubmittedForm = true;
    this.commonsService.createParcel(params).subscribe(data => {
      if (data.status == 200) {
        this.location.back();
      }
    })
    // this.notification.showNotification('テキストメッセージ');
    // this.router.navigate(['/manage/division_grouplist']);
  }

  select2(status_data) {
    $("#status_select").select2({
      data: status_data,
      escapeMarkup: function (markup) {
        return markup;
      },
      templateResult: function (data) {
        return data.html;
      },
      templateSelection: function (data) {
        return data.text;
      },
      minimumResultsForSearch: -1
    })
  }
}
