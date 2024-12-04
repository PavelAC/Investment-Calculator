import { Component, output, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
// import { InvestmentInput } from '../investment-input-model';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // calculate = output<InvestmentInput>()

  enteredInitailInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredExpectedReturn=signal('5');
  enteredDuration=signal('10');

  constructor(private investmentService: InvestmentService) {}
  
  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitailInvestment(),
      duration: +this.enteredDuration(), 
      expectedReturn: +this.enteredExpectedReturn(), 
      annualInvestment: +this.enteredAnnualInvestment()
      });

    // this.calculate.emit();
    // this.enteredInitailInvestment.set('0');
    // this.enteredAnnualInvestment=signal('0');
    // this.enteredExpectedReturn=signal('5');
    // this.enteredDuration=signal('10');
  }
}
