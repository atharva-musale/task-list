import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
 Observable,
} from 'rxjs';
import {
 FilterStatus,
} from '../../models';
import {
 TaskService,
} from '../../services';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FilterBarComponent {
  /**
   * Number of items left
   */
  public itemsLeft$: Observable<Number>;

  private filterMapping: {[key: string]: FilterStatus} = {
    all: FilterStatus.ALL,
    active: FilterStatus.ACTIVE,
    completed: FilterStatus.COMPLETED
  }

  constructor(private taskService: TaskService) {
    this.itemsLeft$ = this.taskService.numberOfActiveTasks$
  }

  public setFilterStatus(filterBy: string) {
    this.taskService.setFilterStatus(this.filterMapping[filterBy]);
  }
}
