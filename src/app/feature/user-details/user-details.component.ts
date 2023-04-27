import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {IUser} from "../../core/interfaces/IUser";
import {select, Store} from "@ngrx/store";
import {selectUsers} from "../../core/store/selectors/users.selector";
import {selectUser} from "../../core/store/selectors/user.selector";
import {IAppState} from "../../core/store/state/app.state";
import {LoadUser} from "../../core/store/actions/user.actions";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  user$: Observable<IUser | null> = this.store.pipe(select(selectUser));

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.store.dispatch(new LoadUser(Number(params['id'])));
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
