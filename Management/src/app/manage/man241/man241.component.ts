import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ICheckOptions } from 'icheck';
import { FormBuilder, FormGroup } from '@angular/forms'
import { from } from 'rxjs';
import { requiredInput, notRequiredButDigits, salaryInput } from 'app/core/common-helper/custom-validate.helper';
import { CommonsService } from 'app/core/services/common.service';
import { ActivatedRoute, Router } from '@angular/router'
import { NotificationService } from 'app/core/services/notification.service';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-man241',
  templateUrl: './man241.component.html',
  styleUrls: ['./man241.component.scss']
})
export class Man241Component implements OnInit {
  [x: string]: any;
  public partitionGroupForm: FormGroup;
  public checkUser: number = 1;
  public submitted: boolean = false
  public test1: boolean = false
  public test2: boolean = false
  public queryId
  public parking_lot_id

  constructor(
    private formBuilder: FormBuilder,
    private commonsService: CommonsService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService,
    private router: Router,
    private location: Location
  ) { }
  text1: string = "text1";
  text2: string = "text2";
  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.queryId = params.prop
      this.parking_lot_id = params.parking_lot_id
      this.getDetailPartiton()
    })
    console.log(this.parking_lot_id)
    this.createPartitionGroupForm()

    var text1 = '<p>'
      + '<strong>第１条（契約の締結）</strong><br>'
      + '貸主（以下「甲」という。）および借主（以下「乙」という。）は、標記示物件（以下「本物件」という。）について、以下の条項により賃貸借契約（以下「本契約」という。）を締結した。'
      + '</p>'
      + '<p>'
      + '<strong>第２条（契約期間）</strong><br>'
      + '契約期間は標記表示の賃貸借期間とする<br>2.　本契約の更新は標記表示の通りとする。<br>3.　乙は、本条により本契約が更新される場合は、標記表示の更新料を甲に支払うものとする。'
      + '</p>'
      + '<p>'
      + '<strong>第３条（駐車料金）</strong><br>使用料金等は、月額を標記表示のとおりとし、乙は標記表示の支払期限、支払い方法にて一括して支払うものとする。なお、送金手数料は乙の負担とする。<br>'
      + '2.　甲は、公租公課または経済変動あるいは契約車種の変更により必要と認めるときは、契約期間中といえども、1ヶ月の予告期間をもって前項使用料金等の改定を請求することができる。<br>3.　契約の始期または終期もしくは前項による改定時における１ヶ月に満たない端数の期間にかかわる使用料金等はすべてその月の日割り計算によるものとする。'
      + '</p>'
      + '<p>'
      + '<strong>第４条（敷金）</strong><br>乙は、本契約締結と同時に、本契約に基づく債務を担保とするため敷金または保証金（以下「敷金」という．）として標記表示の金額を甲に預け入れるものとする。'
      + '2.　乙は、本物件を明け渡すまでの間、敷金をもって使用料金等の債務と相殺することができない。<br>'
      + '3.　本物件の明け渡しがあったときは、標記表示の金額を償却するものとする。また、甲は遅延なく、敷金の残額を無利息で乙に返還しなければならない。ただし、甲は、本物件の明け渡し時に使用料金の滞納、原状回復に要する費用の未払いその他の本契約から生じる乙の債務の不履行が存在する場合には、当該債務の額を敷金から差し引くことができる。<br>'
      + 'また、支払いは乙が指定する銀行口座とし、その際の振込手数料は乙が負担するものとする。<br>4.　乙は、敷金に対する債権を第三者に譲渡または債務の担保の用に供してはならない。<br>5.　前条により使用料金等の改定があった場合は敷金もこれに準じて改定するものとする。'
      + '</p>';

    var text2 = '<p>'
      + '駐車場の利用者（以下「利用者」という。）は、この規約を承認のうえ当駐車場を利用するものとします'
      + '</p>'
      + '<p>'
      + '<strong>1. 駐車できない車両</strong><br>'
      + '以下に該当する車両については、駐車することはできません。そのほか、当駐車場の管理上、支障あると認められる車両は駐車をお断りする場合があります。<br>長さ5.05m、幅1.95m、高さ1.55m、重量1.6tを超える車両。<br>'
      + '危険物、爆発物、悪臭を放つ物品を積載している車両。'
      + '</p>'
      + '<p>'
      + '<strong>2.目的外立入の禁止</strong><br>'
      + '当施設のご利用目的のお客様に限り、当駐車場をご利用頂けます。また、利用時間は、当施設の利用時間に準ずるものとします。なお、駐車以外での目的で、当駐車場に立ち入ることはできません。当駐車場において、駐車以外の行為（営業、宣伝、募金活動、署名活動等）をすることを禁止します。'
      + '</p>'
      + '<p>'
      + '<strong>3.遵守事項</strong><br>'
      + '当駐車場内では徐行し、追い越しをしないこと。また、出庫する車両の通行を優先します。<br>'
      + '警笛をみだりに使用することなく静かに運転します。<br>'
      + '当駐車場における喫煙及び火気の使用は厳禁です。<br>'
      + '当駐車場に駐車中は、必ずエンジンを停止して下さい。<br>'
      + '大音響でのカーステレオ、乱暴なドアの開閉、夜間の大きな話し声等、近隣の迷惑になる行為は禁止します。<br>'
      + '当駐車場においてビン、缶、紙屑、吸殻、雑誌、生活ゴミを捨てることは禁止します。<br>'
      + '当駐車場において飲酒、宿泊、洗車等、他の利用者の迷惑になるような行為は禁止します.'
      + '</p>'
      + '<p>'
      + '<strong>4.管理者の免責</strong><br>'
      + '当施設は、以下の事項について、一切責任を負いません'
      + '</p>'
      + '<p>'
      + '当駐車場における事故、利用者同士のトラブル<br>'
      + '車両の盗難、損壊、損傷<br>'
      + '車両の形状や構造等が原因による車両破損等'
      + '</p>';

  }

  get f() { return this.partitionGroupForm.controls }

  getDetailPartiton() {
    this.commonsService.getDetailPartitionGroup(this.queryId).subscribe(data => {
      if (data.status == 200) {
        this.f.client_group_number.setValue(data.body.client_group_number);
        this.f.partition_type.setValue(data.body.partition_type.toString());
        this.f.type.setValue(data.body.type.toString());
        this.f.accommodation_size.setValue(data.body.accommodation_size.toString());
        this.f.roof.setValue(data.body.roof.toString());
        this.f.ground.setValue(data.body.ground);
        this.f.note.setValue(data.body.note);
        this.f.use_24_hours.setValue(data.body.use_24_hours);
        this.f.number_of_unit.setValue(data.body.number_of_unit);
        this.f.rent.setValue(data.body.rent);
        this.f.manage_fee.setValue(data.body.manage_fee);
        this.f.update_fee.setValue(data.body.update_fee);
        this.f.security_deposit.setValue(data.body.security_deposit);
        this.f.key_money.setValue(data.body.key_money);
        this.f.depreciation_or_cancellation_fee.setValue(data.body.depreciation_or_cancellation_fee);
        this.f.deposit.setValue(data.body.deposit);
        this.f.contract_content_personal.setValue(data.body.contract_content_personal);
        this.f.contract_content_corporate.setValue(data.body.contract_content_corporate);
        this.f.usage_rule.setValue(data.body.usage_rule);
        console.log(data)
      }
    })
  }

  createPartitionGroupForm() {
    this.partitionGroupForm = this.formBuilder.group({
      parking_lot_id: [this.parking_lot_id ? this.parking_lot_id : "23"],
      client_group_number: [''],
      partition_type: ['1'],
      type: ['1'],
      accommodation_size: ['1'],
      roof: ['1'],
      ground: ['1'],
      note: [null],
      use_24_hours: ['1'],
      number_of_unit: ['', salaryInput],
      rent: ['', salaryInput],
      manage_fee: ['', salaryInput],
      update_fee: ['', salaryInput],
      security_deposit: ['', salaryInput],
      key_money: ['', salaryInput],
      depreciation_or_cancellation_fee: ['', salaryInput],
      deposit: ['', salaryInput],
      // administrative_fee: [null],
      contract_content_personal: [null],
      contract_content_corporate: [null],
      usage_rule: ['text2'],
    })
  }
  changeUser(event, type) {
    if (event.target.value == 1) {
      this.test1 = true
      this.text1 = "text1"
    } else {
      this.test2 = true
      this.text1 = "text2"
    }

  }
  onSubmit() {
    this.submitted = true
    //  console.log("this.partitionGroupForm",this.partitionGroupForm)
    if (this.test1) {
      this.partitionGroupForm.controls['contract_content_personal'].setValue('abcabac')
      this.partitionGroupForm.controls['contract_content_corporate'].setValue('')
    } else {
      this.partitionGroupForm.controls['contract_content_corporate'].setValue('abcabac')
      this.partitionGroupForm.controls['contract_content_personal'].setValue('')
    }
    if (this.partitionGroupForm.invalid) {
      return;
    }
    if (!this.queryId) {
      this.commonsService.createPartitionGroup(this.partitionGroupForm.value).subscribe(data => {
        if (data.status == 200) {
          this.notification.showNotification('区画グループの新規登録が完了しました。', 1)
          this.location.back();
        } else {
          console.log("Register Error")
        }
      })
    } else {
      this.commonsService.updatePartitionGroup(this.partitionGroupForm.value, this.queryId).subscribe(data => {
        if (data.status == 200) {
          this.notification.showNotification("区画グループの編集が完了しました。", 1)
          this.location.back();
        } else {
          console.log("update Error")
        }
      })
    }
  }
}
