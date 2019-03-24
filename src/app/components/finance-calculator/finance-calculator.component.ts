import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-finance-calculator',
    templateUrl: './finance-calculator.component.html',
    styleUrls: ['./finance-calculator.component.scss'],
})
export class FinanceCalculatorComponent implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            income: ['', Validators.required],
            expenses: ['', Validators.required],
            assets: ['', Validators.required],
            liabilities: ['', Validators.required],
        });

        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
}
