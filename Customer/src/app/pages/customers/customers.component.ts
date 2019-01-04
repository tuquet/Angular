import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { requiredInput, emailValidation } from 'app/core/common-helper/custom-validate.helper';
import { CommonsService } from 'app/core/services/commons.service';
declare var $: any;
@Component({
    selector: 'contarct-form',
    templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
    public ContactForm: FormGroup;
    public contactType: number = 1;
    public submitted: boolean = false
    constructor(
        private formBuider: FormBuilder,
        private commonsService: CommonsService
    ) {}

    ngOnInit() {
        this.contactFormBuider();
        var _this = this
        $('.label-icheck [name="contact_type"]').on('ifChecked', function (event) {
            _this.contactType = this.value;
        });
    }

    contactFormBuider() {
        this.ContactForm = this.formBuider.group({
            parking_lot_name: ['', requiredInput],
            contact_type: [this.contactType, requiredInput],
            customer_name: ['', requiredInput],
            email: ['', emailValidation],
            phone_number: ['', requiredInput],
            content: ['', requiredInput]
        })
    }
    get f() { return this.ContactForm.controls }

    onSubmit() {
        this.submitted = true
        if (this.ContactForm.invalid) {
            return;
        }
        this.ContactForm.controls['contact_type'].setValue(this.contactType);
        this.commonsService.createContact(this.ContactForm.value).subscribe(data => {
            console.log(data)
            if (data.status == 200) {
                $('#contact').hide();
                $('#success').show();
                window.scroll(0, 0)
            }
        })
    }
}