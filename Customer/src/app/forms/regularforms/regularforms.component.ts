import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

declare var $: any;

@Component({
    selector: 'app-regularforms-cmp',
    templateUrl: 'regularforms.component.html'
})

export class RegularFormsComponent implements OnInit {
    registerForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.registerForm = this.formBuilder.group({
            email: ['',Validators.required],
            password: []
        })
    }
    onSubmit() {

    }
}
