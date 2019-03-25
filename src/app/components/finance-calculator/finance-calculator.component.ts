import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationProvider } from '../layout/interfaces/NavigationProvider';
import { SharedNavigationService } from '../../services/shared-nevigation/shared-navigation.service';
import { NavigationData } from '../layout/models/NavigationData';

@Component({
    selector: 'app-finance-calculator',
    templateUrl: './finance-calculator.component.html',
    styleUrls: ['./finance-calculator.component.scss'],
})
export class FinanceCalculatorComponent implements OnInit, NavigationProvider {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    navData = new NavigationData(
        'Finance Calculator',
        'Calculate Your Personal Finances',
        'show_chart'
    );

    constructor(
        private _formBuilder: FormBuilder,
        public navService: SharedNavigationService
    ) {}

    ngOnInit() {
        this.navService.initNavigation(this.navData);
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
