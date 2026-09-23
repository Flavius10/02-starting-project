import { Component, output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { type UserInput } from './user-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);

  private investmentService = new InvestmentService();

  constructor(investmentService: InvestmentService){
    this.investmentService = investmentService;
  }

  onSubmit(){

    const data = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    }

    this.investmentService.calculateInvestmentResults(data);

    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.duration.set(0);
    this.expectedReturn.set(0);
    
  }

}
