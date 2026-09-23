import { Compiler, Component, computed, inject, input} from '@angular/core';
import { AnnualData } from '../user-input/user-input.model';
import { CurrencyPipe} from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}
