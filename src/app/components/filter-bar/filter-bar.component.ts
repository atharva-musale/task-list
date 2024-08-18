import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {
  map,
 Observable,
} from 'rxjs';
import {
 FilterStatus,
} from '../../models';
import {
 TaskService,
} from '../../services';

interface FilterSelectionData {
  all: boolean;
  active: boolean;
  completed: boolean;
}

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

  /**
   * Currently selected filter
   */
  public selectedFilterData$: Observable<FilterSelectionData>;

  private filterMapping: {[key: string]: FilterStatus} = {
    all: FilterStatus.ALL,
    active: FilterStatus.ACTIVE,
    completed: FilterStatus.COMPLETED
  }

  constructor(private taskService: TaskService) {
    this.itemsLeft$ = this.taskService.numberOfActiveTasks$
    this.selectedFilterData$ = this.taskService.filterState$.pipe(
      map(filterState => ({
        all: filterState === FilterStatus.ALL,
        active: filterState === FilterStatus.ACTIVE,
        completed: filterState === FilterStatus.COMPLETED
      }))
    );
  }

  public setFilterStatus(filterBy: string) {
    this.taskService.setFilterStatus(this.filterMapping[filterBy]);
  }

  public clearCompletedTasks() {
    this.taskService.clearCompletedTasks();
  }
}
